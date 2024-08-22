import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
       <>
        <nav>
            <div className="logo">
                <h2>BlogContent</h2>
            </div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bloglist">BlogList</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>


        </nav>

        <Outlet />
       </>
      );
}
 
export default Nav;