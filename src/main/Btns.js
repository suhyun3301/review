function Btns({ setIndex }) {
  return (
    <ul className="scroll-btns">
      <li
        className="on"
        onClick={() => {
          setIndex(1)
        }}
      >
        1
      </li>
      <li
        onClick={() => {
          setIndex(2)
        }}
      >
        2
      </li>
      <li
        onClick={() => {
          setIndex(3)
        }}
      >
        3
      </li>
      <li
        onClick={() => {
          setIndex(4)
        }}
      >
        4
      </li>
    </ul>
  )
}

export default Btns
