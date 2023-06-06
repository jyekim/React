import { combineReducers } from "redux"; // 이 안의 많은 redux를 쓰겠다는 뜻
import color from "./modules/color";
import count from "./modules/count";
import animal from "./modules/animal";

export default combineReducers({
  //변수 : 값     변수는 아무거나 와도 됨 그냥 redux의 이름일뿐
  //color: color 변수랑 값 앞 뒤가 같으면 한번만 써도 먹힘
  color, //color: color
  count,
  animal,
});
