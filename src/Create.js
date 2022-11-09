import { useState } from "react";
import{useNavigate} from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState(' ');
    const[body,setBody]=useState(' ');
    const[author,setAuthor]=useState('mario');
    const[isPending,setIsPending]=useState('false');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        setIsPending(true);

        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog add');
            setIsPending(false);
            //history.go(-1);
            navigate("/");
        })

        

    }
    return ( 
        <div className="create">
            <h2>add new </h2>
            <form onSubmit={handleSubmit}>
                     <label>Blog title:</label>
                        <input 
                        type="text" 
                        required 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Blog body:</label>
                        <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Blog author:</label>
                        <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                        </select>
                        <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;
