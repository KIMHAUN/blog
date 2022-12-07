/* eslint-disable */
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 땐 변수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집 추천', '파이썬 독학']);
  let[logo, setLogo] = useState('ReactBlog')
  let[따봉, 따봉변경] = useState(0);
    return (
      <div className="App">
        <button onClick={()=> {
          let copied글제목 = [...글제목];
          글제목변경(copied글제목.sort());
        }}>

          가나다순 정렬
        </button>
        <button onClick={()=> {
          let copiedTitle = [...글제목];
          copiedTitle[0] = '여자코트 추천';
        글제목변경(copiedTitle);
      }}>글제목 바꾸는 버튼</button>

        <div className="black-nav">
          <div>개발 blog</div>
        </div>
        <div className="list">
          <h4>{ 글제목[0] }</h4> <span onClick={() => { 따봉변경(따봉+1) }}>👍🏽</span> {따봉}
          <p>12월 7일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[1] }</h4>
          <p>12월 7일 발행</p>
        </div>
        <div className="list">
          <h4>{ 글제목[2] }</h4>
          <p>12월 7일 발행</p>
        </div>

        <Modal>
        </Modal>
      </div> 
    )
}

function Modal() {
  return (
    <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>

  )
}

export default App;
