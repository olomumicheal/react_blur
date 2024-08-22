import React from "react";

const Bloglist = ({blogs, Title}) => {
    // const blogs = props.blogs
    // const Title = props.Title
    return (

        <div className="blog">
            <h2>{Title}</h2>
            {
                blogs.map((blog) =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>Written by {blog.author}</p>
                    </div>
                ))
            }            

        </div>
      );
}
 
export default Bloglist;