import React, {useReducer, useState} from 'react';
import './App.css';

import Header from "./modules/header.js"
import ServerJoin from "./modules/serverjoin.js"
import ServerLogin from "./modules/serverlogin.js"
import Userinfo from "./modules/userinfo.js"
import MypageButton from "./modules/mypagebutton.js"
import List from "./modules/list.js"
import ServerRequsetTest from "./modules/serverrequsettest.js"
import CookieTest from "./modules/cookietest.js"
import Mypage from "./modules/mypage.js"
import Join from "./modules/join.js"
import Login from "./modules/login.js"

let sessionStorage = window.sessionStorage;

/**
 * 전체 출력
 * @returns 
 */
function App() {

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [mode , setMode] = useState(1);
  let [postname , setPostname] = useState('윤성현');
  const [userInfo, setUserInfo] = useState([
    {username : " ", role : " "}
  ])

  let content = null;
  let userinfo = null;
  let mypage = null;
  let updatedUserInfo = null;

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
  } else if(mode === 7){
    content = <Mypage username={userInfo.username} role={userInfo.role}></Mypage>;
  }

  if(sessionStorage.getItem("username") === null){

    userinfo = null;
    mypage = null;
    console.log("겟아이템 username널일 때")

  }else if(sessionStorage.getItem("username")!==null){

    userinfo = <Userinfo current_username={sessionStorage.getItem("username")} onChangeMode={()=>{
      setMode(1);
      console.log("로그아웃 다음 랜더링에서 출력 확인");
      forceUpdate();
    }}></Userinfo>

    joinInfo = null;
    logInfo = null;

    mypage = <MypageButton username={userInfo.username} role={userInfo.role} onChangeMode={(username,role)=>{
      updatedUserInfo = {username:username, role:role};
      setUserInfo(updatedUserInfo);
      forceUpdate();
      setMode(7);
    }}></MypageButton>

  }

  // else {
  //   <Userinfo current_username={sessionStorage.getItem("username")} onChangeMode={()=>{
  //     setMode(1);
  //   }}></Userinfo>
  // }

  return (
    <div className="App">

      <Header title='윤성현의 개인 프로젝트'onChangeMode={()=>{
        setMode(1);
        console.log("헤더 컴포넌트 app부분 확인");
      }}></Header>


      {mypage}

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
