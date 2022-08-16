import { useRef, useState } from 'react'
function Community() {
  const input = useRef(null)
  const textarea = useRef(null)
  const inputEdit = useRef(null)
  const textareaEdit = useRef(null)
  const [Posts, setPosts] = useState([])
  const [Allowed, setAllowed] = useState(true)

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

  const enableUpdate = (i) => {
    if (!Allowed) return
    setAllowed(false)

    setPosts(
      Posts.map((post, index) => {
        if (i === index) post.enableUpdate = true
        return post
      })
    )
  }

  const disableUpdate = (i) => {
    setAllowed(true)

    setPosts(
      Posts.map((post, index) => {
        if (i === index) post.enableUpdate = false
        return post
      })
    )
  }

  const updatePost = (i) => {
    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      resetForm()
      return alert('수정할 제목과 본문을 모두 입력하세요.')
    }

    setPosts(
      Posts.map((post, index) => {
        if (i === index) {
          post.title = inputEdit.current.value
          post.content = textareaEdit.current.value
          post.enableUpdate = false
        }
        return post
      })
    )

    setAllowed(true)
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
          <button className="btn" type="button" onClick={resetForm}>
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
              {post.enableUpdate ? (
                <aticle className="enable-box">
                  <div className="input-box">
                    <input
                      type="text"
                      defaultValue={post.title}
                      ref={inputEdit}
                    />
                  </div>

                  <div className="input-box">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      defaultValue={post.content}
                      ref={textareaEdit}
                    ></textarea>
                  </div>

                  <div className="btn-box">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => {
                        disableUpdate(i)
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="btn"
                      type="button"
                      onClick={() => {
                        updatePost(i)
                      }}
                    >
                      Update
                    </button>
                  </div>
                </aticle>
              ) : (
                <>
                  <div className="text">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>

                  <div className="btn-box">
                    <button
                      onClick={() => {
                        enableUpdate(i)
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        deletePost(i)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Community
