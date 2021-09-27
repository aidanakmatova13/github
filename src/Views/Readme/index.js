import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../../Components/Layout";
import axios from "axios";
import Markdown from "markdown-to-jsx";


const Readme = () => {
    const {username, project} = useParams()
    const [readme, setReadme] = useState('')
    useEffect(() =>{
        axios(`https://api.github.com/repos/${username}/${project}/readme`,{
            headers: {Accept: 'application/vnd.github.VERSION.raw'}
        }).then(({data}) => setReadme(data))
    },[username, project])

    return (
        <Layout>
            <Markdown>
                {readme}
            </Markdown>
        </Layout>
    );
};

export default Readme;