import React,{Component} from "react";
import axios from 'axios';


/**
 *  로그아웃과 로그인 됐을 때 나타나는 회원아이디 환영
 * @param {*} props 
 * @returns 
 */
 function Userinfo(props){
    return <userinfo>
      <h3>{props.current_username}님 반갑습니다 !</h3>
  
      <form onSubmit={event=>{
        event.preventDefault();
        axios.post('/api/logout')
      .then((res)=>{
        sessionStorage.removeItem("username")
        props.onChangeMode();
      })
      .catch(function(error){
        console.log(error);
      })
      }}>
      <p><input type="submit" value="로그아웃"></input></p>
      </form>
    </userinfo>
  }
  
  export default Userinfo;