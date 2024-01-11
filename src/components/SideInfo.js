import { Rating } from '@mui/material'
import React, { Component } from 'react'
import BlogDetailsStyles from './styles/BlogDetails.module.css'
import withBlog from './withBlog';

class SideInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: null
        }
    }

    changeHandler = (e) => {
        this.setState({
            rating: e.target.value
        }, () => {
            console.log(this.state.rating)
            this.props.updateBlog(this.props.blogId, "ratings", this.state.rating)
        })
    }

    render() {
        let avgRating = this.props.blog.ratings.reduce((sum, rating) => sum + Number(rating), 0) / this.props.blog.ratings.length;
        let creationDate = new Date(this.props.blog.creationDate).toString().slice(0, 16);
        return (
            <>
                <img src={this.props.blog.thumbnail} alt={this.props.blog.title} />
                <hr />
                <h3>by - {this.props.blog.author}</h3>
                <p>
                    <span>{creationDate} </span>
                </p>

                <div className={BlogDetailsStyles.ratingContainer}>
                    <Rating
                        name="simple-controlled"
                        value={avgRating}
                        onChange={this.changeHandler}
                    />
                </div>
            </>
        )
    }
}

export default withBlog(SideInfo)