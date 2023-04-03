import React, { useState } from "react";
import "./Register.css";

function Register() {
    const [formData, setFormData] = useState({
      name: "",
      birthdate: "",
      gender: "",
      phone: "",
      username: "",
      password: "",
    });

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Call backend API to register user
    };

    return (
      <div className="register-container">
        <h1>註冊</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名：</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">出生年月日：</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">性別：</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value=""></option>
              <option value="male">男</option>
              <option value="female">女</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">電話號碼：</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">帳號：</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密碼：</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">註冊</button>
        </form>
      </div>
    );
}

export default Register;
