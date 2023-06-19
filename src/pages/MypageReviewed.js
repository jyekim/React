import React, { useState } from "react";
import styled from "styled-components";
import "../css/modalReview.css";
import Tab from "../elements/Tab";
import ReviewData from "../components/ReviewData";

const Svg = () => (
  // 마이컬리 메뉴바 화살표
  <svg
    height="19"
    width="19"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      padding: "0px",
      margin: "0px",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <defs>
      <path
        id="gfk9q0rhta"
        d="M1.657 1.657L9.657 1.657 9.657 9.657"
        style={{
          padding: "0px",
          margin: "0px",
          boxSizing: "border-box",
        }}
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <g>
          <g>
            <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
              <use
                stroke="#999"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                transform="rotate(45 5.657 5.657)"
                xlinkHref="#gfk9q0rhta"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                }}
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const Modal = ({ isOpen, content }) => {
  //모달 여닫는부분 스타일
  const modalStyle = {
    position: "absolute",
    top: "100%",
    padding: "10px",
    background: "white",
    display: isOpen ? "block" : "none",
  };

  return (
    <div style={modalStyle}>
      {isOpen && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function Component() {
  // 작성가능후기 & 작성한 후기 모달창 열기 버튼
  let [modalOpen1, setModalOpen1] = useState(true);
  let [modalOpen2, setModalOpen2] = useState(false);

  const handleButtonClick = () => {
    setModalOpen1(true);
    setModalOpen2(false);
  };

  const handleButtonClick2 = () => {
    setModalOpen1(false); // modalOpen1을 닫음
    setModalOpen2(true);
  };

  return (
    <div>
      <div
        className="css-luwwab eug5r8l1"
        style={{
          boxSizing: "border-box",
          padding: "50px 0px 80px",
          margin: "0px auto",
          display: "flex",
          width: "1050px",
          flexDirection: "row",
          WebkitBoxPack: "justify",
          justifyContent: "space-between",
        }}
      >
        <div className="container">
          <div
            className="mykurly"
            style={{
              width: "200px",
              margin: "0px",
              boxSizing: "border-box",
              padding: "5px 0px 35px 1px",
              height: "75px",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "35px",
              color: "rgb(51, 51, 51)",
              letterSpacing: "-1px",
              //border: "2px solid blue",
            }}
          >
            마이컬리
          </div>

          {/* 메뉴바 시작 */}
          <MenuUl className="menu-ul">
            <Menu className="menu">
              <li
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  display: "flex", // 부모 요소에 flex 설정
                  alignItems: "center", // 아이콘과 텍스트 수직 정렬을 위해 추가
                  
                }}
              >
                <a className="menu-link" href="#">
                  주문내역
                </a>
                <Svg />
                {/* 오른쪽에 간격 추가 */}
              </li>
            </Menu>
            <Menu className="menu">
              <li className="menu-item">
                <a className="menu-link" href="#">
                  배송지관리
                </a>
                <Svg style={{ marginLeft: "auto" }} />
              </li>
            </Menu>

            <Menu className="menu">
              <li className="menu-item">
                <a className="menu-link" href="#">
                  상품후기
                </a>
                <Svg />
              </li>
            </Menu>

            <Menu className="menu">
              <li className="menu-item">
                <a className="menu-link" href="#">
                  개인정보수정
                </a>
                <Svg style={{}} />
              </li>
            </Menu>
          </MenuUl>
          {/* 메뉴바 끝 */}
        </div>

        <div
          className="contentWrap"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            position: "relative",
            width: "100%",
            height: "100%",
            paddingLeft:"30px"
          }}
        >
          <div
            className="logoStyle"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              width: "500px",
              height: "50px",
              display: "flex",
              flexDirection: "row",
              paddingBottom: "27px",
              WebkitBoxPack: "justify",
              justifyContent: "space-between",
            }}
          >
            <h2
              className="product_logo"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                fontWeight: 500,
                fontSize: "24px",
                color: "rgb(51, 51, 51)",
                letterSpacing: "-0.5px",
                lineHeight: "48px",
              }}
            >
              상품 후기
            </h2>
          </div>

          {/* 클릭하면 동작하는 모달창 */}

          <div
            className="tabList"
            aria-orientation="horizontal"
            role="tablist"
            style={{
              display: "flex", // 추가
              justifyContent: "space-between",
              padding: "0px",
              marginTop: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "nowrap",
              width: "100%",
              height: "60px",
            }}
          >
            <Tab text="작성가능후기" onClick={handleButtonClick} />
            {modalOpen1 ? "" : ""}
            <Modal
              isOpen={modalOpen1}
              content="작성할 후기가 없습니다."
            />
            <Tab text="작성한 후기" onClick={handleButtonClick2} />
            {modalOpen2 ? "" : ""}
            <Modal isOpen={modalOpen2} content={ReviewData.map((item)=> `${item.productName}: ${item.date}: ${item.content}`).join("\n")} />
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuUl = styled.ul`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style-type: none;
  border: 1px solid rgb(242, 242, 242);
  display: flex;
  flex-direction: column; // 세로로 나열하도록 추가
`;

const Menu = styled.div`
  margin: 0px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 1px solid rgb(242, 242, 242);
  padding: 15px 13px 15px 20px;
  cursor: pointer;
  justify-content: space-between;
  line-height: 19px;
  letter-spacing: -0.3px;
  font-size: 14px;
  color: rgb(102, 102, 102);
  display: flex;
  align-items: center;
`;

<styl
  dangerouslySetInnerHTML={{
    __html: `
html {
padding: 0px;
margin: 0px;
box-sizing: border-box;
line-height: 1.15;
-webkit-tap-highlight-color: transparent;
touch-action: manipulation;
text-size-adjust: 100%;
height: 100%;
font-family: "Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif;
}

body {
padding: 0px;
box-sizing: border-box;
height: 100%;
margin: 0px;
user-select: none;
background-color: rgb(255, 255, 255);
-webkit-tap-highlight-color: transparent;
font-size: 14px;
color: rgb(51, 51, 51);
}
`,
  }}
/>;
