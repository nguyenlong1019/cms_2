import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManagerSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/timetable/');
        console.log(res.data);
        setSchedules(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3 style={{fontSize: '22px'}} className='mb-3'>Thời khóa biểu lịch học</h3>
      <div className="content-form-search mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Tìm kiếm lịch học" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i style={{backgroundColor: 'transparent'}} class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <input type="date" name="fromDate" id="" />
        <input type="date" name="toDate" id="" />
      </div>
      <div className="button-controls">
        <div className="btn btn-primary">Tìm kiếm</div>
        <div className="btn btn-info">Làm mới</div>
      </div>

      <div class="container-fluid my-4">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead class="table-primary">
              <tr>
                <th>Học phần</th>
                <th>Phòng</th>
                <th>Sĩ số</th>
                <th>Thứ</th>
                <th>Từ tiết</th>
                <th>Đến tiết</th>
                <th>Ngày học</th>
                <th>Tổng tiết dạy</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map(item => (
                <tr key={item.id}>
                  <td></td>
                  <td></td>
                  <td>{item.qty}</td>
                  <td>{item.day}</td>
                  <td>{item.begin}</td>
                  <td>{item.finish}</td>
                  <td>{item.date_on}</td>
                  <td>{item.total_lession}</td>
                  <td>
                    <Link className='btn btn-warning' style={{marginRight: '4px'}}>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <Link className='btn btn-danger'>
                      <i class="fa-solid fa-trash"></i>
                    </Link>
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

export default ManagerSchedule