import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Views/Home";
import Repositories from "./Views/Repositories";
import Readme from "./Views/Readme";


function App() {
    return (
        <Router>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/:username'><Repositories/></Route>
            <Route exact path='/:username/:project'><Readme/></Route>
        </Router>
    );
}

export default App;
