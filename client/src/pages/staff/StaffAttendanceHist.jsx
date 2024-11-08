import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StaffAttendanceHist = () => {
  const [attHis, setAttHis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/attendance/");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="content-form-search mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Tìm kiếm phòng học" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i style={{backgroundColor: 'transparent'}} class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <input type="date" name="fromDate" id="" />
        <input type="date" name="toDate" id="" />
      </div>
      <div className="button-controls">
        <div className="btn btn-primary">Tìm kiếm</div>
        <div className="btn btn-info">Làm mới</div>
      </div>

      <div class="schedule-container">
        <h3>Lịch phòng học 209.H1</h3>
        <div class="schedule-legend">
          <span class="legend-item legend-class">Lịch học</span>
          <span class="legend-item legend-exam">Lịch thi</span>
          <span class="legend-item legend-request">Lịch xin phòng tự do</span>
        </div>
        <table class="table table-bordered schedule-table">
          <thead>
            <tr>
              <th>Tiết</th>
              <th>17/12</th>
              <th>18/12</th>
              <th>19/12</th>
              <th>20/12</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="empty-cell"></td>
              <td class="class-schedule">
                <p>Tiết: 1 - 3</p>
                <p>Khóa: Khóa 65 (2020)</p>
                <p>Mã Môn: 108113</p>
                <p>Tên Môn: Hệ thống điều hòa không khí</p>
                <p>Tên Lớp: 65HKC4</p>
              </td>
              <td class="empty-cell"></td>
              <td class="empty-cell"></td>
            </tr>
            <tr>
              <td>2</td>
              <td class="empty-cell"></td>
              <td class="exam-schedule">
                <p>Tiết: 4 - 6</p>
                <p>Khóa: Khóa 66 (2021)</p>
                <p>Mã Môn: 988806</p>
                <p>Tên Môn: Kỹ năng nghề nghiệp</p>
                <p>Tên Lớp: 66HKC4</p>
              </td>
              <td class="empty-cell"></td>
              <td class="empty-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default StaffAttendanceHist