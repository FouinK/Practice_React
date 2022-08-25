/* esLint-disable */
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

let sessionStorage = window.sessionStorage;

function Header(props){
  return <header className='black-nav'>
    <div><a onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>윤성현의 프로젝트</a></div>
  </header>
}

function List(props){
  const lis = [];

  for(let i=0;i<props.postname.length;i++){
    let p = props.postname[i];
    lis.push(<div key={p}><h3>{p}</h3>
    <p>{i}월 발행</p>
    </div>)
  }
  return <div className='list'>{lis}</div>
    
}

function ServerJoin(props){

  let join = {
    username : null,
    password : null
  }

  return       <div className='server_test_join'>
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
  </div>
}

function ServerLogin(){

  let login = {
    username : null,
    password : null
  }

  return <div className='server_test_login'>
    <h3>서버 요청 로그인 테스트 화면</h3>
    <form onSubmit={event=>{
      event.preventDefault();

      login.username = event.target._username.value; 
      login.password = event.target._password.value;

      console.log(login);

      axios.post('/login',login)
    .then((response)=>{
      sessionStorage.setItem("username",login.username);
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
  </div>
}

function ServerRequsetTest(){
  return       <div className='server_test'>
  <h3>서버 요청 테스트 화면</h3>
  <button onClick={()=>{axios.get('/api/react_test_login',{params : {username : 'asd',password : '111'}},{ withCredentials: true })
  .then((response)=>{
    console.log(response.data);
  })
  .catch(function(error){
    console.log(error);
  })}}>서버 요청 테스트 버튼</button>
</div>
}

function CookieTest(){
  return       <div className='cookie_test'>
  <h3>서버 쿠키 테스트 화면</h3>
  <button onClick={()=>{axios.get('/api/select_cookie',{ withCredentials: true })
  .then((response)=>{
    console.log(response.data);
  })
  .catch(function(error){
    console.log(error);
  })}}>서버 쿠키 테스트 버튼</button>
</div>
}

function Userinfo(props){
  return <h3>{props.current_username}님 반갑습니다 !</h3>
}

function App() {

  const [mode , setMode] = useState(1);
  let [postname , setPostname] = useState('윤성현');
  let content = null;
  let userinfo = null;

  if(mode === 1){
    content = <List postname={postname}></List>;
  } else if(mode === 2){
    content = <ServerJoin></ServerJoin>;
  } else if(mode === 3){
    content = <ServerLogin></ServerLogin>
  } else if(mode === 4){
    content = <ServerRequsetTest></ServerRequsetTest>
  } else if (mode === 5){
    content = <CookieTest></CookieTest>
  } else if(mode === 6){
    content = <Modal></Modal>
  } 

  if(sessionStorage.getItem("username") != null){
    userinfo = <Userinfo current_username={sessionStorage.getItem("username")}></Userinfo>
  }

  return (
    <div className="App">

      <Header title='title'onChangeMode={()=>{
        setMode(1);
      }}></Header>

      {userinfo}

      <hr/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(2);
      }}>회원가입 하러가기</a>
      <hr/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(3);
      }}>로그인 하러가기</a>
      <hr/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(4);
      }}>겟요청 테스트 가기</a>
      <hr/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(5);
      }}>쿠키 테스트 가기</a>
      <hr/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(6);
      }}>게시판 내용 가기</a>
      <hr/>

      {content}
      
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
