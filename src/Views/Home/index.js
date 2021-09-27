import {useState} from "react";
import {useHistory} from 'react-router-dom'
import './style.css'
import github from './img/free-icon-github-2111432.png'
import search from './img/magnifying-glass.png'


const Home = () => {
    const [username, setUsername] = useState('')
    const history = useHistory()
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePress = (e) => {
        if (e.key === 'Enter' && username.trim()) {
            history.push(`/${username}`)
        }
    }
    const handleSearch = () => {
        if (username.trim()) {
            history.push(`/${username}`)
        }
    }
    return (
        <div className='home'>
            <div className='container'>
                <div className='content'>
                    <img src={github} alt="" width='200'/>
                    <h1>Github</h1>
                    <input className='input' placeholder='Search user' type="text" onChange={handleChange}
                           onKeyPress={handlePress}/>
                    <button onClick={handleSearch} className='button'><img src={search} alt="" width='20'/></button>
                </div>
            </div>
        </div>
    );
};

export default Home;