import React from "react";
import { Component } from "react";

class ListGroup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
     
console.log(this.props)
    const {items,textProperty,valueProperty,onItemSelect,selectedItem} = this.props;
    return ( 
        <ul className="list-group">
            {items.map(item =>
            <li className={item === selectedItem ? "list-group-item active" : "list-group-item"} key={item[valueProperty]}
            onClick={() => onItemSelect(item)}>{item[textProperty]}</li>
            )}
       
        
      </ul>
     );
}
}
ListGroup.defaultProps={
    valueProperty:"_id",
    textProperty:"name"
}

 
export default ListGroup;