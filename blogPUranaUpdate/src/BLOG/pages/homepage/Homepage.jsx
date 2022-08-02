import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import {useEffect, useState} from "react";
import axios from "axios";

const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/"

export default function Homepage() {
  const {search} = useLocation();


  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(URL_BACKEND +"api/posts"+search);
      setPosts(res.data);
      // console.log(res)
    }
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
}
