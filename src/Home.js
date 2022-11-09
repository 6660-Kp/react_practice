
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

const {data : blogs,isPending,error}=useFetch('http://localhost:8000/blogs');




  return (
    <div className="home">
      {isPending&&<div>loading </div>}
      {error &&<div >{error}</div>}
      
      
     {(blogs && <BlogList blogs={blogs} />)}
     
     
    </div>
  );
}
 
export default Home;