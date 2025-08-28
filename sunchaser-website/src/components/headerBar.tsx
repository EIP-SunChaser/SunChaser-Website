import { Link } from "react-router-dom"

function HeaderBar() {
    return (
        <div>
            <Link to={"/"}>
                <h2>Home</h2>
            </Link>
            <Link to={"/news"}>
                <h2>News</h2>
            </Link>
            <Link to={"/"}>
                <h2>SunChaser</h2>
            </Link>
            <Link to={"/download"}>
                <h2>Downloads</h2>
            </Link>
            <Link to={"/aboutus"}>
                <h2>About Us</h2>
            </Link>
        </div>
    );
};

export default HeaderBar