/* eslint-disable */
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 땐 변수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집 추천', '파이썬 독학']);
  let [logo, setLogo] = useState('ReactBlog')
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [order, setOrder] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1,2,3].map(function(a) {
    //console.log(a)
  })

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
        {/* <div className="black-nav">
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
          <h4 onClick = {() => {
            //setModal(modal => !modal);
            setModal(!modal);
            console.log(modal);
            
          }}>{ 글제목[2] }</h4>
          <p>12월 7일 발행</p>
        </div> */}
        {
          글제목.map(function(a, i) {
            return <div className="list" key={i}>
            <h4 onClick = {()=> {
              setModal(!modal)
              setOrder(i);
            }}>{ 글제목[i]} 
              <span onClick={(e) => { 
                e.stopPropagation();
                let copied따봉 = [...따봉];
                copied따봉[i] = 따봉[i] + 1
                따봉변경(copied따봉) 
                }}>👍🏽
              </span> 
            {따봉[i]}  <button onClick={(e)=> {
              e.stopPropagation();
              console.log(i);
              let copy = [...글제목];
              copy.splice(i, 1);
              
              글제목변경(copy);
            }}>삭제</button>
            </h4>
            <p>12월 7일 발행</p>
          </div>
          })
        }
        <input onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);

        }}></input>
        <button onClick={()=> {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}>글작성</button>


        {
          //조건식 ? 참일 때 실행할 코드: 거짓일 때 실행할 코드
          modal ? <Modal color = "orange" 글제목={글제목} order={order} 글수정={() => {
            let copiedTitle = [...글제목];
            copiedTitle[0] = '여자코트 추천';
            글제목변경(copiedTitle);
          }}/> : null
        }
        {/* <Haeun></Haeun> */}
      </div> 
    )
}


function Modal(props) {
  return (
    <div className="modal" style={{background:props.color}}>
          <h4>{ props.글제목[props.order] }</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={ props.글수정 }>글수정</button>
        </div>

  )
}

const Haeun = () => {
  return (
    <div>
      내땅~!
    </div>
  )
}

export default App;
