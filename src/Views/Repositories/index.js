import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../../Components/Layout";
import './style.css'
import Goback from "../../Components/Goback";


const Repositories = () => {
    const [projects, setProjects] = useState([])
    const {username} = useParams()

    useEffect(() => {
        axios(` https://api.github.com/users/${username}/repos`)
            .then(({data}) => setProjects(data))
    }, [username])

    return (
        <Layout>
            <div className='container'>
                <Goback/>
                <table className="table my-5">
                    <thead className='table-top'>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Project name</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Readme.md</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map((el, idx) =>
                            <tr>
                                <th scope="row">{idx + 1}</th>
                                <td>{el.name}</td>
                                <td>{el.created_at}</td>
                                <td><Link to={`/${username}/${el.name}`}>
                                    README.md
                                </Link></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};


export default Repositories;