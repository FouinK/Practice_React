import React,{Component} from "react";
import axios from 'axios';


/**
 * 서버 로그인
 * @param {*} props 
 * @returns 
 */
 function ServerLogin(props){

    let login = {
      username : null,
      password : null
    }
  
    return <serverlogin className='server_test_login'>
      <h3>서버 요청 로그인 테스트 화면</h3>
      <form onSubmit={event=>{
        event.preventDefault();
  
        login.username = event.target._username.value; 
        login.password = event.target._password.value;
  
        console.log(login);
  
        axios.post('/login',login)
      .then((response)=>{
        sessionStorage.setItem("username",login.username);
        props.onChangeMode();
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
      }}>
      <p><input id="_username" name="_username" placeholder='ID' ></input></p>
      <p><input id="_password" name="_password" placeholder='PW'></input></p>
      <p><input type="submit" value="로그인 테스트 버튼"></input></p>
      </form>
    </serverlogin>
  }
  
  export default ServerLogin;