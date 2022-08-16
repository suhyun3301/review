import { useRef, useState } from 'react'
function Community() {
  const input = useRef(null)
  const textarea = useRef(null)
  const [Posts, setPosts] = useState([])

  const createPost = () => {
    setPosts([
      ...Posts,
      {
        title: input.current.value,
        content: textarea.current.value,
      },
    ])
  }

  return (
    <section className="community">
      <div className="create">
        <div className="input-box">
          <label htmlFor="title">title</label>
          <input type="text" placeholder="Enter Title" ref={input} />
        </div>

        <div className="input-box">
          <label htmlFor="task">task</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Enter content"
            ref={textarea}
          ></textarea>
        </div>

        <div className="btn-box">
          <button className="btn" type="button">
            Cancel
          </button>

          <button className="btn" type="button" onClick={createPost}>
            Registration
          </button>
        </div>
      </div>

      <div className="show">
        {Posts.map((post, i) => {
          return (
            <div className="post-list" key={i}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Community
