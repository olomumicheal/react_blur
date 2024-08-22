import { useState, useEffect } from "react";
import Bloglist from "./BlogListContent";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json()
        })
        .then((data => {
            // console.log(data);
            setBlogs(data)
        }))
    }, [])


    return ( 
        <div className="home">
           {blogs && <Bloglist blogs = {blogs} Title = {"All Blog Content"}/>}
            {/* <Bloglist blogs =  {blogs.filter((blog) => blog.author === 'Mario')} Title = {"Micheal Blog Content"}/> */}
        </div>

    );
}

export default Home;