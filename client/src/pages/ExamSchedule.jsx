import React from 'react'

const ExamSchedule = () => {
  return (
    <div className='bg-gray-100'>
      <div className="flex">
      {/* <!-- Sidebar --> */}
      <div className="w-64 bg-white h-screen shadow-md">
          <div className="p-4">
              <img src="https://storage.googleapis.com/a1aa/image/u0psFnLSANprN9ynhRe3KrZ3X9bgp3zfuf214oDOGn7QSrKnA.jpg" alt="HUCE Dashboard Logo" className="mb-4" width="150" height="50"/>
              <ul>
                  <li className="mb-2">
                      <a href="/schedule" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-calendar-alt mr-2"></i> Thời khóa biểu
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="/exam-schedule" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-calendar-day mr-2"></i> Lịch thi
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="/register-subject" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-clipboard-list mr-2"></i> Đăng Ký Học Phần SV
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-list-ul mr-2"></i> Danh sách lớp học phần
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-chart-bar mr-2"></i> Kết quả học tập
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-chalkboard-teacher mr-2"></i> TKB Giảng Dạy
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-history mr-2"></i> Lịch sử phòng học
                      </a>
                  </li>
                  <li className="mb-2">
                      <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                          <i className="fas fa-tasks mr-2"></i> Quản lý điểm học phần
                      </a>
                  </li>
              </ul>
          </div>
      </div>

      {/* <!-- Main Content --> */}
      <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
              <div>
                  <h1 className="text-xl font-semibold">
                      <a href="/" className="text-blue-500 hover:underline">Trang</a> / 
                      <a href="#" className="text-blue-500 hover:underline">Lịch Thi</a>
                  </h1>
                  <h2 className="text-lg">Lịch Thi</h2>
              </div>
              <div className="flex items-center">
                  <input type="text" className="border rounded p-2 mr-4" placeholder="Tìm kiếm..."/>
                  <button className="text-gray-700">
                      <i className="fas fa-sign-out-alt"></i> Đăng xuất
                  </button>
              </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md mb-4">
              <div className="flex justify-between items-center mb-4">
                  <img src="https://storage.googleapis.com/a1aa/image/thBVQ8w6GwK8FVfNwWwc7s7XkMcMv2N1gFZPxII91dJj0qyJA.jpg" alt="HUCE Logo" width="150" height="50"/>
                  <select className="border rounded p-2">
                      <option>HK2 2023-2024</option>
                  </select>
              </div>
              <div className="flex mb-4">
                  <input type="text" className="border rounded p-2 flex-1 mr-2" placeholder="Mã môn/ Tên môn/ Mã Lớp"/>
                  <button className="bg-blue-500 text-white p-2 rounded mr-2">Tìm kiếm</button>
                  <button className="bg-blue-500 text-white p-2 rounded">Làm mới</button>
              </div>

              {/* <!-- Table for Lịch thi --> */}
              <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                      <thead>
                      <tr>
                          <th className="border px-4 py-2">Mã MH</th>
                          <th className="border px-4 py-2">Tên MH</th>
                          <th className="border px-4 py-2">Mã lớp</th>
                          <th className="border px-4 py-2">STC</th>
                          <th className="border px-4 py-2">Thứ</th>
                          <th className="border px-4 py-2">Tiết BD</th>
                          <th className="border px-4 py-2">Phòng</th>
                          <th className="border px-4 py-2">Ngày Thi</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td className="border px-4 py-2">010211</td>
                          <td className="border px-4 py-2">Cơ học cơ sở 1</td>
                          <td className="border px-4 py-2">68KXF</td>
                          <td className="border px-4 py-2">3</td>
                          <td className="border px-4 py-2">4</td>
                          <td className="border px-4 py-2">1</td>
                          <td className="border px-4 py-2">H3.31</td>
                          <td className="border px-4 py-2">29-05-2024</td>
                      </tr>
                      <tr>
                          <td className="border px-4 py-2">010212</td>
                          <td className="border px-4 py-2">Cơ học cơ sở 2</td>
                          <td className="border px-4 py-2">68CD1</td>
                          <td className="border px-4 py-2">2</td>
                          <td className="border px-4 py-2">4</td>
                          <td className="border px-4 py-2">1</td>
                          <td className="border px-4 py-2">25.H2</td>
                          <td className="border px-4 py-2">22-05-2024</td>
                      </tr>
                      <tr>
                          <td className="border px-4 py-2">010212</td>
                          <td className="border px-4 py-2">Cơ học cơ sở 2</td>
                          <td className="border px-4 py-2">68CD2</td>
                          <td className="border px-4 py-2">2</td>
                          <td className="border px-4 py-2">4</td>
                          <td className="border px-4 py-2">1</td>
                          <td className="border px-4 py-2">H2.25</td>
                          <td className="border px-4 py-2">22-05-2024</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
    </div>
  )
}

export default ExamSchedule