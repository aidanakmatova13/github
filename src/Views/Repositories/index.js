import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../../Components/Layout";

const Repositories = () => {
    const [projects, setProjects] = useState([])
    const {username} = useParams()

    useEffect(() => {
        axios(` https://api.github.com/users/${username}/repos`)
            .then(({data}) => setProjects(data))
    },[username])

    return (
        <Layout>
            <ul className='list-group'>
            {
                projects.map(el =>
                    <li className="list-group-item" key={el.id}>
                        <Link to={`/${username}/${el.name}`}>
                            {el.name}
                        </Link>
                    </li>

                )
            }
            </ul>
        </Layout>
    );
};

export default Repositories;