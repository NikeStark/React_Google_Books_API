import React, {Component} from 'react';
import Header from '../header/header.jsx';
import Books from '../books/books.jsx';

import './app.css';

export default class App extends Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Books />
            </div>
        )
    }
}