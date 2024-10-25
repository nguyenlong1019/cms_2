import React from 'react'
import { Link } from 'react-router-dom'

const ManagerLogin = () => {
  return (
    <div className='log-reg'>
        <div className="log-reg-wrapper">
            <h2 className='mb-3'>
                Trang đăng nhập cho quản lý
            </h2>
            <form className='mb-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tài khoản</label>
                    <input type="username" name='username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Lưu tài khoản</label>
                </div>
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
            <Link className='nav-link text-primary' to="/">Quay lại trang chủ</Link>
        </div>
    </div>
  )
}

export default ManagerLogin