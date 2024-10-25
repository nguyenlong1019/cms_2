import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='intro'>
      <div className="intro-wrapper">
        <Link to="/staff/login" className='btn btn-success' style={{marginRight: '24px'}}>Đăng nhập trang giảng viên</Link>
        <Link to="/manager/login" className='btn btn-primary'>Đăng nhập trang quản lý</Link>
      </div>
    </div>
  )
}

export default Home