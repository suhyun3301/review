import { Link } from 'react-router-dom'

function Visual() {
  return (
    <section className="visual content-box">
      <h2>Visual</h2>
      <Link to="/community" className="move-community">
        community page &gt;
      </Link>
    </section>
  )
}

export default Visual
