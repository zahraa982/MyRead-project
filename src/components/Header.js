import React, { Component } from 'react'
import Img from './img/annie-spratt-4-4WPFLVhAY-unsplash.jpg'
import Book from './Book'
export default class Header extends Component {
state = {

    error:false
  }


	render() {

const {searchResuls}=this.props

var searchValue = []


if(searchResuls.length>0){
searchValue = searchResuls.map((book,key) => {
              return (<Book key={book.id} handleShelfChange={this.props.handleShelfChange} book={book} />)
          })

}

else{
 searchValue = 'No Book Found'
}
		return (
			  <div className="list-books-title  ">
				  <img className="img-fluid" src={Img} alt="..." />
                    <h1 > Let's Read</h1>

       <input className='search' type ='text'
      value={this.props.value}
        placeholder='Search by title author'
        onChange={this.props.handleSubmit}
         />
{/* after i choose the shelf the selected one will be added to the main page*/}

            <div className="search-books-results">
          <ol className="books-grid">
          {searchValue}
          </ol>
        </div>
            </div>

		)
	}
}

