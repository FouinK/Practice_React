/* esLint-disable */
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  let [ postname, postname_change ] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']); 
  let [like, like_change] = useState(0);
  let posts = '강남 고기 맛집';


  // function change_post(){
  //     var newArray = [...postname];
  //     newArray[0] = '여자 코트 추천';
  //     postname_change(newArray);
  // }

  const login = {
    username : "asd",
    password : "111"
  }
  const login_session = {
    username : "zxc",
    password : "111"
  }

  const join = {
    username : "zxc",
    password : "111"
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {/* <button onClick={ change_post }> 버튼 </button> */}
      <div className='list'>
        <h3> { postname[0] }<span onClick={ ()=>{like_change(like+1)} }>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { postname[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { postname[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>


      <div className='server_test'>
        <h3>서버 요청 테스트 화면</h3>
        <button onClick={()=>{axios.get('http://localhost:8080/api/react_test_login',{params : {username : 'asd',password : '111'}},{ withCredentials: true })
        .then((response)=>{
          console.log(response.data);
        })
        .catch(function(error){
          console.log(error);
        })}}>서버 요청 테스트 버튼</button>
      </div>

      <div className='server_test_join'>
        <h3>서버 요청 회원가입 테스트 화면</h3>
        <button onClick={()=>{axios.post('/api/join',join)
        .then((response)=>{
          console.log(response.data);
        })
        .catch(function(error){
          console.log(error);
        })}}>회원가입 테스트 버튼</button>
      </div>
        
        
      <div className='server_test_login'>
        <h3>서버 요청 로그인 테스트 화면</h3>
        <button onClick={()=>{axios.post('/login',login_session)
        .then((response)=>{
          console.log(response.data);
        })
        .catch(function(error){
          console.log(error);
        })}}>서버 요청 로그인 테스트 버튼</button>
      </div>
      
      <div className='cookie_test'>
        <h3>서버 쿠키 테스트 화면</h3>
        <button onClick={()=>{axios.get('http://localhost:8080/api/select_cookie',{ withCredentials: true })
        .then((response)=>{
          console.log(response.data);
        })
        .catch(function(error){
          console.log(error);
        })}}>서버 쿠키 테스트 버튼</button>
      </div>


      <Modal></Modal>
      
    </div>
  );
}
 
function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
