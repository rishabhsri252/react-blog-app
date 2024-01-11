import { Card } from '@mui/material';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class ListUI extends Component {
    render() {

        let blogs = this.props.blogs.sort((a,b) => {
            return (new Date(b.creationDate) - new Date(a.creationDate))
        });

        let filteredBlogs = blogs.filter((item) => {
            return item.category.includes(this.props.filter) && item.title.includes(this.props.search)
        })

        return filteredBlogs.map(
            (blog) => {
                let creationDate = new Date(blog.creationDate).toString().slice(0,16)
                return (
                        <Link className='blog-card' to={'/home/'+blog.id} key={blog.id}>
                            <Card className="blog">
                            <img src={ blog.thumbnail } alt={ blog.title } />
                            <h3>{ blog.title }</h3>
                            <div className="description">
                                <p>{ blog.description }</p>
                            </div>
                            <h6>{ creationDate }</h6>
                            </Card>
                        </Link>
                )
            }
        )
    }
}

export default ListUI