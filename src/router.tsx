import React, {} from 'react'
import GlobalStyles from './styles/GlobalStyles';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import Album from './pages/Album';

export default function App(){
    return (
        
        <Router >
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/Album/:name" component={Album}/>
            <GlobalStyles />
        </Router>
    )
}