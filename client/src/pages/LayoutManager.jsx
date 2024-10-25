import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutManager = () => {
  return (
    <div className='common-layout'>
        <nav className="sidebar">
            <ul>
                <li>
                    <Link>
                        <i class="fa-solid fa-user"></i>
                        admin 
                    </Link>
                </li>
                <li>
                    <Link>
                        <i class="fa-solid fa-gauge"></i>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link>
                        Thời khóa biểu
                    </Link>
                </li>
                <li>
                    <Link>
                        Lịch thi
                    </Link>
                </li>
                <li>
                    <Link>
                        Đăng ký HP SV
                    </Link>
                </li>
                <li>
                    <Link>
                        Danh sách lớp HP 
                    </Link>
                </li>
                <li>
                    <Link>
                        Kết quả học tập
                    </Link>
                </li>
                <li>
                    <Link>
                        TKB Giảng dạy
                    </Link>
                </li>
                <li>
                    <Link>
                        Lịch sử phòng học
                    </Link>
                </li>
                <li>
                    <Link>
                        Quản lý điểm HP 
                    </Link>
                </li>
                <li>
                    <Link>
                        Đăng xuất
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default LayoutManager