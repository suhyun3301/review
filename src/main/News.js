import { useEffect, useState } from 'react'

function News() {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    let data = localStorage.getItem('post')
    data = JSON.parse(data)
    setPosts(data)
  }, [])

  return (
    <section className="news content-box">
      <h2>News</h2>
      <div className="post-list">
        {Posts.map((post, i) => {
          if (i >= 3) return

          return (
            <article key={i}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default News
