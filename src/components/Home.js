import React, { Component } from 'react'
import './styles/Home.css'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { AppBar } from '@mui/material'
import Footer from './footer';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    logOutHandler = () => {
        sessionStorage.clear();
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        let logOutBtn, username
        if(sessionStorage.username) {
            username = <h3>{sessionStorage.username}</h3>
            logOutBtn = <button className='logout-btn' onClick={this.logOutHandler}>Log Out</button>
        }
        return (
            <>
                {!this.state.isLoggedIn && (
                    <Navigate to='/' replace={true} />
                )}
                <AppBar className='nav' position='relative'>
                    <div className='routes'>
                        <div className='logo'></div>
                        <NavLink className='link' to='list'>List</NavLink>
                        <NavLink className='link' to='post'>Post</NavLink>
                        <NavLink className='link' to='about'>About</NavLink>
                    </div>
                    <div className='nav'>
                        {username}
                        {logOutBtn}
                    </div>
                </AppBar>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </>
        )
    }
}

export default Home;