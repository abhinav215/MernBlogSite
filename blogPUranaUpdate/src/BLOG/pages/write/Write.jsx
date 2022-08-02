import { useContext, useState } from "react";
import "./write.css";
import axios from "axios"
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/"

export default function Write() {
  let navigate = useNavigate();
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const newPost ={
      title,
      desc,
      username:user.username
    }
    if(file){
      const data = new FormData()
      const filename= Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename
      try {
        await axios.post(URL_BACKEND +"api/upload",data)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      console.log(newPost)
      const res = await axios.post(URL_BACKEND +"api/posts",newPost)
      const abc = res.data._id
      // window.location.replace("/post/"+res.data._id)
      navigate("../post/"+abc, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="write">
      {file &&(
        <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
      )}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}