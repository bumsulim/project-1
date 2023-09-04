import axios from "axios";
import { useEffect, useState } from "react";

function MorePost() {
  
  const backendUrl = 'http://localhost:4000'
  const [postdata, setPostdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`${backendUrl}/api/postdata`)
    .then((res) => {
      setPostdata(res.data);
    }).catch((err) => {
      console.error(`에러 발생`, err);
    })
  }, [])

  const createPost = () => {

    const mainSlice = (idx) => {
      const str = postdata[idx].post_main
      let result
      if (str.length > 16) {
        result = str.slice(0, 50)
      } else {
        return str
      }
      return result += ' ...'
    }

    const footerSlice = (idx) => {
      const str = postdata[idx].post_date
      let result = str.slice(0, 10)
      return result += ' '
    }

    let arr = [];

    for (let i = (currentPage - 1) * 10; i < Math.min(currentPage * 10, postdata.length); i++) {
      arr.push(
        <li key={i}>
          <div className="list-text">
            <h2>{postdata[i].post_header}</h2>
            <h3>{mainSlice(i)}</h3>
          </div>
          <div className="list-info">
            <h3>{footerSlice(i)}</h3>
            <h3>{postdata[i].post_writer}</h3>
          </div>
        </li>
      );
    }

    return arr
  }

  const createButton = () => {

    const activeButton = (i) => {
      if (currentPage === i) {
        return "active-button"
      };
    }

    const buttons = [];
     // 버튼 개수 계산
    const buttonCount = Math.ceil(postdata.length / 10);
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