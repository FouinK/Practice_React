import React,{Component} from "react";

/**
 * 마이페이지로 이동했을 때 나오는 컴포넌트
 * @param {} props 
 * @returns 
 */
 function Mypage(props){
    console.log(props.userinfo);
    
    return <div>
      <ol>
        <p>ID : {props.userinfo.username}</p>
        <p>ROLE : {props.userinfo.role}</p>
        <p>NICKNAME : {props.userinfo.nickname}</p>
      </ol>
    </div>
  }
  
  
  export default Mypage;