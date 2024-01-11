import React, { Component } from 'react';
import './styles/List.css'
import {CircularProgress, MenuItem, Select, TextField } from '@mui/material';
import withBlog from './withBlog';
import ListUI from './ListUI';
import RedirectToLogin from './RedirectToLogin';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search:'',
            filter:' ',
            isLoading: true,
        }
        this.props.fetchBlogs() //fetching blogs using withBlog.js
    }

    componentDidMount() {
       setTimeout(() => {
        this.setState({
            isLoading: false
        })
       }, 1000);
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        if(!sessionStorage.username) {
            return <RedirectToLogin />
        }
        if(this.state.isLoading) {
            return <CircularProgress />
        }
        return (
            <>
            <div className='utility'>
            <TextField label="Search" placeholder='Search for Title' name='search' type='search' value={this.state.search} onChange={this.changeHandler} />
            <Select label="Filter" id='filter-box' name='filter' value={this.state.filter} onChange={this.changeHandler}>
                <MenuItem value=' '>All</MenuItem>
                <MenuItem value="Web Development">Web Dev</MenuItem>
                <MenuItem value="App Development">App Dev</MenuItem>
                <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                <MenuItem value="Data Science" >Data Science</MenuItem>
            </Select>
            </div>
                <div className="blog-container">
                    <ListUI blogs={this.props.blogs} search={this.state.search} filter={this.state.filter}/>
                </div>
            </>
        )
    }
}

export default withBlog(List)