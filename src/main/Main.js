import Visual from './Visual'
import News from './News'
import Pic from './Pic'
import Vids from './Vids'
import Btns from './Btns'
import { useState } from 'react'

function Main() {
  const [Scrolled, setScrolled] = useState(0)
  const [Pos, setPos] = useState([])

  return (
    <main>
      <Visual />
      <News />
      <Pic Scrolled={Scrolled} currentPos={Pos[2]} />
      <Vids />
      <Btns setScrolled={setScrolled} setPos={setPos} />
    </main>
  )
}

export default Main
