import React, { useEffect, useState } from "react";
import "../css/modalReview.css";

const ReviewWrite = (props) => {
  // 열기, 닫기, 작성, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, write } = props;
  const [reviewContent, setReviewContent] = useState("");

  const handleReviewChange = (event) => {
    setReviewContent(event.target.value);
  };


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {props.children}
            <textarea
              className="textbox"
              id="reviewContent"
              value={reviewContent}
              onChange={handleReviewChange}
              placeholder="리뷰를 작성해주세요..."
              rows={4}
              style={{ width: "100%", height: "100%" }}
            ></textarea>
          </main>
          <footer>
            <button className="write" onClick={SubmitEvent}>
              작성
            </button>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ReviewWrite;
