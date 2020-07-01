import React,{Component} from 'react';
import BookList from "./components/BookList"
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,ListGroup, ListGroupItem } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[
      ],
      value:""
  }
  this.onChange=this.onChange.bind(this)
}
  componentDidMount(){
axios.get('http://localhost:3001/api/books')
.then(res => {
  let books=res.data;
  console.log(books)
  this.setState({ books })
})


}
onChange(evt){
  let text=evt.target.value;
  this.setState({
    value:text
  })
}
  render(){
    let {value,books}=this.state;
    if(value.length>0){
    books=books.filter(i => i.title.indexOf(value)!==-1)
  }
  
    return (
    <div className="App">
    <input type="text" placeholder="Search..." onChange={this.onChange}/>
     <ListGroup>
      {
       books.map(item =>
         <BookList item={item} /> )
      }
      </ListGroup>
    </div>
  )
  }
  


}
export default App;
