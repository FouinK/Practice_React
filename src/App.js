/* esLint-disable */
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';



const join = {
  username : "zxc",
  password : "111"
}

function Header(props){
  return <header className='black-nav'>
    <h3><a onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>윤성현의 프로젝트</a></h3>
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
  return       <div className='server_test_join'>
    <h3>서버 요청 회원가입 테스트 화면</h3>
    <button onClick={()=>{axios.post('/api/join',join)
    .then((response)=>{
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })}}>회원가입 테스트 버튼</button>
  </div>
}

function App() {

  const login = {
    username : "asd",
    password : "111"
  }
  const login_session = {
    username : "zxc",
    password : "111"
  }

  const [mode , setMode] = useState(1);
  let [postname , setPostname] = useState('윤성현');
  let content = null;

  if(mode === 1){
    content = <List postname={postname}></List>;
  } else if(mode === 2){
    content = <ServerJoin></ServerJoin>;
  }

  return (
    <div className="App">

      <Header title='title'onChangeMode={()=>{
        setMode(1);
      }}></Header>

      <a onClick={(event)=>{
        event.preventDefault();
        setMode(2);
      }}>login 하러가기</a>

      {content}

      {/* <button onClick={ change_post }> 버튼 </button> */}
      {/* <div className='list'>
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
      </div> */}

      <div className='server_test'>
        <h3>서버 요청 테스트 화면</h3>
        <button onClick={()=>{axios.get('/api/react_test_login',{params : {username : 'asd',password : '111'}},{ withCredentials: true })
        .then((response)=>{
          console.log(response.data);
        })
        .catch(function(error){
          console.log(error);
        })}}>서버 요청 테스트 버튼</button>
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
        <button onClick={()=>{axios.get('/api/select_cookie',{ withCredentials: true })
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
