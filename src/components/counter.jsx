import React, { Component } from 'react';

  class Counter extends Component {
componentDidUpdate(prevProps,prevState){
   debugger
    console.log("prevProps",prevProps)
    console.log("prevState",prevState)
    console.log("p",prevProps.counter.value)
    console.log(this.props.counter.value)
    if(prevProps.counter.value !== this.props.counter.value){
        debugger
    
        console.log("hi Ajax")
    }

}
  
  componentWillUnmount(){
    console.log("counter-Unmount")
  }
   
 
    render() { 
        console.log('conter-Rendered')
        console.log( 'props',this.props)
       

       console.log(this.props)
       let classes=this.getBadgesClasses();
        return (
            <React.Fragment>

<div className="container">
  <div className="row">
    <div className="col-1">
    <span className={classes} >{this.formatCount()}</span>
    </div>
    <div className="col-1">
    <button type="button" onClick={()=>this.props.onIncrement(this.props.counter)}
            
            className="btn btn-secondary position-relative mx-2 my-2">+</button></div>
             <div className="col-1">
              <button type="button" onClick={()=>this.props.onDecrement(this.props.counter)}
            
            className="btn btn-secondary position-relative mx-2 my-2" disabled={this.props.counter.value===0 ? 'disable' : ''}>-</button>
    </div>
    <div className="col">
    <button type="button" onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
                
            </React.Fragment>

        );
    }
    getBadgesClasses() {
        return this.props.counter.value === 0 ? "badge bg-warning mt-2 my-2 mx-2" : "badge bg-danger mt-2 my-2 mx-2";
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? 'Zero' :value;
    }
    //  renderTags(){
    //     if(this.state.tags.length===0)return <p>There is no tag!</p>
        
    //     return    <ul>
    //     {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    //      </ul>
  
    //  }
     
     

     
}
 
export default Counter;