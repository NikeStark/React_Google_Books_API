import React, {Component} from 'react';
import SearchArea from '../search-area/search-area.jsx';
import BookList from '../book-list/book-list.jsx';
import request from 'superagent';

import './Books.css'


export default class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField:'',
            sort:''
        }
    }

    onSearchBook = (e) => {
        e.preventDefault()
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({q: this.state.searchField})
            .then((data) => {
                console.log(data)
                this.setState({
                    books: [...data.body.items]
                })
            })
    }

    onHandleSearch = (e) => {
        //console.log(e.target.value)
        this.setState({
            searchField: e.target.value
        })
    }

    onHandleSort = (e) => {
        console.log(e.target.value)
        this.setState({
            sort: e.target.value
        })
    }

    render(){

        const {books} = this.state

        return(
            <div style={{color:'white'}}>
                <SearchArea searchBook={this.onSearchBook} 
                            handleSearch={this.onHandleSearch} 
                            handleSort={this.onHandleSort}/>
                {/*<BookList listOfBooks={books}/>*/}
            </div>
        )
    }
}