import React from 'react'

const Student = () => {
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
                          <a href="#" class="text-blue-500 hover:underline">Trang</a> / 
                          <a href="#" class="text-blue-500 hover:underline">DSSV</a>
                      </h1>
                      <h2 class="text-lg">Danh Sách Sinh Viên</h2>
                  </div>
                  <div class="flex items-center">
                      <input type="text" class="border rounded p-2 mr-4" placeholder="Tìm kiếm..."/>
                      <button class="text-gray-700">
                          <i class="fas fa-sign-out-alt"></i> Đăng xuất
                      </button>
                  </div>
              </div>

              {/* <!-- Bảng thông tin lớp học --> */}
              <div class="bg-white p-4 rounded shadow-md mb-4">
                  <div class="grid grid-cols-3 gap-4 mb-4">
                      <div class="col-span-2">
                          <p><strong>Lớp:</strong> 66XDC2</p>
                          <p><strong>Môn:</strong> Cơ sở công nghệ kỹ thuật xây dựng</p>
                          <p><strong>Sĩ số:</strong> 41</p>
                      </div>
                      {/* <!-- Hình ảnh giữa --> */}
                      <div class="flex justify-center">
                          <img src="https://cdn.pixabay.com/photo/2016/11/29/04/54/education-1868750_1280.jpg" alt="Class" class="rounded shadow-md" width="250" />
                      </div>
                  </div>

                  {/* <!-- Bảng danh sách sinh viên --> */}
                  <div class="overflow-x-auto">
                      <table class="min-w-full bg-white border">
                          <thead>
                          <tr>
                              <th class="border px-4 py-2">STT</th>
                              <th class="border px-4 py-2">Mã Sinh Viên</th>
                              <th class="border px-4 py-2">Tên Sinh Viên</th>
                              <th class="border px-4 py-2">Email</th>
                              <th class="border px-4 py-2">Số điện thoại</th>
                              <th class="border px-4 py-2">Lớp Học</th>
                              <th class="border px-4 py-2">Ngày Sinh</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td class="border px-4 py-2">1</td>
                              <td class="border px-4 py-2">1501461</td>
                              <td class="border px-4 py-2">Đinh Ngọc Anh</td>
                              <td class="border px-4 py-2">anh1501461@huce.edu.vn</td>
                              <td class="border px-4 py-2">0986565233</td>
                              <td class="border px-4 py-2">61MNE</td>
                              <td class="border px-4 py-2">19/12/1998</td>
                          </tr>
                          <tr>
                              <td class="border px-4 py-2">2</td>
                              <td class="border px-4 py-2">0055768</td>
                              <td class="border px-4 py-2">Hoàng Duy Anh</td>
                              <td class="border px-4 py-2">anh0055768@huce.edu.vn</td>
                              <td class="border px-4 py-2">0824616818</td>
                              <td class="border px-4 py-2">68XF</td>
                              <td class="border px-4 py-2">02/10/2005</td>
                          </tr>
                          <tr>
                              <td class="border px-4 py-2">3</td>
                              <td class="border px-4 py-2">0108668</td>
                              <td class="border px-4 py-2">Nguyễn Sỹ Tùng Anh</td>
                              <td class="border px-4 py-2">anh0108668@huce.edu.vn</td>
                              <td class="border px-4 py-2">0378465838</td>
                              <td class="border px-4 py-2">68XF</td>
                              <td class="border px-4 py-2">23/01/2005</td>
                          </tr>
                          <tr>
                              <td class="border px-4 py-2">4</td>
                              <td class="border px-4 py-2">0058468</td>
                              <td class="border px-4 py-2">Trần Đức Anh</td>
                              <td class="border px-4 py-2">anh0058468@huce.edu.vn</td>
                              <td class="border px-4 py-2">0367722911</td>
                              <td class="border px-4 py-2">68XF</td>
                              <td class="border px-4 py-2">02/04/2005</td>
                          </tr>
                          <tr>
                              <td class="border px-4 py-2">5</td>
                              <td class="border px-4 py-2">0067968</td>
                              <td class="border px-4 py-2">Đào Tuấn Đại</td>
                              <td class="border px-4 py-2">dai0067968@huce.edu.vn</td>
                              <td class="border px-4 py-2">0327344214</td>
                              <td class="border px-4 py-2">68XF</td>
                              <td class="border px-4 py-2">14/10/2005</td>
                          </tr>
                          <tr>
                              <td class="border px-4 py-2">6</td>
                              <td class="border px-4 py-2">0069468</td>
                              <td class="border px-4 py-2">Trịnh Minh Đăng</td>
                              <td class="border px-4 py-2">dang0069468@huce.edu.vn</td>
                              <td class="border px-4 py-2">0942561892</td>
                              <td class="border px-4 py-2">68XF</td>
                              <td class="border px-4 py-2">25/09/2005</td>
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

export default Student