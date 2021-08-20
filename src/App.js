import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'
import Header from './components/Header'

class BooksApp extends React.Component {
  constructor(props){
  super(props);

   this.state = {
    books : [],
    title : '',
    imageLinks : '',
    showSearchPage : false,
    searchResuls : [],
    value: '',
    };}

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
shelves = [
    {key:'currentlyReading' , name: 'Continue Reading'},
    {key:'wantToRead' , name: 'Want to Read'},
    {key:'read' , name: 'Read'},
  ]

  handleShelfChange = async (event,book) => {

    await BooksAPI.update(book,event.target.value)
    console.log(event.target.value)
    BooksAPI.getAll().then((books) => {
      this.setState({ books,value:"",searchResuls:[] })
    });

   
  }

  handleSubmit = async(e)=> {
    const value = e.target.value
     this.setState({value})

     if(value){
     await BooksAPI.search(value).then((searchResuls)=>{this.setState({searchResuls})})
    }else {
      this.setState({searchResuls:[]})
    }
    }

  render() {
  const {searchResuls,books,value} = this.state

    return (

      <div className="app">
          <div className="list-books">
            <Header handleShelfChange={this.handleShelfChange} searchResuls={searchResuls} value={value} handleSubmit={this.handleSubmit} />
            <div className="list-books-content">
              {this.shelves.map((shelf) => (
                <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <Shelf section={shelf.key} books={books} handleShelfChange={this.handleShelfChange}/>
              </div>))}
            </div>

          </div>
      </div>
    )
  }
}

export default BooksApp
