import React, { useEffect, useState } from "react";
import "../css/modalReview.css";
import ReviewWrite from "../components/ReviewWrite";

export default function Component() {
  //모달창 띄우기 성공함! 후기 작성 때 넣으면 될 듯

  const [modalOpen, setModalOpen] = useState(false);
  const [reviewContent, setReviewContent] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // 리뷰 제출을 처리하는 코드를 여기에 작성합니다 (예: 서버로 전송)
    console.log("Submitted review:", reviewContent);
    closeModal();
  };

  const handleReviewChange = (event) => {
    setReviewContent(event.target.value);
  };

  return (
    <>
      <div
        className="containerWrap"
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
        <div
          className="container"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "200px",
          }}
        >
          <div
            className="mykurly"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              padding: "5px 0px 35px 1px",
              height: "75px",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "35px",
              color: "rgb(51, 51, 51)",
              letterSpacing: "-1px",
            }}
          >
            마이컬리
          </div>
          <ul
            className="menu-ul"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              listStyleType: "none",
              border: "1px solid rgb(242, 242, 242)",
            }}
          >
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="menu-a"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                주문내역
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
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
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
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
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
              </a>
            </li>

            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                배송지 관리
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
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
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
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
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
              </a>
            </li>
            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="active css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  backgroundColor: "rgb(250, 250, 250)",
                  color: "rgb(95, 0, 128)",
                  fontWeight: 500,
                }}
              >
                상품후기
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
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
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
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
                            <use
                              stroke="#5f0080"
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
              </a>
            </li>

            <li
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            >
              <a
                className="css-g4g0eu ecbxmj0"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderBottom: "1px solid rgb(242, 242, 242)",
                  padding: "15px 13px 15px 20px",
                  cursor: "pointer",
                  display: "flex",
                  WebkitBoxPack: "justify",
                  justifyContent: "space-between",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "19px",
                  letterSpacing: "-0.3px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                개인 정보 수정
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
                  <defs
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
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
                  <g
                    fill="none"
                    fillRule="evenodd"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <g
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                        }}
                      >
                        <g
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <g
                            transform="translate(-339 -398) translate(0 386) translate(339 12) translate(4.69 6.343)"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              boxSizing: "border-box",
                            }}
                          >
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
              </a>
            </li>
          </ul>
        </div>

        <div
          className="css-171zbec eug5r8l0"
          style={{
            padding: "0px",
            margin: "0px",
            boxSizing: "border-box",
            width: "820px",
          }}
        >
          <div
            className="css-j0lifa ed9qr673"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              paddingBottom: "27px",
              WebkitBoxPack: "justify",
              justifyContent: "space-between",
            }}
          >
            <div
              className="css-fhxb3m ed9qr672"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                WebkitBoxAlign: "center",
                alignItems: "center",
              }}
            >
              <h2
                className="css-1268zpe ed9qr671"
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
          </div>

          <div
            className="tabList"
            aria-orientation="horizontal"
            role="tablist"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "nowrap",
              width: "100%",
              height: "60px",
              backgroundColor: "rgb(250, 250, 250)",
            }}
          >
            <button
              id="tabs--tab--0"
              className="css-nn38t3 e10wr4932"
              type="button"
              aria-controls="tabs--panel--0"
              aria-selected="false"
              role="tab"
              tabIndex="-1"
              style={{
                padding: "0px",
                boxSizing: "border-box",
                font: "inherit",
                margin: "0px",
                WebkitTapHighlightColor: "transparent",
                overflow: "visible",
                backgroundColor: "transparent",
                textTransform: "none",
                appearance: "button",
                cursor: "pointer",
                color: "rgb(51, 51, 51)",
                borderRadius: "0px",
                fontFamily:
                  '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                flex: "1 1 0%",
                border: "1px solid rgb(244, 244, 244)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "21px",
              }}
            >
              작성 가능 후기
            </button>
            <button
              id="tabs--tab--1"
              className="css-nn38t3 e10wr4932"
              type="button"
              aria-controls="tabs--panel--1"
              aria-selected="true"
              role="tab"
              tabIndex="0"
              style={{
                padding: "0px",
                boxSizing: "border-box",
                font: "inherit",
                margin: "0px",
                WebkitTapHighlightColor: "transparent",
                overflow: "visible",
                textTransform: "none",
                appearance: "button",
                cursor: "pointer",
                borderRadius: "0px",
                fontFamily:
                  '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                flex: "1 1 0%",
                border: "1px solid rgb(244, 244, 244)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "21px",
                borderBottomWidth: "0px",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(95, 0, 128)",
              }}
            >
              작성한 후기
            </button>
          </div>
          <div
            className="css-1d3w5wq e10wr4931"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <div
              id="tabs--panel--0"
              className="css-w1atjl e10wr4930"
              aria-labelledby="tabs--tab--0"
              hidden
              role="tabpanel"
              tabIndex="-1"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                display: "none",
                width: "100%",
                height: "100%",
              }}
            />
            <div
              id="tabs--panel--1"
              className="css-w1atjl e10wr4930"
              aria-labelledby="tabs--tab--1"
              role="tabpanel"
              tabIndex="0"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="line" //tab 눌렀을 때 경계라인
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  borderTop: "1px solid rgb(51, 51, 51)",
                  marginTop: "30px",
                }}
              >
                <div
                  className="reviewBox"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "20px 30px 20px 20px",
                    borderBottom: "1px solid rgb(244, 244, 244)",
                    display: "flex",
                    WebkitBoxPack: "justify",
                    justifyContent: "space-between",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    border: "3px solid green",
                  }}
                >
                  <div
                    className="productName"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      gap: "20px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                      border: "2px solid pink",
                    }}
                  >
                    <a
                      href="https://www.kurly.com/"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        color: "inherit",
                      }}
                    >
                      <span
                        className="css-z9wf1n e143azw712"
                        style={{
                          overflow: "hidden",
                          whiteSpace: "normal",
                          maxWidth: "400px",
                          paddingTop: "1px",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "21px",
                          display: "-webkit-box",
                          wordBreak: "break-all",
                          WebkitLineClamp: "1",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        상품명
                      </span>
                    </a>
                  </div>
                  <div
                    className="css-l3taop e143azw75"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "3px",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="css-tcc7cg e143azw77"
                      style={{
                        lineHeight: "19px",
                        color: "rgb(153, 153, 153)",
                        marginLeft: "0px",
                      }}
                    >
                      date
                    </div>
                  </div>

                  <React.Fragment>
                    <button onClick={openModal}>모달팝업버튼 </button>
                    <ReviewWrite
                      open={modalOpen}
                      close={closeModal}
                      header="후기"
                      
                    >
                      <div>
                        {/* 구매한 물품의 리뷰 데이터를 표시합니다 */}
                        <h3>구매한 물품 리뷰 정보</h3>
                        {/* 리뷰 데이터를 여기에 표시합니다 */}
                        {/* 예시: */}
                        <p>상품명: 상품 1</p>
                        <p>날짜: 2023.06.15</p>
                        {/* 리뷰 작성 폼 */}
                        <h3>리뷰 작성하기</h3>
                        <form onSubmit={handleReviewSubmit}>
                          <div>
                            <label htmlFor="reviewContent"></label>
                          </div>
                        </form>
                      </div>
                    </ReviewWrite>
                  </React.Fragment>

                  <button
                    className="reviewButton"
                    style={{
                      padding: "0px",
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      WebkitTapHighlightColor: "transparent",
                      overflow: "visible",
                      backgroundColor: "transparent",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                      color: "rgb(51, 51, 51)",
                      fontFamily:
                        '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                      borderRadius: "3px",
                      border: "1px solid rgb(221, 221, 221)",
                      width: "96px",
                      height: "36px",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textAlign: "center",
                    }}
                  >
                    후기수정
                  </button>
                  <div
                    className="reviewContent"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        className="css-167blw1 e4jz1lv1"
                        height="auto"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                          whiteSpace: "pre-line",
                          height: "auto",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "21px",
                          color: "rgb(51, 51, 51)",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          wordBreak: "break-all",
                        }}
                      >
                        후기 내용
                      </p>
                    </div>
                    <div
                      className="css-g3txld e6ifxkb1"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        gap: "10px",
                        display: "flex",
                        WebkitBoxPack: "start",
                        justifyContent: "start",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        paddingTop: "10px",
                      }}
                    />
                  </div>
                </div>

                {/* ====================================================================== */}

                <div
                  className="css-17f7mak e143azw70"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    padding: "20px 30px 20px 20px",
                    borderBottom: "1px solid rgb(244, 244, 244)",
                    display: "flex",
                    WebkitBoxPack: "justify",
                    justifyContent: "space-between",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="css-yu6za6 e143azw78"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      gap: "20px",
                      display: "flex",
                      WebkitBoxAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="css-bjn8wh"
                      aria-hidden="true"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <img
                        className="productimg"
                        alt="그릭 & 샐러드 Kit 180g"
                        src="https://img-cf.kurly.com/cdn-cgi/image/width=640,height=640,quality=90/shop/data/review/20221104/8f31843d-9f17-49a6-9c0e-b248892d44fc.jpeg"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          maxWidth: "100%",
                          border: "0px",
                          verticalAlign: "top",
                          borderRadius: "6px",
                          width: "72px",
                          height: "72px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="css-1fttcpj e143azw711"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <a
                        href="https://www.kurly.com/goods/5137167"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "inherit",
                        }}
                      >
                        <span
                          className="productName"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            whiteSpace: "normal",
                            maxWidth: "400px",
                            paddingTop: "1px",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "21px",
                            display: "-webkit-box",
                            wordBreak: "break-all",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          상품명
                        </span>
                      </a>
                      <div
                        className="datewrap"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          position: "relative",
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: "3px",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                        }}
                      >
                        <span
                          className="date"
                          style={{
                            padding: "0px",
                            margin: "0px",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            lineHeight: "19px",
                            color: "rgb(153, 153, 153)",
                            marginLeft: "0px",
                          }}
                        >
                          2022.11.04 작성
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="modalbutton"
                    style={{
                      padding: "0px",
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      WebkitTapHighlightColor: "transparent",
                      overflow: "visible",
                      backgroundColor: "transparent",
                      textTransform: "none",
                      appearance: "button",
                      cursor: "pointer",
                      color: "rgb(51, 51, 51)",
                      fontFamily:
                        '"Noto Sans", "malgun gothic", AppleGothic, dotum, sans-serif',
                      borderRadius: "3px",
                      border: "1px solid rgb(221, 221, 221)",
                      width: "96px",
                      height: "36px",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "16px",
                      textAlign: "center",
                    }}
                  >
                    후기수정
                  </button>
                  <div
                    className="contentwrap"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px",
                        margin: "0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <p
                        className="reviewcontent"
                        height="auto"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                          whiteSpace: "pre-line",
                          height: "auto",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "21px",
                          color: "rgb(51, 51, 51)",
                          display: "-webkit-box",
                          WebkitLineClamp: "3",
                          WebkitBoxOrient: "vertical",
                          wordBreak: "break-all",
                        }}
                      >
                        후기내용 어쩌구
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
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
      />
    </>
  );
}
