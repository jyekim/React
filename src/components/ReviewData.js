import React from "react";

const ReviewData = [
  {
    id: 1,
    productName: "상품명 1",
    date: "2023.06.15",
    content: "후기 내용 1",
  },
  {
    id: 2,
    productName: "상품명 2",
    date: "2023.06.15",
    content: "후기 내용 2",
  },
  {
    id: 3,
    productName: "상품명 3",
    date: "2023.06.15",
    content: "후기 내용 3",
  },
];

// const ReviewComponent = () => {
//   return (
//     <div>
//       {ReviewData.map((review) => (
//         <div key={review.id}>
//           <h3 style={{ fontWeight: "bold" }}>{review.productName}</h3>
//           <p style={{ fontStyle: "italic" }}>{review.date}</p>
//           <p>{review.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

//export default ReviewComponent;// 
export default ReviewData;
