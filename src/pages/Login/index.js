import React from 'react'
import { LoginBG } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Login = () => {
    return (
      <div className="main-page">
        <div className="left">
          <p className="title">Login</p>
          <Input label="Email" placeholder="Email" />
          <Gap height={20} />
          <Input label="Password" placeholder="Password" />
          <Gap height={50} />
          <Button title="login" />
          <Gap height={35} />
          <Link title="Belum punya akun? daftar sekarang" />
        </div>

        <div className="right">
          <img src={LoginBG} className="bg-image" alt="imageBg" />
        </div>
      </div>
    );
}

export default Login
