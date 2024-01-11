import React, { Component } from 'react';
// import './post.css'

import { MenuItem, Select, TextField } from '@mui/material';
import RedirectToLogin from './RedirectToLogin';
import withBlog from './withBlog';
import { Navigate } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPost : {
                id: null,
                title: "",
                author: sessionStorage.username,
                thumbnail: "https://source.unsplash.com/random/?",
                description: "",
                ratings: [],
                category: "",
                creationDate: new Date(),
                comments: []
            },
            redirectToList : false
        }
    }

    changeHandler = (e) => {
        this.setState({
            newPost : {
                ...this.state.newPost,
                [e.target.name] : e.target.value
            }
        })
    }

    postHandler = (e) => {
        e.preventDefault();
        this.setState({
            newPost : {
                ...this.state.newPost,
                thumbnail: (this.state.newPost.thumbnail)+(this.state.newPost.title)
            },
            redirectToList : true
        }, () => {
            (this.props.postBlog(this.state.newPost))
        })
    }

    render() {
        if(!sessionStorage.username) {
            return <RedirectToLogin />
        }
        return (
            <div className="post-card">
                {this.state.redirectToList && <Navigate to={'../../home'}/>}
                <h1 className="card-title">Have a new blog in mind!</h1>
                <small className="card-subtitle">Fill the details and post</small>
                <form className="card-form" onSubmit={this.postHandler}>
                    <label htmlFor="title">Title</label>
                    <div className="card-input-container title form-group">
                        <TextField
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder=""
                            value={this.state.newPost.title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    
                    <label htmlFor="category">Category </label>
                    <div className='card-input-container form-group category'>
                    <Select className='form-control' name='category' value={this.state.newPost.category} onChange={this.changeHandler}>
                        <MenuItem value=' '>All</MenuItem>
                        <MenuItem value="Web Development">Web Dev</MenuItem>
                        <MenuItem value="App Development">App Dev</MenuItem>
                        <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                        <MenuItem value="Data Science" >Data Science</MenuItem>
                    </Select>
                    </div>

                    <label htmlFor="description">Description</label>
                    <div className="card-input-container description form-group">
                        <TextField
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder=""
                            value={this.state.newPost.description}
                            onChange={this.changeHandler}
                        ></TextField>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary card-button"
                    >
                        Post
                    </button>
                </form>
            </div>
        )
    }
}

export default withBlog(Post)