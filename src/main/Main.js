import Visual from './Visual'
import News from './News'
import Pic from './Pic'
import Vids from './Vids'
import Btns from './Btns'
import Anime from '../assets/Anime'
import { useEffect, useRef, useState } from 'react'

function Main() {
  const main = useRef(null)
  const offsetTop = useRef([])
  const [Index, setIndex] = useState(0)

  const getOffsetTop = () => {
    const sections = main.current.querySelectorAll('.content-box')
    for (const section of sections) {
      offsetTop.current.push(section.offsetTop)
    }
  }

  useEffect(() => {
    getOffsetTop()

    new Anime(window, {
      prop: 'scroll',
      value: offsetTop.current[Index],
      duration: 500,
    })
  }, [Index])

  return (
    <main ref={main}>
      <Visual />
      <News />
      <Pic />
      <Vids />
      <Btns setIndex={setIndex} />
    </main>
  )
}

export default Main
