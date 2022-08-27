import React,{Component} from "react";
import axios from 'axios';

/**
 * 서버 요청 테스트
 * @returns 
 */
 function ServerRequsetTest(){
    return       <serverrequsettest className='server_test'>
    <h3>서버 요청 테스트 화면</h3>
    <button onClick={()=>{axios.get('/api/react_test_login',{params : {username : 'asd',password : '111'}},{ withCredentials: true })
    .then((response)=>{
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })}}>서버 요청 테스트 버튼</button>
  </serverrequsettest>
  }
  
  export default ServerRequsetTest;