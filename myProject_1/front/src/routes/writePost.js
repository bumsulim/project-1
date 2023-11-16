import axios from "axios";
import { useState } from "react";

function WritePost() {
  const [inputHeader, setInputHeader] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputMain, setInputMain] = useState("");

  const backendUrl = 'http://localhost:4000'

  const handleInputHeader = (e) => {
    setInputHeader(e.target.value)
  }

  const handleInputWriter = (e) => {
    setInputWriter(e.target.value)
  }

  const handleInputMain = (e) => {
    setInputMain(e.target.value)
  }

  const postSubmit = () => {
    const nowDate = () => {
      let today = new Date();
      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);
      // !!
      return `${year}${month}${day}`;
    }
    
    let submitAll = [inputHeader, inputWriter, inputMain, nowDate()];

    axios.post(`${backendUrl}/api/postUp`, submitAll)
      .then((res) => {
        alert("게시글이 등록 되었습니다.")
      }).catch((err) => {
        console.err('ERROR', err)
      })
  }

  return (
    <div id="WritePost" className="Main">
      <form>
        <div>
          <input className="WritePost-header" value={inputHeader} onChange={handleInputHeader} type="text" placeholder="제목을 입력해 주세요 ."></input>
          <input className="WritePost-writer" value={inputWriter} onChange={handleInputWriter} type="text" placeholder="작성자"></input>
        </div>
        <textarea className="WritePost-main" value={inputMain} onChange={handleInputMain} placeholder="내용을 입력해 주세요."></textarea>
        <input className="WritePost-submit" type="submit" onClick={postSubmit}></input>
        
      </form>
    </div>
  );
}

export default WritePost;