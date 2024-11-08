import React from 'react'

const GradeManager = () => {
  const courses = [
    {
      courseId: '450101',
      courseName: 'Tin học đại cương',
      stc: 3,
      classCode: '68TH4',
      teacher: 'Đào Tiếng Kiệm',
      examDate: '12-12-2023',
      gradeLockStatus: 'Đã khóa',
      finalExamLockStatus: 'Chưa khóa',
      paperSubmission: false,
      paperSubmissionDate: null,
    },
    {
      courseId: '450101',
      courseName: 'Tin học đại cương',
      stc: 3,
      classCode: '68TH4',
      teacher: 'Nguyễn Mạnh Tuấn',
      examDate: '15-12-2023',
      gradeLockStatus: 'Đã khóa',
      finalExamLockStatus: 'Chưa khóa',
      paperSubmission: false,
      paperSubmissionDate: null,
    },
    {
      courseId: '450101',
      courseName: 'Tin học đại cương',
      stc: 3,
      classCode: 'LOPNV30',
      teacher: 'Phạm Văn Hoàn, Nguyễn Văn Hải',
      examDate: '09-11-2023',
      gradeLockStatus: 'Đã khóa',
      finalExamLockStatus: 'Đã khóa',
      paperSubmission: true,
      paperSubmissionDate: '09-11-2023',
    },
  ];

  return (
    <div>

<div className="container my-4">
      <div className="d-flex justify-content-between mb-3">
        <input type="text" className="form-control me-2" placeholder="Tên học phần" style={{ maxWidth: '300px' }} />
        <select className="form-select" style={{ maxWidth: '150px' }}>
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
              <th>Mã môn học</th>
              <th>Tên môn học</th>
              <th>STC</th>
              <th>Lớp Học Phần</th>
              <th>Giảng viên</th>
              <th>Ngày thi</th>
              <th>Khóa DQT</th>
              <th>Khóa điểm KT</th>
              <th>Đã nộp bản giấy</th>
              <th>Ngày nộp bản giấy</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.stc}</td>
                <td>{course.classCode}</td>
                <td>{course.teacher}</td>
                <td>{course.examDate}</td>
                <td className={course.gradeLockStatus === 'Đã khóa' ? 'text-success' : 'text-danger'}>
                  {course.gradeLockStatus}
                </td>
                <td className={course.finalExamLockStatus === 'Đã khóa' ? 'text-success' : 'text-danger'}>
                  {course.finalExamLockStatus}
                </td>
                <td>
                  <input type="checkbox" checked={course.paperSubmission} readOnly />
                </td>
                <td>{course.paperSubmissionDate || '---'}</td>
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
      </div>
    </div>

    </div>
  )
}

export default GradeManager