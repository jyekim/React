// const Hello = function () {
//     <p>Hello</p>;
// };

// export default Hello;

//===========================
// const Hello = () => {
//   <p>Hello</p>;
// };

// export default Hello;
//import World from "./World";
//import styles from "./Hello.module.css";

export default function Hello() {
  function showname() {
    console.log("Mike");
  }
  function showage(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showname()}>show name</button>
      <button
        onClick={() => {
          showage(30); //이 방법은 매게변수를 전달할 때 편함
        }}
      >
        show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      />
    </div>
  );
}
