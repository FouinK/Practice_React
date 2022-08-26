/* esLint-disable */
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

let sessionStorage = window.sessionStorage;

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
    }}>윤성현의 프로젝트</a></div>
  </header>
}

/**
 * 리스트
 * @param {} props 
 * @returns 
 */
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

/**
 *  로그아웃과 로그인 됐을 때 나타나는 회원아이디 환영
 * @param {*} props 
 * @returns 
 */
function Userinfo(props){
  return <userinfo>
    <h3>{props.current_username}님 반갑습니다 !</h3>
      <button type="button" value = "로그아웃" onClick={()=>{
          axios.post('/api/logout').then((res)=>{
            console.log(res.data.logout);
            sessionStorage.clear();
            // debugger;
            props.onChangeMode();
          })
      }}>로그아웃</button>
      <br/>
  </userinfo>
}

/**
 * 회원가입 하러가기 버튼
 * @param {*} props 
 * @returns 
 */
function Join(props){
  return      <join> 
    <a href='/join' onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>회원가입 하러가기</a>
  <br/>
  </join>
}

/**
 * 로그인 하러가기 버튼
 * @param {*} props 
 * @returns 
 */
function Login(props){
  return      <login> 
    <a href='/login' onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>로그인 하러가기</a>
  <br/>
  </login>
}

/**
 * 전체 출력
 * @returns 
 */
function App() {

  const [mode , setMode] = useState(1);
  let [postname , setPostname] = useState('윤성현');
  let content = null;
  let userinfo = null;
  let joinInfo = <Join join="join" onChangeMode={()=>{
    setMode(2);
  }}></Join>;
  let logInfo = <Login login="login" onChangeMode={()=>{
    setMode(3);
  }}></Login>

  if(mode === 1){
    content = <List postname={postname}></List>;
  } else if(mode === 2){
    content = <ServerJoin></ServerJoin>;
  } else if(mode === 3){
    content = <ServerLogin serverlogin="serverlogin" onChangeMode={()=>{
      setMode(1);
    }}></ServerLogin>
  } else if(mode === 4){
    content = <ServerRequsetTest></ServerRequsetTest>
  } else if (mode === 5){
    content = <CookieTest></CookieTest>
  } else if(mode === 6){
    content = <Modal></Modal>
  } 

  if(sessionStorage.getItem("username") != null){
    userinfo = <Userinfo current_username={sessionStorage.getItem("username")} onChangeMode={()=>{
      setMode(1);
    }}></Userinfo>
    joinInfo = null;
    logInfo = null;
  }

  // else {
  //   <Userinfo current_username={sessionStorage.getItem("username")} onChangeMode={()=>{
  //     setMode(1);
  //   }}></Userinfo>
  // }

  return (
    <div className="App">

      <Header title='title'onChangeMode={()=>{
        setMode(1);
      }}></Header>

      {userinfo}
      
      {joinInfo}

      {logInfo}



      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(4);
      }}>겟요청 테스트 가기</a>
      <br/>

      <a href='/login' onClick={(event)=>{
        event.preventDefault();
        setMode(5);
      }}>쿠키 테스트 가기</a>
      <br/>

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
