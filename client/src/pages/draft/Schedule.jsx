import React from 'react'

const Schedule = () => {
  return (
    <div className='schedule bg-gray-100'>
      <div class="flex">
        {/* <!-- Sidebar --> */}
        <div class="w-64 bg-white h-screen shadow-md">
          <div class="p-4">
          <img alt="HUCE Dashboard Logo" class="mb-4" height="50" src="https://storage.googleapis.com/a1aa/image/u0psFnLSANprN9ynhRe3KrZ3X9bgp3zfuf214oDOGn7QSrKnA.jpg" width="150"/>
          <ul>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-calendar-alt mr-2"></i>
              Thời khóa biểu
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-calendar-day mr-2"></i>
              Lịch thi
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-clipboard-list mr-2"></i>
              Đăng Ký Học Phần SV
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-list-ul mr-2"></i>
              Danh sách lớp học phần
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-chart-bar mr-2"></i>
              Kết quả học tập
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-chalkboard-teacher mr-2"></i>
              TKB Giảng Dạy
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-history mr-2"></i>
              Lịch sử phòng học
            </a>
            </li>
            <li class="mb-2">
            <a class="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded" href="#">
              <i class="fas fa-tasks mr-2"></i>
              Quản lý điểm học phần
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
            <a class="text-blue-500 hover:underline" href="#">Trang</a> / 
            <a class="text-blue-500 hover:underline" href="#">TKBHocKy</a>
            </h1>
            <h2 class="text-lg">
            TKBHocKy
            </h2>
          </div>
          <div class="flex items-center">
            <input class="border rounded p-2 mr-4" placeholder="Tìm kiếm..." type="text"/>
            <button class="text-gray-700">
            <i class="fas fa-sign-out-alt"></i>
            Đăng xuất
            </button>
          </div>
          </div>
          <div class="bg-white p-4 rounded shadow-md mb-4">
          <div class="flex justify-between items-center mb-4">
            <img alt="Hanoi University of Civil Engineering Logo" height="50" src="https://storage.googleapis.com/a1aa/image/thBVQ8w6GwK8FVfNwWwc7s7XkMcMv2N1gFZPxII91dJj0qyJA.jpg" width="150"/>
            <select class="border rounded p-2">
            <option>
              HK2 2023-2024
            </option>
            </select>
          </div>
          <div class="flex mb-4">
            <input class="border rounded p-2 flex-1 mr-2" placeholder="Mã môn/ Tên môn/ Mã Lớp" type="text"/>
            <button class="bg-blue-500 text-white p-2 rounded mr-2">
            Tìm kiếm
            </button>
            <button class="bg-blue-500 text-white p-2 rounded">
            Làm mới
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border">
            <thead>
              <tr>
              <th class="border px-4 py-2">
                MãMH
              </th>
              <th class="border px-4 py-2">
                Tên MH
              </th>
              <th class="border px-4 py-2">
                Mã lớp
              </th>
              <th class="border px-4 py-2">
                STC
              </th>
              <th class="border px-4 py-2">
                Thứ
              </th>
              <th class="border px-4 py-2">
                Tiết BD
              </th>
              <th class="border px-4 py-2">
                ST
              </th>
              <th class="border px-4 py-2">
                Phòng
              </th>
              <th class="border px-4 py-2">
                Giảng viên
              </th>
              <th class="border px-4 py-2">
                Tuần
              </th>
              <th class="border px-4 py-2">
                DSSV
              </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">010211</td>
                <td class="border px-4 py-2">Cơ học cơ sở 1</td>
                <td class="border px-4 py-2">68CXT</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">H3.61</td>
                <td class="border px-4 py-2">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Nguyễn Sỹ Nam', '0123456789', 'nam.nguyen@example.com')">Nguyễn Sỹ Nam</a>
                </td>
                <td class="border px-4 py-2">---5-8901234567-9</td>
                <td class="border px-4 py-2 text-center">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Danh sách sinh viên cho Cơ học cơ sở 1')">
                    <i class="fas fa-users"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">010212</td>
                <td class="border px-4 py-2">Cơ học cơ sở 2</td>
                <td class="border px-4 py-2">68CXT</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">4</td>
                <td class="border px-4 py-2">H3.62</td>
                <td class="border px-4 py-2">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Nguyễn Văn A', '0123456788', 'a.nguyen@example.com')">Nguyễn Văn A</a>
                </td>
                <td class="border px-4 py-2">---5-8901234567-9</td>
                <td class="border px-4 py-2 text-center">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Danh sách sinh viên cho Cơ học cơ sở 2')">
                    <i class="fas fa-users"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">010213</td>
                <td class="border px-4 py-2">Cơ học cơ sở 3</td>
                <td class="border px-4 py-2">68CD2</td>
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">5</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">3</td>
                <td class="border px-4 py-2">H3.61</td>
                <td class="border px-4 py-2">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Nguyễn Sỹ Nam', '0123456787', 'nam.nguyen@example.com')">Nguyễn Sỹ Nam</a>
                </td>
                <td class="border px-4 py-2">---5-8901234567-9</td>
                <td class="border px-4 py-2 text-center">
                  <a href="#" class="text-blue-500 hover:underline" onclick="openModal('Danh sách sinh viên cho Cơ học cơ sở 3')">
                    <i class="fas fa-users"></i>
                  </a>
                </td>
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

export default Schedule