import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {date:new Date()};
//   }
//   render(){
//     return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h3>sdf</h3>
//       {console.log(this.state,this)};
//       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
//   }
// }

// function tick() {
//   root.render(<Clock />);
// }

// setInterval(tick, 1000);

// tick();
//timer project
// function inputTimer()
// {
//   return (
//       <form>
//         <label for="quantity">Quantity (between 1 and 5):</label>
//         <input type="number" id="quantity" name="quantity"></input>
//       </form>
//   );

// }
// setTimeout(inputTimer,5000);

// let countSeconds = 0;
// const id = setInterval(tick,1000);

// function Clock(props){
//   const element = (
//     <div>
//       <h2>My clock</h2>
//       <h3>Clock running : {props.date.toLocaleTimeString()}</h3>
//     </div>
//   );
//   console.log(countSeconds);
//   return element;
// }

// function tick(){
//   console.log(countSeconds);
//   countSeconds = countSeconds + 1;
//   if(countSeconds > 4)
//     clearInterval(id);
//   root.render(<Clock date={new Date()}/>);
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));

// tick();
// function tick() {
//   return <Clock date = {new Date()}/>
// };

// function Clock(props) {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);
//   }
// setInterval(Clock, 1000);
      
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>yes</h1>
//     {/* <h1>yes no </h1> */}
//     <App />
//   </>
// );


// export default Clock;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function Clock(props) {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()} props.</h2>
//     </div>
//   );
//   return element;
//   // root.render(element);
// }
// function tick(){
//   root.render(<Clock date = {new Date()}/>);
// }
// setInterval(tick, 1000);
