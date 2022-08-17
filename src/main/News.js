import { useEffect, useState } from 'react'

function News() {
  const getLocalData = () => {
    const dummyPosts = [
      { title: 'Hello1', content: 'Here comes description in detail.' },
      { title: 'Hello2', content: 'Here comes description in detail.' },
      { title: 'Hello3', content: 'Here comes description in detail.' },
      { title: 'Hello4', content: 'Here comes description in detail.' },
      { title: 'Hello5', content: 'Here comes description in detail.' },
    ]

    const data = localStorage.getItem('post')

    if (data) {
      return JSON.parse(data)
    } else {
      return dummyPosts
    }
  }

  const [Posts, setPosts] = useState(getLocalData())

  return (
    <section className="news content-box">
      <h2>News</h2>
      <div className="post-list">
        {Posts.map((post, i) => {
          if (i >= 4) return

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
