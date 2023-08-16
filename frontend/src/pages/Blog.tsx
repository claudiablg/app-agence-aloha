import react, { useEffect, useState }  from 'react';
import axios from '../api/axios';




export const Blog = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchData = async() => {
            await axios.get(`/api/posts/d`)
                .then(response => {
                    console.log(response.data);
                })
        }
        fetchData();
    },[])

    

    return (
        <>
        </>
    )
}

export default Blog;