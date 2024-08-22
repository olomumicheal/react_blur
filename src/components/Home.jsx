import React from "react";
import img1 from '../assets/image1.png'

const Home = () => {
    return (  
        <div className="home">
            <div className="container">
            <div className="row pt-5">
                <div className="col-md-5">
                    <img src={img1} alt="" />
                </div>

                <div className="col-md-7 pt-5">
                <div className="content text-center py-5">
                    <h4 className="text-danger display-5">Welcome To React Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut expedita id consectetur blanditiis optio quaerat quam ea itaque magni quasi, ad velit explicabo minus? Quis nulla facere molestiae quia et?</p>
                    <button className="btn btn-danger">Click Here</button>
                </div>
            </div>
            </div>
          
            </div>
        </div>
    );
}
 
export default Home;