import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css"
const NotFoundPage = () =>
{
    return (
        <div className='notFound'>
            <FaTriangleExclamation className="notFound-triangle"/>
            <h1 className="notFound-status">404</h1>
            <h1 className="notFound-text">Page Not Found</h1>
            <Link to='/' className="notFound-back">Home</Link>
        </div>
    );
}

export default NotFoundPage;