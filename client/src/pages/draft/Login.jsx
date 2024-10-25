import React from 'react'

const Login = () => {
  return (
    <div className='login vh-100'>
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="banner">
              <h1>TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</h1>
              <h2>Hanoi University of Civil Engineer</h2>
            </div>
            <div className="login-form shadow-lg p-4">
              <h2 className="text-center form-title">
                Đăng nhập hệ thống
              </h2>
              <form action="">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder='Nhập email của bạn' className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu</label>
                  <input type="password" name="password" id="password" placeholder='Nhập mật khẩu của bạn' className="form-control" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" for="rememberMe">Nhớ tài khoản</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-3">Đăng nhập</button>
              </form>
              <div class="text-center mt-3">
                        <p>Bạn không có tài khoản? <a href="/register">Đăng ký</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login