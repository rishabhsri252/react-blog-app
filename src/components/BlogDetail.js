import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BlogDetailsUI from './BlogDetailsUI'
import CircularProgress from '@mui/material/CircularProgress';

const BlogDetails = () => {
    const { blogId } = useParams();
    let [detailsUI, setDetailsUI] = useState(<CircularProgress />);

    useEffect(() => {
        function fetchBlogDetails() {
            axios.get('http://localhost:4000/blogs/'+blogId)
                .then((response) => {
                    setDetailsUI(detailsUI = <BlogDetailsUI blogId={blogId} blog={response.data}/>)
                })
        }
        fetchBlogDetails()
    }, [blogId])

    return (
        <>
            {detailsUI}
        </>
    )
}

export default BlogDetails