import React from 'react';

const Register = () => {
  return (
    // <div className='container register-container'>
    //     <div className="log-reg-form register-form">
    //         <h2>Đăng ký</h2>
    //         <form action="">
    //             <div className="form-group">
    //                 <label htmlFor="">Tên tài khoản</label>
    //                 <input type="text" placeholder='Tên tài khoản' />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="">Email</label>
    //                 <input type="email" placeholder='Email' />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="">Password</label>
    //                 <input type="password" placeholder='Password'/>
    //             </div>
    //             <button type='submit'>Register</button>
    //         </form>
    //     </div>
    // </div>

    <div className="register vh-100">
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="banner">
                        <h1>TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</h1>
                        <h2>Hanoi University of Civil Engineer</h2>
                    </div>
                    <div className="registration-form shadow-lg p-4">
                        <h2 className="text-center form-title">Đăng ký</h2>
                        <form>
                            <div className="form-group">
                                <label for="lastName">Họ Đệm</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Họ Đệm" />
                            </div>
                            <div className="form-group">
                                <label for="firstName">Tên</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Tên" />
                            </div>
                            <div className="form-group">
                                <label for="idNumber">CMND/CCCD</label>
                                <input type="text" className="form-control" id="idNumber" placeholder="CMND/CCCD" />
                            </div>
                            <div className="form-group">
                                <label for="phoneNumber">Số điện thoại</label>
                                <input type="text" className="form-control" id="phoneNumber" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Mật khẩu</label>
                                <input type="password" className="form-control" id="password" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="terms" />
                                <label className="form-check-label" for="terms">Tôi đồng ý với các điều khoản và điều kiện</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-3">Đăng ký</button>
                        </form>
                        <div className="text-center mt-3">
                            <p>Bạn đã có tài khoản? <a href="#">Đăng nhập</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;