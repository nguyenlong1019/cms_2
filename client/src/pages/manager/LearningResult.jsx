import React from 'react'

const LearningResult = () => {
  const results = [
    { stt: 1, courseId: '390111', courseName: 'Đại số tuyến tính', class: '64IT5', credits: 3, dqt: 9.20, tx1: 0.00, tx2: 0.00, eligible: true, dkt1: 9.50, dkt2: null, finalScore: 9.40, grade: 4.00 },
    { stt: 2, courseId: '390121', courseName: 'Giải tích 1', class: '64IT5', credits: 3, dqt: 7.00, tx1: 0.00, tx2: 0.00, eligible: true, dkt1: 5.00, dkt2: null, finalScore: 5.60, grade: 2.00 },
    { stt: 3, courseId: '401701', courseName: 'Logic học đại cương', class: '64IT5', credits: 2, dqt: 8.00, tx1: 0.00, tx2: 0.00, eligible: false, dkt1: 3.80, dkt2: null, finalScore: 5.10, grade: 1.50 },
    { stt: 4, courseId: '440155', courseName: 'Tiếng Anh cơ bản 1', class: '64IT5', credits: 3, dqt: 6.80, tx1: 0.00, tx2: 0.00, eligible: true, dkt1: 8.50, dkt2: null, finalScore: 6.60, grade: 2.50 },
    { stt: 5, courseId: '450101', courseName: 'Hóa học đại cương', class: '64IT5', credits: 2, dqt: 9.00, tx1: 0.00, tx2: 0.00, eligible: true, dkt1: 8.50, dkt2: null, finalScore: 9.00, grade: 4.00 },
    { stt: 6, courseId: '510201', courseName: 'Pháp luật đại cương', class: '64IT5', credits: 2, dqt: 6.00, tx1: 0.00, tx2: 0.00, eligible: true, dkt1: 6.00, dkt2: null, finalScore: 6.10, grade: 2.00 },
  ];

  const gpa1 = 7.14;
  const gpa2 = 2.78;
  const cumulativeGpa = 7.14;


  return (
    <div>
      <div className="container my-4">
        <h4 style={{fontSize: '20px'}} className="mb-3">Kết quả học tập sinh viên Nguyễn Văn A</h4>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>STT</th>
                <th>Mã học phần</th>
                <th>Tên môn học</th>
                <th>Lớp học phần</th>
                <th>Số tín chỉ</th>
                <th>DQT</th>
                <th>Thường xuyên</th>
                <th>TB thường kỳ</th>
                <th>Được dự thi</th>
                <th>DKT</th>
                <th>Vắng thi</th>
                <th>Điểm tổng kết</th>
                <th>Thang điểm</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.stt}</td>
                  <td>{result.courseId}</td>
                  <td>{result.courseName}</td>
                  <td>{result.class}</td>
                  <td>{result.credits}</td>
                  <td>{result.dqt.toFixed(2)}</td>
                  <td>{result.tx1.toFixed(2)}</td>
                  <td>{result.tx2.toFixed(2)}</td>
                  <td>
                    {result.eligible ? (
                      <span className="text-success">✓</span>
                    ) : (
                      <span className="text-danger">✗</span>
                    )}
                  </td>
                  <td>{result.dkt1 ? result.dkt1.toFixed(2) : '---'}</td>
                  <td>{result.dkt2 ? result.dkt2.toFixed(2) : '---'}</td>
                  <td>{result.finalScore.toFixed(2)}</td>
                  <td>{result.grade.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3">
          <p>Điểm trung bình học kỳ hệ 10: {gpa1}</p>
          <p>Điểm trung bình học kỳ hệ 4: {gpa2}</p>
          <p>Điểm trung bình tích lũy: {cumulativeGpa}</p>
        </div>
      </div>
    </div>
  )
}

export default LearningResult