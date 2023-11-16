import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {

  const backendUrl = 'http://localhost:4000'
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/api/postData`)
    .then((res) => {
      setPostData(res.data);
    }).catch((err) => {
      console.error(`에러 발생`, err);
    })
  }, [])
  // 최신 post 4개 보여주는 기능
  function createPost() {
    let arr1 = [];
    // 함수를 이용해서 받아온 데이터 뒷부분을 짜르는 기능
    const mainSlice = (idx) => {
      const str = postData[idx].post_main
      let result
      if (str.length > 16) {
        result = str.slice(0, 90)
      } else {
        return str
      }
      return result += ' ...'
    }
    // 함수를 이용해서 받아온 데이터 뒷부분을 짜르는 기능
    const footerSlice = (idx) => {
      const str = postData[idx].post_date
      let result = str.slice(0, 10)
      return result += ' '
    }

    for (let key in postData) {
      arr1.push
      (
        <li key={postData[key].post_id} className="post">
          <div className="post-header">
            <div>IMG</div>
            <Link to={`/post/view/${postData[key].post_id}`}>{postData[key].post_header}</Link>
          </div>
            <p className="post-main">{mainSlice(key)}</p>
            <p className="post-footer">{footerSlice(key)}{postData[key].post_writer}</p>
        </li>
      )
    }
    return arr1.slice(0, 4)
  }

  return (
    <div id="Main-post" className="Main">
      <main>
        <ul className="postBox">
          {createPost()}
        </ul>
        <div className="linkBox">
          <Link to='/post/more'>More posts</Link>
          <Link to='/post/write'>Write a post</Link>
        </div>
      </main>
  
    </div>
  );
}

export default Post;