import React from 'react';
import back from './img/free-icon-left-black-arrow-45736.png'
import {useHistory} from 'react-router-dom'


const Goback = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    return (
        <div className='container'>
            <button className='button' onClick={goBack}><img src={back} width='30' alt=""/></button>
        </div>
    );
};

export default Goback;