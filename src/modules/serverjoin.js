import React,{Component} from "react";
import axios from 'axios';

/**
 * 서버 회원가입
 * @param {*} props 
 * @returns 
 */
 function ServerJoin(props){

    let join = {
      username : null,
      password : null
    }
  
    return <serverjoin className='server_test_join'>
      <h3>서버 요청 회원가입 테스트 화면</h3>
  
      <form onSubmit={event=>{
        event.preventDefault();
  
        join.username = event.target._username.value; 
        join.password = event.target._password.value;
  
        console.log(join);
  
        axios.post('/api/join',join)
      .then((response)=>{
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
      }}>
      <p><input id="_username" name="_username" placeholder='ID' ></input></p>
      <p><input id="_password" name="_password" placeholder='PW'></input></p>
      <p><input type="submit" value="회원가입 테스트 버튼"></input></p>
      </form>
    </serverjoin>
  }
  export default ServerJoin;