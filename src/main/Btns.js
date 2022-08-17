import Anime from '../assets/Anime'
import { useEffect, useRef, useState } from 'react'

function Btns({ setScrolled, setPos }) {
  const btnsRef = useRef(null)
  const offsetTop = useRef([])
  const num = 4
  const speed = 500

  const getOffsetTop = () => {
    offsetTop.current = []
    const sections =
      btnsRef.current.parentElement.querySelectorAll('.content-box')
    for (const section of sections) {
      offsetTop.current.push(section.offsetTop)
    }
    setPos(offsetTop.current)
  }

  const activation = () => {
    const btns = btnsRef.current.children
    const sections =
      btnsRef.current.parentElement.querySelectorAll('.content-box')
    const scroll = window.scrollY
    const base = -window.innerHeight / 4

    setScrolled(scroll)

    offsetTop.current.map((pos, i) => {
      if (scroll >= pos + base) {
        for (const btn of btns) btn.classList.remove('on')
        for (const section of sections) section.classList.remove('on')
        btns[i].classList.add('on')
        sections[i].classList.add('on')
      }
    })
  }

  useEffect(() => {
    btnsRef.current.children[0].classList.add('on')
    getOffsetTop()
    window.addEventListener('resize', getOffsetTop)
    window.addEventListener('scroll', activation)

    return () => {
      window.removeEventListener('resize', getOffsetTop)
      window.removeEventListener('scroll', activation)
    }
  }, [])

  return (
    <ul className="scroll-btns" ref={btnsRef}>
      {Array(num)
        .fill()
        .map((_, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                new Anime(window, {
                  prop: 'scroll',
                  value: offsetTop.current[i],
                  duration: speed,
                })
              }}
            >
              {i + 1}
            </li>
          )
        })}
    </ul>
  )
}

export default Btns
