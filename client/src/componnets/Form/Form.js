import logo from "../../asset/LOGO.png";
import "./form.css";
import { useRef, useState } from "react";
const BasicForm = () => {
  const emailInputRef = useRef();
  const paswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPasword = paswordInputRef.current.value;
    console.log(enteredEmail, enteredPasword);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8KARKd1cjmqelMN77pAKkp-iNeAsc6rU",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPasword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = " Đăng nhập thất bại!";
            //show an error modal
            throw new Error(errorMessage);
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <div>
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <h1>ĐĂNG NHẬP</h1>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">Tài Khoản</label>
            <input type="text" id="name" ref={emailInputRef} />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="password">Mật Khẩu</label>
          <input
            style={{ marginLeft: "34px" }}
            type="password"
            id="password"
            ref={paswordInputRef}
          />
        </div>
        <div className="form-actions">
          <button type="submit">ĐĂNG NHẬP</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
