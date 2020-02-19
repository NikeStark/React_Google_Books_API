import React from 'react';
import BookListItem from '../book-list-item/book-list-item.jsx';

import './book-list.css';

const BookList = ({listOfBooks}) => {
    
        const BookList = listOfBooks.map((book, id) => {
            return <BookListItem 
                    key={id} 
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate} />
        })

        return(
            <div className="container">
                {BookList}
            </div>
        )
}

export default BookList;