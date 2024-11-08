import React from 'react'

const Classroom = () => {
  const students = [
    { stt: 1, studentId: '0102566', name: 'Lê Tuấn Anh', gender: 'Nam', email: 'anh0102566@huec.edu.vn', phone: '0587093388', class: '66XDC2', dob: '25/12/2003' },
    { stt: 2, studentId: '0102766', name: 'Nguyễn Hà Phan Anh', gender: 'Nam', email: 'anh0102766@huec.edu.vn', phone: '0934611383', class: '66XDC2', dob: '11/08/2003' },
    { stt: 3, studentId: '0103266', name: 'Nguyễn Việt Anh', gender: 'Nam', email: 'anh0103266@huec.edu.vn', phone: '0917384724', class: '66XDC2', dob: '24/08/2003' },
    { stt: 4, studentId: '0104566', name: 'Đặng Văn Chính', gender: 'Nam', email: 'chinh0104566@huec.edu.vn', phone: '0355665648', class: '66XDC2', dob: '14/04/2003' },
    { stt: 5, studentId: '0104866', name: 'Bùi Văn Chung', gender: 'Nam', email: 'chung0104866@huec.edu.vn', phone: '0869970336', class: '66XDC2', dob: '13/04/2003' },
    { stt: 6, studentId: '0105266', name: 'Nguyễn Huy Công', gender: 'Nam', email: 'cong0105266@huec.edu.vn', phone: '0588450000', class: '66XDC3', dob: '17/09/2003' },
  ];

  return (
    <div>
      <h3 style={{fontSize: '22px'}} className='mb-3'>Lớp học phần</h3>
      <div className="content-form-search mb-3">
        <div class="input-group" style={{maxWidth: '600px'}}>
          <input type="text" class="form-control" placeholder="Tìm kiếm lịch học" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i style={{backgroundColor: 'transparent'}} class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div className="button-controls">
        <div className="btn btn-primary">Thêm mới</div>
      </div>

      <div className="container-fluid my-4">
        <div className="mb-3">
          <h4 style={{fontSize: '19px'}}>Lớp: 66XDC2</h4>
          <h5 style={{fontSize: '18px'}}>Môn: Cơ sở công nghệ kỹ thuật xây dựng</h5>
          <p style={{fontSize: '16px'}}>ST số: 41</p>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>STT</th>
                <th>Mã Sinh Viên</th>
                <th>Tên Sinh Viên</th>
                <th>Giới tính</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Lớp Học</th>
                <th>Ngày Sinh</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.stt}</td>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.class}</td>
                  <td>{student.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Classroom