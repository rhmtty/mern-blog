import React from 'react'
import './register.scss'
import { RegisterBG } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'

const Register = () => {
    return (
      <div className="main-page">
        <div className="left">
          <p className="title">Register</p>
          <Input label="Full Name" placeholder="Full Name" />
          <Gap height={20}/>
          <Input label="Email" placeholder="Email" />
          <Gap height={20}/>
          <Input label="Password" placeholder="Password" />
          <Gap height={50}/>
          <Button title="Register"/>
          <Gap height={35} />
          <Link title="Kembali ke halaman login"/>
        </div>

        <div className="right">
          <img src={RegisterBG} className="bg-image" alt="imageBg" />
        </div>
      </div>
    );
}

export default Register
