import React,{Component} from "react";

/**
 * 회원가입 하러가기 버튼
 * @param {*} props 
 * @returns 
 */
 function Join(props){
    return      <div> 
      <a href='/join' onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>회원가입 하러가기</a>
    <br/>
    </div>
  }
  
  
  
  export default Join;