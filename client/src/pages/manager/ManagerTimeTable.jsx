import React from 'react'

const ManagerTimeTable = () => {
  const schedule = [
    {
      courseCode: '040212',
      courseName: 'Kết cấu bê tông cốt thép',
      classCode: '66XE1',
      credits: 3,
      day: 2,
      startPeriod: 1,
      periodCount: 3,
      rooms: ['H3.71'],
      teacherName: 'Phạm Thanh Tùng',
      phone: '0903 278 456',
      email: 'tungpt@huec.edu.vn',
      students: '1234567-01234567',
      session: 'Học chính',
    },
    {
      courseCode: '040213',
      courseName: 'Đồ án kết cấu bê tông cốt thép',
      classCode: '66XE1',
      credits: 1,
      day: 4,
      startPeriod: 1,
      periodCount: 3,
      rooms: ['H3.31', '41.H2'],
      teacherName: 'Phạm Thanh Tùng',
      phone: '0903 278 456',
      email: 'tungpt@huec.edu.vn',
      students: '----34567',
      session: 'Học chính',
    },
  ];

  return (
    <div>
      <div className="container my-4">
      <h4 className="mb-3">Lịch giảng dạy</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Mã MH</th>
              <th>Tên MH</th>
              <th>Mã lớp</th>
              <th>STC</th>
              <th>Thứ</th>
              <th>Tiết BD</th>
              <th>ST</th>
              <th>Phòng</th>
              <th>Giảng viên</th>
              <th>Sĩ số</th>
              <th>Buổi</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.courseCode}</td>
                <td>{item.courseName}</td>
                <td>{item.classCode}</td>
                <td>{item.credits}</td>
                <td>{item.day}</td>
                <td>{item.startPeriod}</td>
                <td>{item.periodCount}</td>
                <td>{item.rooms.join(', ')}</td>
                <td>
                  <div className="teacher-info">
                    {item.teacherName}
                    <div className="teacher-tooltip">
                      <p><strong>Tên giảng viên:</strong> {item.teacherName}</p>
                      <p><strong>Số điện thoại:</strong> {item.phone}</p>
                      <p><strong>Email:</strong> {item.email}</p>
                    </div>
                  </div>
                </td>
                <td>{item.students}</td>
                <td>{item.session}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ManagerTimeTable