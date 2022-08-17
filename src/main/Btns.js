import Anime from '../assets/Anime'
import { useEffect, useRef, useState } from 'react'

function Btns({ setIndex }) {
  const btns = useRef(null)
  const offsetTop = useRef([])
  const num = 4
  const speed = 500

  const getOffsetTop = () => {
    offsetTop.current = []
    const sections = btns.current.parentElement.querySelectorAll('.content-box')
    for (const section of sections) {
      offsetTop.current.push(section.offsetTop)
    }
  }

  useEffect(() => {
    getOffsetTop()
    window.addEventListener('resize', getOffsetTop)

    return () => {
      window.removeEventListener('resize', getOffsetTop)
    }
  }, [])

  return (
    <ul className="scroll-btns" ref={btns}>
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
