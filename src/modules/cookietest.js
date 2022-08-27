import React,{Component} from "react";
import axios from 'axios';

/**
 * 서버 쿠키 요청 테스트
 * @returns 
 */
 function CookieTest(){
    return       <cookietest className='cookie_test'>
    <h3>서버 쿠키 테스트 화면</h3>
    <button onClick={()=>{axios.get('/api/select_cookie',{ withCredentials: true })
    .then((response)=>{
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })}}>서버 쿠키 테스트 버튼</button>
  </cookietest>
  }
  
  export default CookieTest;