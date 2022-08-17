import Visual from './Visual'
import News from './News'
import Pic from './Pic'
import Vids from './Vids'
import Btns from './Btns'
import { useEffect, useRef } from 'react'
import '../assets/Anime'

function Main() {
  const main = useRef(null)

  useEffect(() => {
    const sections = main.current.querySelectorAll('.content-box')
    for (const section of sections) {
      console.log(section.offsetTop)
    }
    console.log(sections)
  }, [])

  return (
    <main ref={main}>
      <Visual />
      <News />
      <Pic />
      <Vids />
      <Btns />
    </main>
  )
}

export default Main
