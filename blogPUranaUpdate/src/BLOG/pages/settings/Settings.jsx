import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext,useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios"


const PF = "https://blog-site-restapi.herokuapp.com/images/"
const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/"

export default function Settings() {
  
  const {user,dispatch } = useContext(Context)
  
  const [file,setFile] = useState(null)
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [success,setSuccess] = useState(false)

  const handleSubmit= async (e)=>{
    e.preventDefault()
    dispatch({type:"UPDATE_START"})
    const updatedUser ={
      userId : user._id,
      username,
      email,
      password,
    }
    if(file){
      const data = new FormData()
      const filename= Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      updatedUser.profilePic = filename
      try {
        await axios.post(URL_BACKEND + "api/upload",data)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res = await axios.put(URL_BACKEND + "api/users/"+user._id ,updatedUser)
      setSuccess(true)
      dispatch({type:"UPDATE_SUCCESS",payload: res.data})
    } catch (error) {
      console.log(error)
      dispatch({type:"UPDATE_FAILURE"})
    }
  }



  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {/* <img
              src={file? URL.createObjectURL(file):PF+user.profilePic}
              alt=""
            /> */}
            
  
            {user.profilePic?
              <img className="topImg" src={file? URL.createObjectURL(file):PF+user.profilePic} alt="avaitar"/>:
              <img className="topImg" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=" alt="avaitar"/>
            }
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onClick={(e)=>setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input required type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input required type="email" placeholder={user.email} name="email" onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input required type="password" placeholder="Password" name="password" onChange={e=>setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span style={{color:"green",textAlign:"center",marginTop:"20px"}}>Profile has been updated .....</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
