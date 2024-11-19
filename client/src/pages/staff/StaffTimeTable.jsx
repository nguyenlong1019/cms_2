import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StaffTimeTable = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/timetable/");
        console.log(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=''>
      <div>Timetable</div>
    </div>
  )
}

export default StaffTimeTable