import React,{Component} from "react";

/**
 * 헤더
 * @param {*} props 
 * @returns 
 */
 function Header(props){
    return <header className='black-nav'>
      <div><a onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></div>
    </header>
  }
  
  export default Header;