function Pic({ Scrolled, currentPos }) {
  const position = Scrolled - currentPos || 0

  return (
    <section className="pic content-box">
      <h1 style={{ left: position * 4 }}>Flicker</h1>
      <h2 style={{ left: position / 2 }}>Gallery</h2>
      <div
        className="box"
        style={{
          transform: `scale(${1 + position / 1000})`,
          opacity: 1 - position / 1000,
        }}
      ></div>
    </section>
  )
}

export default Pic
