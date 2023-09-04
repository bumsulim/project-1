function WritePost() {
  return (
    <div id="WritePost" className="Main">
      <form>
        <div>
          <input className="WritePost-header" type="text" placeholder="제목을 입력해 주세요 ."></input>
          <input className="WritePost-writer" type="text" placeholder="작성자"></input>
        </div>
        <textarea className="WritePost-main" placeholder="내용을 입력해 주세요."></textarea>
        <input className="WritePost-submit" type="submit"></input>
      </form>
    </div>
  );
}

export default WritePost;