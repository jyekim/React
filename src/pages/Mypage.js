import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReviewWrite from "../components/ReviewWrite";
import styles from "../css/review.module.css";
import modalstyles from "../css/modalReview.css";
import Tab from "../elements/Tab";
import ReviewData from "../components/ReviewData";

//모달창 띄우기 성공함! 후기 작성 때 넣으면 될 듯


const Modal = ({ isOpen, content }) => {
  //탭 여닫는부분 스타일
  const modalClasses = isOpen ? 'modal' : 'modal hidden';
  // const modalStyle = {
  //   position: "absolute",
  //   top: "100%",
  //   padding: "10px",
  //   background: "white",
  //   display: isOpen ? "block" : "none",
  // };
  
  return (
    <div className={modalClasses}>
    {isOpen && (
      <div>
        <p>{content}</p>
      </div>
    )}
  </div>
);
};
const Mypage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
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
    <div className={styles.containerWrap}>
      <div className={styles.container}>
        <div className={styles.mykurly}>마이컬리</div>

        {/* 메뉴바 시작 */}
        <ul className={styles["menu-ul"]}>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]}>
              주문내역
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="gfk9q0rhta"
                  d="M1.657 1.657L9.657 1.57 9.657 9.657"
                ></path>
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]}>
              배송지 관리
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
              
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]}>
              상품후기
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={styles["menu-ul-li"]}>
            <a className={styles["menu-a"]}>
              개인정보수정
              <svg
                className={styles["menu-a-svg"]}
                height="19"
                width="19"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)">
                          <use
                            className={styles["menu-a svg use"]}
                            xlinkHref="#gfk9q0rhta"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
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









  );
};
export default Mypage;
