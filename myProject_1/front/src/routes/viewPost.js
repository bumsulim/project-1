import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const ViewPost = () => {

  const params = useParams();
  const postIdUrl = Number(params.postId)
  const backendUrl = 'http://localhost:4000'
  const [postData, setPostData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${backendUrl}/api/postData`);
          setPostData(response.data)
        } catch {
          console.error(`에러 발생`);
        }
      }

      fetchData()
    }, [])

  const dataFilter = postData.filter(idx => idx.post_id === postIdUrl)

  const date = dataFilter[0]?.post_date
  const dateSlice = date?.slice(0, 10)

  return (
    <div id="ViewPost" className="Main">
      <div className="ViewPost-box">
        <h1>{dataFilter[0]?.post_header}</h1>
        <p>{dataFilter[0]?.post_main}</p>
        <div>
          <p>{dateSlice}</p>
          <p>{dataFilter[0]?.post_writer}</p>
        </div>
      </div>
    </div>
  )
}

export default ViewPost