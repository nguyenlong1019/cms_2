import axios from 'axios';
import React, { useEffect, useState } from 'react'

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

  return (
    <div>
      {/* <h3 style={{fontSize: '22px'}} className='mb-3'>Lịch thi</h3>
      <div className="content-form-search mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Tìm kiếm lịch thi" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i style={{backgroundColor: 'transparent'}} class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <input type="date" name="fromDate" id="" />
        <input type="date" name="toDate" id="" />
      </div>
      <div className="button-controls">
        <div className="btn btn-primary">Tìm kiếm</div>
        <div className="btn btn-info">Làm mới</div>
      </div> */}

      {/* <div class="container my-4">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-primary">
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
                <th>Ngày Thi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>010211</td>
                <td>Cơ học cơ sở 1</td>
                <td>68CKF</td>
                <td>3</td>
                <td>4</td>
                <td>1</td>
                <td>3</td>
                <td>H3.31</td>
                <td></td>
                <td>29-05-2024</td>
              </tr>
              <tr>
                <td>010212</td>
                <td>Cơ học cơ sở 2</td>
                <td>68CD1</td>
                <td>2</td>
                <td>4</td>
                <td>1</td>
                <td>3</td>
                <td>25.H2</td>
                <td></td>
                <td>22-05-2024</td>
              </tr>
              <tr>
                <td>010301</td>
                <td>Lập trình C++</td>
                <td>68IT1</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>3</td>
                <td>H1.101</td>
                <td>Nguyễn Văn A</td>
                <td>25-05-2024</td>
              </tr>
              <tr>
                <td>010302</td>
                <td>Cơ sở dữ liệu</td>
                <td>68IT2</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>H1.102</td>
                <td>Trần Thị B</td>
                <td>26-05-2024</td>
              </tr>
              <tr>
                <td>010303</td>
                <td>Kiến trúc máy tính</td>
                <td>68IT3</td>
                <td>3</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>H1.103</td>
                <td>Lê Văn C</td>
                <td>27-05-2024</td>
              </tr>
              <tr>
                <td>010304</td>
                <td>Lập trình Web</td>
                <td>68IT4</td>
                <td>3</td>
                <td>5</td>
                <td>4</td>
                <td>3</td>
                <td>H1.104</td>
                <td>Phạm Thị D</td>
                <td>28-05-2024</td>
              </tr>
              <tr>
                <td>010305</td>
                <td>Phân tích thiết kế hệ thống</td>
                <td>68IT5</td>
                <td>3</td>
                <td>6</td>
                <td>5</td>
                <td>3</td>
                <td>H1.105</td>
                <td>Hoàng Văn E</td>
                <td>29-05-2024</td>
              </tr>
              <tr>
                <td>010306</td>
                <td>Lập trình Java</td>
                <td>68IT6</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>3</td>
                <td>H1.106</td>
                <td>Ngô Thị F</td>
                <td>30-05-2024</td>
              </tr>
              <tr>
                <td>010307</td>
                <td>Mạng máy tính</td>
                <td>68IT7</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>H1.107</td>
                <td>Đinh Văn G</td>
                <td>31-05-2024</td>
              </tr>
              <tr>
                <td>010308</td>
                <td>An toàn thông tin</td>
                <td>68IT8</td>
                <td>3</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>H1.108</td>
                <td>Vũ Thị H</td>
                <td>01-06-2024</td>
              </tr>
              <tr>
                <td>010309</td>
                <td>Phát triển phần mềm</td>
                <td>68IT9</td>
                <td>3</td>
                <td>5</td>
                <td>4</td>
                <td>3</td>
                <td>H1.109</td>
                <td>Nguyễn Văn I</td>
                <td>02-06-2024</td>
              </tr>
              <tr>
                <td>010310</td>
                <td>Hệ điều hành</td>
                <td>68IT10</td>
                <td>3</td>
                <td>6</td>
                <td>5</td>
                <td>3</td>
                <td>H1.110</td>
                <td>Trần Thị J</td>
                <td>03-06-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}


<h3 style={{ fontSize: '22px' }} className='mb-3'>Lịch thi</h3>
      <div className="filter-controls mb-3 d-flex justify-content-start" style={{gap: '24px'}}>
        <select style={{display: 'inline-block', width: 'max-content'}}
          className="form-select me-2"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
        >
          <option value="">Chọn năm học</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
          {/* Add more academic years as needed */}
        </select>
        <select style={{display: 'inline-block', width: 'max-content'}}
          className="form-select me-2"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="">Chọn học kỳ</option>
          <option value="1">Học kỳ 1</option>
          <option value="2">Học kỳ 2</option>
          {/* Add more semesters if needed */}
        </select>
        <div className="d-flex" style={{display: 'inline-block', width: 'max-content'}}>
          <input style={{width: '300px'}}
            type="text"
            className="form-control me-2"
            placeholder="Search mã học phần"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
          <button style={{display: 'inline-block', width: 'max-content'}} className="btn btn-primary" onClick={handleFilter}>
            Tìm kiếm
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>STT</th>
              <th>Mã Hp</th>
              <th>Tên HP</th>
              <th>Ngày thi</th>
              <th>Tiết thi</th>
              <th>Phòng thi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((exam, index) => (
              <tr key={index}>
                <td>{exam.stt}</td>
                <td>{exam.courseCode}</td>
                <td>{exam.courseName}</td>
                <td>{exam.examDate}</td>
                <td>{exam.period}</td>
                <td>{exam.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ExamSchedule