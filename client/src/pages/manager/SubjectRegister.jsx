import React from 'react'

const SubjectRegister = () => {
  const courses = [
    { id: '471786', name: 'Đồ án tốt nghiệp', stc: 10, class: '64PM.D1', status: 'Đăng ký mới', fee: '44,025,000', date: '04-09-2023' },
    { id: '471785', name: 'Thực tập cán bộ kỹ thuật', stc: 4, class: '64PM.D1', status: 'Đăng ký mới', fee: '1,610,000', date: '17-07-2023' },
  ];

  const totalFee = '45,635,000';

  return (
    <div>
      <div className="container-fluid my-4">
        <h4 className="mb-3">Danh sách môn học đăng ký sinh viên Nguyễn Văn A</h4>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Mã sinh viên"
            style={{ maxWidth: '200px' }}
          />
          <div className="input-group" style={{ maxWidth: '200px' }}>
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <select className="form-select ms-2" style={{ maxWidth: '150px' }}>
            <option value="">HK1 2023-2024</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary me-2">Tìm kiếm</button>
          <button className="btn btn-secondary">Làm mới</button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Mã Môn Học</th>
                <th>Tên Môn Học</th>
                <th>STC</th>
                <th>Lớp Học Phần</th>
                <th>Trạng Thái Đăng Ký</th>
                <th>Học phí</th>
                <th>Ngày Đăng Ký</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.stc}</td>
                  <td>{course.class}</td>
                  <td className="text-success">{course.status}</td>
                  <td>{course.fee}</td>
                  <td>{course.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <button className="btn btn-light me-2">←</button>
            <span>1</span>
            <button className="btn btn-light ms-2">→</button>
          </div>
          <select className="form-select" style={{ maxWidth: '100px' }}>
            <option value="10">10 / page</option>
            {/* Add more options as needed */}
          </select>
          <strong className="text-end">Tổng học phí: {totalFee}</strong>
        </div>
      </div>
    </div>
  )
}

export default SubjectRegister