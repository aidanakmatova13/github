import {useState} from "react";
import {useHistory} from 'react-router-dom'

const Home = () => {
    const [username, setUsername] = useState('')
    const history = useHistory()
    const handleChange = (e) =>{
        setUsername(e.target.value)
    }
    const handlePress = (e) =>{
        if (e.key === 'Enter' && username.trim()){
            history.push(`/${username}`)
        }
    }
    return (
        <div>
            <input placeholder='Enter username...' type="text" onChange={handleChange} onKeyPress={handlePress}/>
        </div>
    );
};

export default Home;