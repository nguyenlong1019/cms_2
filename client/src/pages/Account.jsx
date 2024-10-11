import React from 'react'

const Account = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex">
      {/* <!-- Sidebar --> */}
      <div className="w-64 bg-white shadow-md h-screen">
        <div className="p-4">
        <div className="flex items-center space-x-2">
          <img alt="HUCE Logo" className="w-10 h-10" height="40" src="https://storage.googleapis.com/a1aa/image/HKGFVrXmwB6jGpGSUozgVgNJeivbyLJhikNiRlBHUBlDfTlTA.jpg" width="40"/>
          <span className="font-semibold text-lg">
          HUCE Dashboard
          </span>
        </div>
        <nav className="mt-8">
          <a className="flex items-center p-2 text-gray-700 bg-blue-100 rounded-md" href="#">
          <i className="fas fa-user-cog mr-2"></i>
          <span>Quản lý tài khoản</span>
          </a>
        </nav>
        </div>
      </div>
      {/* <!-- Main Content --> */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
        <div>
          {/* <!-- Trang and QLTaiKhoan now clickable --> */}
          <h1 className="text-xl font-semibold">
          <a href="/" className="text-blue-500">Trang</a> / 
          <a href="/account" className="text-blue-500">QLTaiKhoan</a>
          </h1>
          <h2 className="text-2xl font-bold">QLTaiKhoan</h2>
        </div>
        <div className="flex items-center space-x-4">
          <input className="border rounded-md p-2" placeholder="Tìm kiếm..." type="text"/>
          {/* <!-- Icons now clickable --> */}
          <a href="#"><i className="fas fa-bell text-gray-500"></i></a>
          <a href="#"><i className="fas fa-user-circle text-gray-500"></i></a>
          {/* <!-- Đăng xuất now clickable --> */}
          <a href="/login" className="text-blue-500">Đăng xuất</a>
        </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <img alt="Hanoi University of Civil Engineering Banner" className="w-full h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/WUjSqpWc72qAGNkszekpFRcmPHPdNfsvOZTM8SnpUW3FenKnA.jpg" width="600"/>
        </div>
        <div className="flex mb-4">
          <input className="border rounded-l-md p-2 flex-1" placeholder="Email/ Họ đệm/ Tên" type="text"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Tìm kiếm</button>
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">Làm mới</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
          <tr>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Họ đệm</th>
            <th className="border-b p-2">Tên</th>
            <th className="border-b p-2">Số CMND</th>
            <th className="border-b p-2">Số điện thoại</th>
            <th className="border-b p-2">Chức quyền</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="border-b p-2">lanhdao</td>
            <td className="border-b p-2">lanhdao</td>
            <td className="border-b p-2">lanhdao</td>
            <td className="border-b p-2">lanhdao</td>
            <td className="border-b p-2">lanhdao</td>
            <td className="border-b p-2">
            {/* <!-- Dropdown for selecting roles --> */}
            <select className="bg-blue-500 text-white px-4 py-1 rounded-md">
              <option value="lanhdao">Lãnh đạo</option>
              <option value="giangvien">Giảng viên</option>
              <option value="sinhvien">Sinh viên</option>
            </select>
            </td>
          </tr>
          <tr>
            <td className="border-b p-2">giangvien</td>
            <td className="border-b p-2">giangvien</td>
            <td className="border-b p-2">giangvien</td>
            <td className="border-b p-2">giangvien</td>
            <td className="border-b p-2">giangvien</td>
            <td className="border-b p-2">
            <select className="bg-green-500 text-white px-4 py-1 rounded-md">
              <option value="lanhdao">Lãnh đạo</option>
              <option value="giangvien" selected>Giảng viên</option>
              <option value="sinhvien">Sinh viên</option>
            </select>
            </td>
          </tr>
          <tr>
            <td className="border-b p-2">tungph@huce.edu.vn</td>
            <td className="border-b p-2">Phạm Hữu</td>
            <td className="border-b p-2">Tùng</td>
            <td className="border-b p-2">030080000023</td>
            <td className="border-b p-2">0904 812 815</td>
            <td className="border-b p-2">
            <select className="bg-blue-500 text-white px-4 py-1 rounded-md">
              <option value="lanhdao" selected>Lãnh đạo</option>
              <option value="giangvien">Giảng viên</option>
              <option value="sinhvien">Sinh viên</option>
            </select>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            <i className="fas fa-chevron-left"></i>
          </button>
          <span>1</span>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
            <i className="fas fa-chevron-right"></i>
          </button>
          </div>
          <select className="border rounded-md p-2">
          <option>10 / page</option>
          <option>20 / page</option>
          <option>30 / page</option>
          </select>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Account