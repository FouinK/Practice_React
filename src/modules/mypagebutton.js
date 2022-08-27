import React,{Component} from "react";
import {useState} from 'react';
import axios from 'axios';
import Userinfo from "./userinfo";

/**
 * 마이페이지 버튼
 */
 function MypageButton(props){
    return <form onSubmit={event=>{
      event.preventDefault();
      axios.get('api/mypage',{ withCredentials: true }).then((res)=>{
        console.log(res.data);
        const newUserinfo = {
          username : res.data.username,
          role : res.data.role,
          nickname : res.data.nickname
        }
        console.log(newUserinfo)
        props.onChangeMode(newUserinfo);
      })
    }}>
      <input type="submit" value="마이페이지 가기"></input>
    </form>
  }
  
  
  export default MypageButton;