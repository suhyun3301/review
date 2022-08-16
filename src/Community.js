import { useRef } from 'react'
function Community() {
  const input = useRef(null)
  const textarea = useRef(null)

  const createPost = () => {
    console.log(input.current.value)
    console.log(textarea.current.value)
  }

  return (
    <section className="community">
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
    </section>
  )
}

export default Community
