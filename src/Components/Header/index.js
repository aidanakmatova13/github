import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import './style.css'

const Header = () => {
    const [user, setUser] = useState({})
    const {username} = useParams()

    useEffect(() => {
        axios(` https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    }, [username])

    return (
        <header className='header bg-dark text-white d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <img className='avatar' src={user.avatar_url} alt="" width='100'/>
                <h3 className='ms-3'>{user.login}</h3>
            </div>
            <div>
                <input type="text" placeholder='search'/>
            </div>
        </header>
    );
};

export default Header;