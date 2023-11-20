import logo from './logo.svg';
import './App.css';
import ComponentDid from './Day5/ComponentDid';
import SignIn from './Login page/SignIn';
import HoverCounter from './Day6/HoverCounter';
import ClickCounter from './Day6/ClickCounter';
import SpreadPassingUnknow from './Day6/SpreadPassingUnknow';
import ReFc from './Day6/ReFc';
import UseEffect from './Day6/UseEffect';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Home from './Day7/Home';
import About from './Day7/About';
import Navbar from './Day7/Navbar';
import AxiosGet from './Day9/AxiosGet';
import Deletaxios from './Day9/Deletaxios';
import AxiosPost from './Day9/AxiosPost';
/*import Example1 from './Components/FunctionalComponents';
import NestedComplement from './Components/NestedComponent';
import Arrow from './Components/Arrow';
import PropsFunctional from './Day3/PropsFunctional';
import DefaultPropsEx from './Day3/DefaultPropsEx';
import PropsClassCom from './Day3/PropsClassCom';
import Parent from './Day3/Parent';
import SimpleBottomNavigation from './Day5/Nav';*/





function App() {
  return (
    <div>
      {/* <PropsFunctional name="Dharanish" age={21} />
      <DefaultPropsEx name="Ram Kumar" />
      <DefaultPropsEx name="Ram Kumar" college="VIT"/>
      <PropsClassCom />
      <Parent />
      <BasicButtons />
      <ImageAvatars />
      <HoverCounter />
    <ClickCounter />
      <SpreadPassingUnknow title1="SKCET" type="Password" placeholder="Enter Password" id="i" />
      <ReFc />
  <SignIn />
  <UseEffect />*/}
    
     <BrowserRouter>
     {/* <ul>
         <li>
             <Link to='/Home'>home</Link>
         </li>
     </ul>
     <ul>
      <li>
        <Link to='/About'>About</Link>
      </li>
     </ul> */}
     <Navbar/>
     <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
     <AxiosGet/>
     <AxiosPost/>
     <Deletaxios/>
    </div>
    /*<div>
    <Example1 />
    <NestedComplement />
    <Arrow />
    </div>*/
    /*<div className="App">
      <h1 id="head">Hi Students</h1>
      <form id="form">
        <label>First Name: </label>
        <input type="text" placeholder='first name'></input><br></br>
        <label>Last Name: </label>
        <input type="text" placeholder='last name'></input><br></br>
        <label>Gender:</label><br></br>
        <input type="radio" value="Male" id="ge"></input>
        <label>Male</label>
        <input type="radio" value="Female" id="ge"></input>
        <label>female</label><br></br>
        <label>Course: </label>
        &nbsp;
        &nbsp;
        &nbsp;&nbsp;
        <select>
          <option>C++</option>
          <option>HTML</option>
          <option>JAVA</option>
          <option>DSA</option>
          <option>DAA</option>
          <option>Python</option>
        </select><br></br>
        <label>Email:     </label>
        <input type="email" name="email" placeholder="Enter email"></input>
      </form>
    </div>*/
  );
}

export default App;
