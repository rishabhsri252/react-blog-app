import React, { Component } from 'react'
import BlogDetailsStyles from './styles/BlogDetails.module.css'
import SideInfo from './SideInfo';
import Comments from './Comments';

class BlogDetailsUI extends Component {

    render() {
        let description = this.props.blog.description.split('<br>').map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
        })

        return (
            <>
                <div className={BlogDetailsStyles.container}>
                    <div className={BlogDetailsStyles.details}>
                        <h1 className={BlogDetailsStyles.title}>{this.props.blog.title}</h1>
                        <div className={BlogDetailsStyles.description}>{description}</div>
                        <hr />
                        <div className={BlogDetailsStyles.commentsSection}>
                            <Comments blog={this.props.blog} blogId={this.props.blogId}/>
                        </div>
                    </div>

                    <div className={BlogDetailsStyles.sideInfo}>
                        <SideInfo blog={this.props.blog} blogId={this.props.blogId}/>
                    </div>
                </div >
            </>
        )
    }
}

export default BlogDetailsUI