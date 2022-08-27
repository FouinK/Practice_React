import React,{Component} from "react";

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
  
  
  
  export default List;