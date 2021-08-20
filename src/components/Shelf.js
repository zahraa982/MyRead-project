import React from 'react'
import Book from './Book'

const Shelf = ({section, books,handleShelfChange}) => {
    const booksCategory = books.filter((book) => book.shelf === section)

    return (
         <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                {booksCategory.map((book) => (
                    <Book book={book} key={book.id} handleShelfChange={handleShelfChange} />
                ))}
                </ol>
            </div>
            </div>
    )
}

export default Shelf