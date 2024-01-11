import React, { Component } from 'react'
import BlogDetailsStyles from './styles/BlogDetails.module.css'
import withBlog from './withBlog';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.blog.comments.length + 1,
            comment: '',
            author: sessionStorage.username,
            dateOfComment: new Date()
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postComment = (e) => {
       (this.props.updateBlog(this.props.blogId, "comments", this.state))
    }

    render() {
        let comments = this.props.blog.comments
            .sort((a, b) => {
                return (new Date(a.dateOfComment) - new Date(b.dateOfComment))
            })
            .map((comment, index) => {
                let dateOfComment = new Date(comment.dateOfComment).toString().slice(0, 16);
                return (
                    <div key={index} className={BlogDetailsStyles.comment}>
                        <p>{comment.comment}</p>
                        <span>{comment.author}</span>
                        <br />
                        <span>{dateOfComment}</span>
                        <hr />
                    </div>
                )
            })
        return (
            <>
                <div className={BlogDetailsStyles.addComments}>
                    <p>Leave a Comment</p>
                    <textarea
                        name="comment"
                        id="commentBox"
                        cols="80"
                        rows="3"
                        value={this.state.comment}
                        onChange={this.changeHandler}
                    ></textarea>
                    <br />
                    <button className='postBtn' onClick={this.postComment} >Post Comment</button>
                </div>
                <div className={BlogDetailsStyles.commentsContainer}>
                    {comments}
                </div>
            </>
        )
    }
}

export default withBlog(Comments)