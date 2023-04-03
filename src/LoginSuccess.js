import React from 'react';
import "./LoginSuccess.css";

function LoginSuccess(props) {
    const handleLoginSuccess = (event) => {
        event.preventDefault();
        // TODO: Call backend API to validate the credentials
        props.closeModal();
      };

    return (
        <div className="login-success-container" onSubmit={handleLoginSuccess}>
            <h1>登入成功！</h1>
            <p>歡迎回來，{props.username}。</p>
            <button type="close" onClick={props.closeModal}>X</button>
        </div>
    );
}

export default LoginSuccess;
