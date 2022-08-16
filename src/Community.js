function Community() {
  return (
    <section className="community">
      <div className="input-box">
        <label htmlFor="title">title</label>
        <input type="text" placeholder="Enter Title" />
      </div>

      <div className="input-box">
        <label htmlFor="task">task</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Enter content"
        ></textarea>
      </div>
      <div className="btn-box">
        <button className="btn" type="button">
          Cancel
        </button>

        <button className="btn" type="button">
          Registration
        </button>
      </div>
    </section>
  )
}

export default Community
