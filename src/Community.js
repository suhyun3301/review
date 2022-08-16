import { useRef, useState } from 'react'
function Community() {
  const input = useRef(null)
  const textarea = useRef(null)
  const [Posts, setPosts] = useState([])

  const inputValue = input.current.value
  const textareaValue = textarea.current.value

  const resetForm = () => {
    input.current.value = ''
    textarea.current.value = ''
  }

  const createPost = () => {
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      return alert('내용을 입력하세요')
    }

    setPosts([
      ...Posts,
      {
        title: input.current.value,
        content: textarea.current.value,
      },
    ])

    resetForm()
  }

  const deletePost = (i) => {
    const NewPosts = Posts.filter((_, index) => index !== i)
    setPosts(NewPosts)
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
              <div className="text">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>

              <div className="btn-box">
                <button>Edit</button>
                <button
                  onClick={() => {
                    deletePost(i)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Community
