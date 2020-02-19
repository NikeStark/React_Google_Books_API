import React, {Component} from 'react';
import SearchArea from '../search-area/search-area.jsx';
import BookList from '../book-list/book-list.jsx';
import request from 'superagent';

import './Books.css';


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
                const cleanData = this.cleanData(data)
                this.setState({
                    books: [cleanData]
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

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] = '0000';
            }
             else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = {thumbnail: ''};
            }

            return book;
        })

        return cleanedData;
    }

    render(){

        const {books, sort} = this.state

        const sortedBooks = books.sort((a, b) => {
            if(sort === 'Newest'){
                return  parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - 
                        parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(sort === 'Oldest'){
                return  parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - 
                        parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }   
        })
   
        return(
            <div style={{color:'white'}}>
                <SearchArea searchBook={this.onSearchBook} 
                    handleSearch={this.onHandleSearch} 
                    handleSort={this.onHandleSort}/>
                <BookList listOfBooks={sortedBooks}/>
            </div>
        )
    }
}