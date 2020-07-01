import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,ListGroup, ListGroupItem } from 'reactstrap';


class BookList extends Component {
  render(){
  	const {item}=this.props
    return (
    <div className="BookList">
      <ListGroupItem>{item.title}+{item.description}</ListGroupItem>
    </div>
  )
  }
  
}

export default BookList;
