import logo from './logo.svg';
import './App.css';
import List1 from './Props_list/Propslist';
import { Uibutton } from './Props_list/Uibutton';

function List(){
  const fruits=["Apple","Mango","Orange","lime"];
  const display=fruits.map((name)=>{return<li>{name}</li>})
  return(
    <>
      <ul >
        {display}
      </ul>
      <List1 />
      {/* <Uibutton /> */}
    </>
  )
}

export default List;
