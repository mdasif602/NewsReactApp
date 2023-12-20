// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
       <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route exact path="/about" element = {<About key = "about"/>}></Route>
              <Route exact path="/" element={<News key = "general" pageSize = {this.pageSize} country = 'in' category = 'general'/>}></Route>
              <Route exact path="/general" element={<News key = "general" pageSize = {this.pageSize} country = 'in' category = 'general'/>}></Route>
              <Route exact path="/business" element={<News key = "business" pageSize = {this.pageSize} country = 'in' category = 'business'/>}></Route>
              <Route exact path="/entertainment" element={<News key = "entertainment" pageSize = {this.pageSize} country = 'in' category = 'entertainment'/>}></Route>
              <Route exact path="/health" element={<News key = "health" pageSize = {this.pageSize} country = 'in' category = 'health'/>}></Route>
              <Route exact path="/science" element={<News key = "science" pageSize = {this.pageSize} country = 'in' category = 'science'/>}></Route>
              <Route exact path="/sports" element={<News key = "sports" pageSize = {this.pageSize} country = 'in' category = 'sports'/>}></Route>
              <Route exact path="/technology" element={<News key = "technology" pageSize = {this.pageSize} country = 'in' category = 'technology'/>}></Route>
            {/* <Navbar/>
            <News pageSize = {this.pageSize} country = 'in' category = 'sports'/> */}
          </Routes>  
       </BrowserRouter> 
      </div>
    )
  }
}

