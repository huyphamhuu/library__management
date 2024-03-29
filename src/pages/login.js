import React from "react";
// import { useState } from "react"
import './login.css';
import { Link } from 'react-router-dom'
import { useState } from "react";
function handleClick() {
  console.log('Nút được click!');
}

export default function Login(){
  const [counter,setCounter] = useState(0);

    return(      
        <div className="login-box">
            <h1 className="Header-login">Đăng nhập</h1>
            <input 
                type="text"  
                placeholder="Email, tên tài khoản" 
                className="input-login"/>
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              className="input-login"/>
            <button 
              type="button" 
              class="btn btn-primary" 
              className="btn-login">
            <Link className="link-custom-style" to = "/infor">Đăng nhập</Link>
            </button>
            <button
              className="btn">
                <Link className="link-custom-style" to = "/inforadmin">admin</Link>
            </button>
            <h1> {counter}</h1>
            <button onClick={handleClick}>Click me</button>
            
            <div>  
              <input /> <button>Add</button> 
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                
              </ul>
          
            </div> 
        </div>
        
    );
}