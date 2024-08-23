import React, { Component } from 'react';
import Counter from './counter';
 export class Counters extends Component {
    // state = { 
    //    counters:[
    //     {id:1, value:4},
    //     {id:2, value:0},
    //     {id:3, value:0},
    //     {id:4, value:0},
    //    ]
        
    //  } 
    //  onIncrement = (counter) =>{
    //     console.log(counter);
    //     const counters=[...this.state.counters];
    //     const index =counters.indexOf(counter);
    //     counters[index].value++;
    //     this.setState({counters})
        
    //   }

    //  handleReset =() => {
    //     debugger
    //     const counters =this.state.counters.map(c => {
    //         c.value=0;
    //         console.log(c)
    //         return c;
    //     })

    //      this.setState({counters})
    //  }
    //  handleDelete =(counterId)=>{
    //   debugger
    //   const counters =this.state.counters.filter(c=>c.id !== counterId);
    //   this.setState({counters})
    //     console.log("Event handleDelete is called",counterId)
    //  }
    render() { 
        console.log("counters-Rendered")
         const {onReset,onDelete,onIncrement,onDecrement,counters}=this.props;
        return (
            <React.Fragment>
               <div className='mt-4 mb-4'>
               <button type="button" className="btn btn-success" onClick={onReset}>Reset</button>
                {counters.map(counter => (
                <Counter  key={counter.id} counter={counter} selected={true} onDelete={onDelete} 
                onIncrement={onIncrement} onDecrement={onDecrement}></Counter>))}
               
               </div>
               
            </React.Fragment>

        );
    }
   
}
 
export default Counters;

