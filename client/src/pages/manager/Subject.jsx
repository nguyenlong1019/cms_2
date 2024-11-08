import React from 'react'

const Subject = () => {
  const courses = [
    { id: '531732', name: 'Xử lý số tín hiệu', stc: 2, class: '64PM2', siSo: 76 },
    { id: '471811', name: 'Đồ án cơ sở dữ liệu', stc: 1, class: '64PM2', siSo: 77 },
    { id: '471784', name: 'Lập trình trong môi trường nhúng', stc: 3, class: '64PM2', siSo: 76 },
    { id: '471774', name: 'Lập trình LINUX', stc: 3, class: '64PM2', siSo: 77 },
    { id: '471771', name: 'Công nghệ WEB nâng cao', stc: 2, class: '64PM2', siSo: 77 },
    { id: '471738', name: 'Nhận dạng xử lý tiếng nói', stc: 2, class: '64PM2', siSo: 76 },
    { id: '471731', name: 'Công nghệ WEB', stc: 2, class: '64PM2', siSo: 76 },
    { id: '461761', name: 'Trí tuệ nhân tạo', stc: 2, class: '64PM2', siSo: 76 },
    { id: '451731', name: 'Đồ án đồ họa máy tính', stc: 2, class: '64PM2', siSo: 77 },
    { id: '451730', name: 'Đồ họa máy tính 2', stc: 2, class: '64PM2', siSo: 75 },
  ];

  return (
    <div>


      <div className="container-fluid my-4">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary">Tìm kiếm</button>
          <button className="btn btn-secondary">Làm mới</button>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead className="table-light">
              <tr>
                <th>Mã Môn Học</th>
                <th>Tên Môn Học</th>
                <th>STC</th>
                <th>Lớp Học Phần</th>
                <th>SI Số</th>
                <th>DSSV</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.stc}</td>
                  <td>{course.class}</td>
                  <td>{course.siSo}</td>
                  <td>
                    <button className="btn btn-outline-info">
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Subject