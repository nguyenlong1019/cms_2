import React from 'react'

const RegisterSubject = () => {
  return (
    <div className='bg-gray-100'>
      <div class="flex">
        {/* <!-- Sidebar --> */}
        <div class="w-64 bg-white h-screen shadow-md">
            <div class="p-4">
                <img src="https://storage.googleapis.com/a1aa/image/u0psFnLSANprN9ynhRe3KrZ3X9bgp3zfuf214oDOGn7QSrKnA.jpg" alt="HUCE Dashboard Logo" class="mb-4" width="150" height="50"/>
                <ul>
                    <li class="mb-2">
                        <a href="/schedule" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-calendar-alt mr-2"></i> Thời khóa biểu
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="/exam-schedule" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-calendar-day mr-2"></i> Lịch thi
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="/register-subject" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-clipboard-list mr-2"></i> Đăng Ký Học Phần SV
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-list-ul mr-2"></i> Danh sách lớp học phần
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-chart-bar mr-2"></i> Kết quả học tập
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-chalkboard-teacher mr-2"></i> TKB Giảng Dạy
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-history mr-2"></i> Lịch sử phòng học
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                            <i class="fas fa-tasks mr-2"></i> Quản lý điểm học phần
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* <!-- Main Content --> */}
        <div class="flex-1 p-6">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h1 class="text-xl font-semibold">
                        <a href="/" class="text-blue-500 hover:underline">Trang</a> / 
                        <a href="/register-subject" class="text-blue-500 hover:underline">Đăng Ký Học Phần SV</a>
                    </h1>
                    <h2 class="text-lg">Đăng Ký Học Phần SV</h2>
                </div>
                <div class="flex items-center">
                    <input type="text" class="border rounded p-2 mr-4" placeholder="Tìm kiếm..."/>
                    <button class="text-gray-700">
                        <i class="fas fa-sign-out-alt"></i> Đăng xuất
                    </button>
                </div>
            </div>

            <div class="bg-white p-4 rounded shadow-md mb-4">
                <div class="flex justify-between items-center mb-4">
                    <img src="https://storage.googleapis.com/a1aa/image/thBVQ8w6GwK8FVfNwWwc7s7XkMcMv2N1gFZPxII91dJj0qyJA.jpg" alt="HUCE Logo" width="150" height="50"/>
                    <select class="border rounded p-2">
                        <option>HK1 2023-2024</option>
                    </select>
                </div>
                <div class="flex mb-4">
                    <input type="text" class="border rounded p-2 flex-1 mr-2" placeholder="Mã môn/ Tên môn/ Mã Lớp"/>
                    <button class="bg-blue-500 text-white p-2 rounded mr-2">Tìm kiếm</button>
                    <button class="bg-blue-500 text-white p-2 rounded">Làm mới</button>
                </div>

                {/* <!-- Table for Đăng Ký Học Phần --> */}
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border">
                        <thead>
                        <tr>
                            <th class="border px-4 py-2">Mã MH</th>
                            <th class="border px-4 py-2">Tên MH</th>
                            <th class="border px-4 py-2">STC</th>
                            <th class="border px-4 py-2">Lớp HP</th>
                            <th class="border px-4 py-2">Trạng thái</th>
                            <th class="border px-4 py-2">Học phí</th>
                            <th class="border px-4 py-2">Ngày ĐK</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="border px-4 py-2">471786</td>
                            <td class="border px-4 py-2">Đồ án tốt nghiệp</td>
                            <td class="border px-4 py-2">10</td>
                            <td class="border px-4 py-2">64PM.D1</td>
                            <td class="border px-4 py-2 text-green-500">Đăng ký mới</td>
                            <td class="border px-4 py-2">4,025,000 đ</td>
                            <td class="border px-4 py-2">04-09-2023</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">471785</td>
                            <td class="border px-4 py-2">Thực tập cán bộ kỹ thuật</td>
                            <td class="border px-4 py-2">4</td>
                            <td class="border px-4 py-2">64PM.D1</td>
                            <td class="border px-4 py-2 text-green-500">Đăng ký mới</td>
                            <td class="border px-4 py-2">1,610,000 đ</td>
                            <td class="border px-4 py-2">17-07-2023</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-right mt-4">
                    <span class="font-bold text-lg">Tổng học phí: 5,635,000 đ</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RegisterSubject