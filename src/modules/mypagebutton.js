import React,{Component} from "react";
import {useState} from 'react';
import axios from 'axios';

/**
 * 마이페이지 버튼
 */
 function MypageButton(props){
    const [userinfo_username,setUserinfo_Username] = useState(props.username);
    const [userinfo_role,setUserinfo_role] = useState(props.role);
    return <form onSubmit={event=>{
      event.preventDefault();
      axios.get('api/mypage').then((res)=>{
        console.log(res.data);
        setUserinfo_Username(res.data.username);
        setUserinfo_role(res.data.role);
        props.onChangeMode(userinfo_username,userinfo_role);
      })
    }}>
      <input type="submit" value="마이페이지 가기"></input>
    </form>
  }
  
  
  export default MypageButton;