// import logo from "../logo.svg";
import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionCreators as userActions } from "../redux/modules/user";

import "../App.css";

//components
import { Header } from "../components/component";

//pages
import {
  Main,
  Login,
  Signup,
  CartList,
  NotFound,
  CommentWrite,
  Detail,
  MypageReview,
  MypageReviewed,
} from "../pages/page";
import Mypage from "../pages/Mypage";
import "../css/modalReview.css";

function App() {
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;
  const islogin = useSelector((state) => state.user.is_login);
  console.log("islogin: ", islogin);

  useEffect(() => {
    if (!token_key) {
      return;
    }
    if (token_key) {
      dispatch(userActions.loginCheckDB(token_key));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/comment/write/:id" element={<CommentWrite />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypageReview" element={<MypageReview />} />
        <Route path="/mypageReviewed" element={<MypageReviewed />} />
    
      </Routes>
    </div>
  );
}

export default App;
