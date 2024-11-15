import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';

const ExamSchedule = () => {
  const [examSchedule, setExamSchedule] = useState([]);
  const mockData = [
    { stt: 1, courseCode: '010211', courseName: 'Cơ học cơ sở 1', examDate: '29-05-2024', period: '1', room: 'H3.31', year: '2023-2024', semester: '1' },
    { stt: 2, courseCode: '010212', courseName: 'Cơ học cơ sở 2', examDate: '22-05-2024', period: '2', room: '25.H2', year: '2023-2024', semester: '2' },
    { stt: 3, courseCode: '010301', courseName: 'Lập trình C++', examDate: '25-05-2024', period: '1', room: 'H1.101', year: '2023-2024', semester: '1' },
    { stt: 4, courseCode: '010302', courseName: 'Cơ sở dữ liệu', examDate: '26-05-2024', period: '2', room: 'H1.102', year: '2023-2024', semester: '2' },
    { stt: 5, courseCode: '010303', courseName: 'Kiến trúc máy tính', examDate: '27-05-2024', period: '3', room: 'H1.103', year: '2023-2024', semester: '1' },
    { stt: 6, courseCode: '010304', courseName: 'Lập trình Web', examDate: '28-05-2024', period: '4', room: 'H1.104', year: '2023-2024', semester: '2' },
    { stt: 7, courseCode: '010305', courseName: 'Phân tích thiết kế hệ thống', examDate: '29-05-2024', period: '5', room: 'H1.105', year: '2023-2024', semester: '1' },
    { stt: 8, courseCode: '010306', courseName: 'Lập trình Java', examDate: '30-05-2024', period: '1', room: 'H1.106', year: '2023-2024', semester: '2' },
    { stt: 9, courseCode: '010307', courseName: 'Mạng máy tính', examDate: '31-05-2024', period: '2', room: 'H1.107', year: '2023-2024', semester: '1' },
    { stt: 10, courseCode: '010308', courseName: 'An toàn thông tin', examDate: '01-06-2024', period: '3', room: 'H1.108', year: '2023-2024', semester: '2' },
    { stt: 11, courseCode: '010309', courseName: 'Phát triển phần mềm', examDate: '02-06-2024', period: '4', room: 'H1.109', year: '2023-2024', semester: '1' },
    { stt: 12, courseCode: '010310', courseName: 'Hệ điều hành', examDate: '03-06-2024', period: '5', room: 'H1.110', year: '2023-2024', semester: '2' },
    { stt: 13, courseCode: '010311', courseName: 'Lập trình Python', examDate: '04-06-2024', period: '1', room: 'H1.111', year: '2023-2024', semester: '1' },
    { stt: 14, courseCode: '010312', courseName: 'Phát triển di động', examDate: '05-06-2024', period: '2', room: 'H1.112', year: '2023-2024', semester: '2' },
    { stt: 15, courseCode: '010313', courseName: 'Trí tuệ nhân tạo', examDate: '06-06-2024', period: '3', room: 'H1.113', year: '2023-2024', semester: '1' },
  ];

  const [filteredData, setFilteredData] = useState(mockData);
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [selectedExams, setSelectedExams] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get('/exam/');
        console.log(res.data);
        setExamSchedule(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    const filtered = mockData.filter((item) => {
      return (
        (!academicYear || item.year === academicYear) &&
        (!semester || item.semester === semester) &&
        (!courseCode || item.courseCode.includes(courseCode))
      );
    });
    setFilteredData(filtered);
  };

  const handleSelectExam = (stt) => {
    setSelectedExams((prev) => {
      if (prev.includes(stt)) {
        return prev.filter((id) => id !== stt);
      } else {
        return [...prev, stt];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedExams([]);
    } else {
      setSelectedExams(filteredData.map((exam) => exam.stt));
    }
    setSelectAll(!selectAll);
  };

  const handleDownloadExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Iterate through selected exams and create sheets for each class
    filteredData.filter((exam) => selectedExams.includes(exam.stt)).forEach((exam) => {
      // Mock student data
      const studentData = [
        { STT: 1, 'Mã SV': 'SV001', 'Tên SV': 'Nguyễn Văn A', 'Lớp': exam.courseCode },
        { STT: 2, 'Mã SV': 'SV002', 'Tên SV': 'Trần Thị B', 'Lớp': exam.courseCode },
        { STT: 3, 'Mã SV': 'SV003', 'Tên SV': 'Lê Văn C', 'Lớp': exam.courseCode },
        { STT: 4, 'Mã SV': 'SV004', 'Tên SV': 'Phạm Thị D', 'Lớp': exam.courseCode },
      { STT: 5, 'Mã SV': 'SV005', 'Tên SV': 'Hoàng Văn E', 'Lớp': exam.courseCode },
      { STT: 6, 'Mã SV': 'SV006', 'Tên SV': 'Ngô Thị F', 'Lớp': exam.courseCode },
      { STT: 7, 'Mã SV': 'SV007', 'Tên SV': 'Đinh Văn G', 'Lớp': exam.courseCode },
      { STT: 8, 'Mã SV': 'SV008', 'Tên SV': 'Vũ Thị H', 'Lớp': exam.courseCode },
      { STT: 9, 'Mã SV': 'SV009', 'Tên SV': 'Phạm Văn I', 'Lớp': exam.courseCode },
      { STT: 10, 'Mã SV': 'SV010', 'Tên SV': 'Trần Thị J', 'Lớp': exam.courseCode },
      { STT: 11, 'Mã SV': 'SV011', 'Tên SV': 'Bùi Minh K', 'Lớp': exam.courseCode },
      { STT: 12, 'Mã SV': 'SV012', 'Tên SV': 'Nguyễn Hữu L', 'Lớp': exam.courseCode },
      { STT: 13, 'Mã SV': 'SV013', 'Tên SV': 'Phạm Xuân M', 'Lớp': exam.courseCode },
      { STT: 14, 'Mã SV': 'SV014', 'Tên SV': 'Trần Quang N', 'Lớp': exam.courseCode },
      { STT: 15, 'Mã SV': 'SV015', 'Tên SV': 'Lê Đình O', 'Lớp': exam.courseCode },
      { STT: 16, 'Mã SV': 'SV016', 'Tên SV': 'Nguyễn Thị P', 'Lớp': exam.courseCode },
      { STT: 17, 'Mã SV': 'SV017', 'Tên SV': 'Hoàng Thị Q', 'Lớp': exam.courseCode },
      { STT: 18, 'Mã SV': 'SV018', 'Tên SV': 'Đặng Văn R', 'Lớp': exam.courseCode },
      { STT: 19, 'Mã SV': 'SV019', 'Tên SV': 'Vũ Minh S', 'Lớp': exam.courseCode },
      { STT: 20, 'Mã SV': 'SV020', 'Tên SV': 'Phạm Hoài T', 'Lớp': exam.courseCode },
      ];

      // Create a worksheet for each class with student data
      const worksheet = XLSX.utils.json_to_sheet(studentData);
      XLSX.utils.book_append_sheet(workbook, worksheet, exam.courseName);
    });

    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, 'exam_schedule_with_students.xlsx');
  };



  return (
    <div>
      


<h3 style={{ fontSize: '22px' }} className='mb-3'>Lịch thi</h3>
      <div className="filter-controls mb-3 d-flex justify-content-start" style={{ gap: '24px' }}>
        <select className="form-select me-2" style={{display: 'inline-block', width: 'max-content'}} value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
          <option value="">Chọn năm học</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
        </select>
        <select className="form-select me-2" style={{display: 'inline-block', width: 'max-content'}} value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Chọn học kỳ</option>
          <option value="1">Học kỳ 1</option>
          <option value="2">Học kỳ 2</option>
        </select>
        <div className="d-flex" style={{display: 'inline-block', maxWidth: '600px'}}>
          <input type="text" className="form-control me-2" style={{display: 'inline-block', width: '300px'}} placeholder="Search mã học phần" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
          <button className="btn btn-primary" style={{display: 'inline-block', width: 'max-content'}} onClick={handleFilter}>Tìm kiếm</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
              <th>STT</th>
              <th>Mã HP</th>
              <th>Tên HP</th>
              <th>Tên lớp học phần</th>
              <th>Ngày thi</th>
              <th>Tiết thi</th>
              <th>Phòng thi</th>
              <th>Thi tập trung</th>
              <th>Chọn</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((exam, index) => (
              <tr key={index}>
                <td></td>
                <td>{exam.stt}</td>
                <td>{exam.courseCode}</td>
                <td>{exam.courseName}</td>
                <td></td>
                <td>{exam.examDate}</td>
                <td>{exam.period}</td>
                <td>{exam.room}</td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedExams.includes(exam.stt)}
                    onChange={() => handleSelectExam(exam.stt)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-success mt-3" style={{marginRight: '16px'}} onClick={handleDownloadExcel}>
        Tải xuống Excel
      </button>

      <button className="btn btn-success mt-3">
        Tải xuống thi tập trung
      </button>

    </div>
  )
}

export default ExamSchedule