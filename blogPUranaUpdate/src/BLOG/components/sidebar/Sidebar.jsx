import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios"
import me from "../../assets/DSC_0516.JPG"


const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/"

export default function Sidebar() {
  const [cats,setCat] = useState([])

  useEffect(()=>{
    const getCat = async()=>{
      const res = await axios.get(URL_BACKEND + "api/categories");
      setCat(res.data)
    };
    getCat()
  },[])
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={me} alt=""/>
        <p>
          Welcome to Blog$ify, your number one place to express your knowladge and view. We're dedicated to giving you the very best of expirence, with a focus on comfortability and features.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <li className="sidebarListItem" key={c._id}>
              <Link className="link" to={"/?cat="+c.name}>
                {c.name}
              </Link>
            </li>
          ))}
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
