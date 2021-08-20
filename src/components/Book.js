import React, { Component } from 'react'

export default class Book extends Component {
  shelfChange = (e) => {
    this.props.handleShelfChange(e,this.props.book)
  }
	render() {
		return (
                        <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,
                              backgroundImage:
                               `url(${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ?
                                this.props.book.imageLinks.thumbnail :
                                "https://static.wikia.nocookie.net/marvelcomicsfanon/images/3/3f/No_Image_Cover.jpg/revision/latest?cb=20180530112213"})` }} />
                            <div className="book-shelf-changer">
                              <select onChange={this.shelfChange} defaultValue='move' >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Continue Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
		)
	}
}
