import { Link } from "react-router-dom";

const notfound = () => {
    return ( 
        <div className="">
            <h2>sorry cannot found</h2>
            <Link to="/">back to home </Link>
        </div>
     );
}
 
export default notfound;