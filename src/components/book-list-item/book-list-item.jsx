import React from 'react';

import './book-list-item.css';

const BookListItem = ({image, title, author, published}) => {
    return(
        <div className="card-container">
                <img src={image} className="api-image"></img>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <span>{published}</span>
            </div>
    )
}

export default BookListItem;