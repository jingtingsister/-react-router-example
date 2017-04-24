import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

const App = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr/>

                <Route exact path='/' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/topics' Component={Topics}/>
            </div>
        </Router>
);


export default App;
