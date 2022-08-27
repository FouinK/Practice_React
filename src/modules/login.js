import React,{Component} from "react";

/**
 * 로그인 하러가기 버튼
 * @param {*} props 
 * @returns 
 */
 function Login(props){
    return      <div> 
      <a href='/login' onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>로그인 하러가기</a>
    <br/>
    </div>
  }

  export default Login;
  