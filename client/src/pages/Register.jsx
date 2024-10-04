import React from 'react';

const Register = () => {
  return (
    <div className='container register-container'>
        <div className="log-reg-form register-form">
            <h2>Đăng ký</h2>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Tên tài khoản</label>
                    <input type="text" placeholder='Tên tài khoản' />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password'/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  );
}

export default Register;