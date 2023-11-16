import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MorePost() {
  
  const backendUrl = 'http://localhost:4000'
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`${backendUrl}/api/postData`)
    .then((res) => {
      setPostData(res.data);
    }).catch((err) => {
      console.error(`에러 발생`, err);
    })
  }, [])

  const createPost = () => {

    const mainSlice = (idx) => {
      const str = postData[idx].post_main
      let result
      if (str.length > 16) {
        result = str.slice(0, 50)
      } else {
        return str
      }
      return result += ' ...'
    }

    const footerSlice = (idx) => {
      const str = postData[idx].post_date
      let result = str.slice(0, 10)
      return result += ' '
    }

    let arr = [];

    for (let i = (currentPage - 1) * 10; i < Math.min(currentPage * 10, postData.length); i++) {
      arr.push(
        <li key={i}>
          <div className="list-text">
            <Link to={`/post/view/${postData[i].post_id}`}>{postData[i].post_header}</Link>
            <p>{mainSlice(i)}</p>
          </div>
          <div className="list-info">
            <h3>{footerSlice(i)}</h3>
            <h3>{postData[i].post_writer}</h3>
          </div>
        </li>
      );
    }

    return arr
  }

  const createButton = () => {
    //버튼 css 변환
    const activeButton = (i) => {
      if (currentPage === i) {
        return "active-button"
      };
    }

    const buttons = [];
     // 버튼 개수 계산
    const buttonCount = Math.ceil(postData.length / 10);
    for (let i = 1; i <= buttonCount; i++) {
      buttons.push(
        <button id={activeButton(i)} key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    return buttons
  }
  
  return (
    <div id="MorePost" className="Main">
      <ul className="list-box">
        {createPost()}
      </ul>
      <div className="button-box">
        {createButton()}
      </div>
    </div>
  );
}

export default MorePost;