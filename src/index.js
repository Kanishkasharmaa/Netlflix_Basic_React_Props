import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Card from "./Cards";
import Sdata from './Sdata'

function nCard(val){
  
  return (<Card
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}

 />);
}
ReactDOM.render(
  <>
  <h1 className='heading_style'>List Of Top 5 netflix</h1>
 
  
  {Sdata.map(nCard)}
  </>,
  document.getElementById('root')
);