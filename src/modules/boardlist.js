import React,{Component} from "react";
import {useState , useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";

/**
 * 마이페이지로 이동했을 때 나오는 컴포넌트
 * @param {} props 
 * @returns 
 */
 function Boardlist(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(
            "/api/board"
        );
        console.log(response.data.content);
        setPosts(response.data.content);
        setLoading(false);
        };
        fetchData();
    }, []);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
    };
  /*                 */

  return (
    <div className="App">
      <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
  );
}

const Posts = ({ posts, loading }) => {
    return (
      <>
        {loading && <div> loading... </div>}
        <ul>
          {posts.map((post) => (
            <li key={post.board_id}>{post.board_id} --------------{post.title}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Boardlist;

  const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {pageNumbers}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};


  