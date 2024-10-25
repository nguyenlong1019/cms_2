import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const StaffLogin = () => {
    const [inputs, setInputs] = useState({
        "username": "",
        "password": ""
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(inputs);
            navigate("/staff");
        } catch (err) {
            console.error(err);
            setError(err);
        }
    };

  return (
    <div className='log-reg'>
        <div className="log-reg-wrapper">
            <h2 className='mb-3'>
                Trang đăng nhập cho giảng viên
            </h2>
            <form className='mb-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tài khoản</label>
                    <input onChange={handleChange} type="username" name='username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                    <input onChange={handleChange} type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Lưu tài khoản</label>
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
            {err && <p>{err}</p>}
            <Link className='nav-link text-primary' to="/">Quay lại trang chủ</Link>
        </div>
    </div>
  )
}

export default StaffLogin