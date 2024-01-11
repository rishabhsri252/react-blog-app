import React, { Component } from 'react'
import axios from 'axios'

const withBlog = (OriginalComponent) => {
    class Blog extends Component {
        constructor(props) {
            super(props)

            this.state = {
                blogs: [],
                updatedBlog: {},
                isLoading: true
            }
        }

        fetchBlogs = () => {
            axios.get('http://localhost:4000/blogs')
                .then(response => {
                    this.setState({
                        blogs: response.data,
                        isLoading: true
                    })
                })
                .catch(error => console.log(error))
        }

        postBlog = (blog) => {
            axios.post('http://localhost:4000/blogs', blog)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
        }

        updateBlog = (blogId, property, update) => {
            axios.get('http://localhost:4000/blogs/' + blogId)
                .then(response => {
                    this.setState({
                        updatedBlog: {
                            ...response.data,
                            [property]: [
                                ...response.data[property],
                                update
                            ]
                        }
                    }, () => {
                        axios.put('http://localhost:4000/blogs/' + blogId, this.state.updatedBlog)
                    })
                })
        }

        render() {
            return (
                <OriginalComponent
                    fetchBlogs={this.fetchBlogs}
                    blogs={this.state.blogs}
                    postBlog={this.postBlog}
                    updateBlog={this.updateBlog}
                    {...this.props} />
            )
        }
    }
    return Blog
}

export default withBlog