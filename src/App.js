import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/common/customers';
import Rentals from './components/common/rentals';
import NotFound from './components/common/notFound';
import Navbar from './components/navbar';
import MovieForm from './components/common/movieForm';
import LoginForm from './components/loginForm';
import Register from './components/register';
import AddNewMovieForm from './components/addNewMovieForm';
export class App extends Component{

  state = { 
    counters:[
     {id:1, value:4},
     {id:2, value:0},
     {id:3, value:0},
     {id:4, value:0},
    ]
     
  } 
   constructor(){
    super();
    console.log("constructer-App-Rendered")
   }
   
   componentDidMount(){
    console.log("App-Mount-Rndered")
   }
  handleIncrement = (counter) =>{
     console.log(counter);
     const counters=[...this.state.counters];
     const index =counters.indexOf(counter);
     counters[index].value++;
     this.setState({counters})
     
   }
   handleDecrement = (counter) =>{
    console.log(counter);
    const counters=[...this.state.counters];
    const index =counters.indexOf(counter);
    counters[index].value--;
    this.setState({counters})
    
  }

  handleReset =() => {
     debugger
     const counters =this.state.counters.map(c => {
         c.value=0;
         console.log(c)
         return c;
     })

      this.setState({counters})
  }
  handleDelete =(counterId)=>{
   debugger
   const counters =this.state.counters.filter(c=>c.id !== counterId);
   this.setState({counters})
     console.log("Event handleDelete is called",counterId)
  }
  render() { 
    console.log("App-Rendered")
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/register'   element={<Register></Register>}></Route>
    <Route path='/login'   element={<LoginForm></LoginForm>}></Route>
    <Route path="/movies/:id" element={<MovieForm></MovieForm>}></Route>
    <Route path="/movies" element={<Movies></Movies>}></Route>
   <Route path='/customers' element={<Customers></Customers>}></Route>
   <Route path='/rentals' element={<Rentals></Rentals>}></Route>
   <Route path='/not-Found' element={<NotFound></NotFound>}></Route>
<Route path='/' element={<Navigate to='movies'></Navigate>}></Route>
<Route path='*' element={<Navigate to='/not-Found'></Navigate>}></Route>
    </Routes>
   

    {/* <Movies></Movies> */}
     {/* <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0).length}></Navbar> 
    <main className='container'>
   <Counters 
   counters={this.state.counters}
   onReset={this.handleReset}
   onIncrement={this.handleIncrement}
   onDecrement={this.handleDecrement}
   onDelete={this.handleDelete}>
   </Counters>
    </main> */}
    </>
  );}
}

export default App;
