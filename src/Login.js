import React,{ useState } from "react";
import Modal from 'react-modal';
import './Login.css';
import LoginSuccess from "./LoginSuccess";

Modal.setAppElement('#root'); // 設定Modal的app root

function Login(props) {
    const [LoginSuccessIsOpen, setLoginSuccessIsOpen] = useState(false); // 控制Modal顯示與隱藏的state

    const openLoginSuccess = () => {
        setLoginSuccessIsOpen(true);
      }
    
      const closeLoginSuccess = () => {
        setLoginSuccessIsOpen(false);
      }

    return (
      <div className="login-container">
        <h1>會員登入</h1>
        <nav>
            <form>
                <label htmlFor="username">帳號：</label>
                <input type="text" placeholder="請用英文大/小寫輸入"/>
                <br></br>
                <label htmlFor="password">密碼：</label>
                <input type="password" placeholder="應至少含8位以上英文及數字"/>
                <br></br>
                <button type="submit"  onClick={openLoginSuccess}>登入</button>
                <button type="button" >忘記密碼</button>
            </form>
        </nav>  

        <Modal isOpen={LoginSuccessIsOpen} onRequestClose={closeLoginSuccess} contentLabel="LoginSuccess Modal" 
            style={{
                content: {
                  width: '25%',
                  height: '25%',
                  margin: 'auto',
                  border: '1px solid grey',
                  borderRadius: '10px',
                  overflow: 'auto',
                  backgroundColor: '#d6f0f1'
                }
              }}>
            <LoginSuccess closeModal={closeLoginSuccess} />
        </Modal>

      </div>
    );
}

export default Login;
