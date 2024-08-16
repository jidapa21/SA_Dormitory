import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
import "./index.css";

function Index() {
    return (
      <>
        <br />
        <div className='text-container'>
            <div className='text-1'>ติดตามสถานะของปัญหา</div>
        </div>
        <div className='grid1'>
            <div className='item item1'>ลำดับ</div>
            <div className='item item1'>หัวข้อของปัญหา/แบบฟอร์ม</div>
            <div className='item item1'>ประเภทปัญหา</div>
            <div className='item item1'>สถานะ</div>
        </div>
        <div className='grid2'>
            <div className='item item2'>1</div>
            <div className='item item2'>ฟอร์มขออนุญาติเข้า-ออกหอพัก</div>
            <div className='item item2'>ฟอร์มเอกสาร</div>
            <div className='item item2'>รอการตรวจสอบ</div>
        </div>
        <div className='grid2'>
            <div className='item item2'>2</div>
            <div className='item item2'>เครื่องทำน้ำอุ่น</div>
            <div className='item item2'>แจ้งซ่อม</div>
            <div className='item item2'>กำลังดำเนินการ</div>
        </div>
        <div className='grid2'>
            <div className='item item2'>3</div>
            <div className='item item2'>ฟอร์มผ่อนผัน</div>
            <div className='item item2'>ฟอร์มเอกสาร</div>
            <div className='item item2'>อนุมัติ</div>
        </div>
        <div className='grid2'>
            <div className='item item2'>4</div>
            <div className='item item2'>อ่างล้างหน้าตัน</div>
            <div className='item item2'>แจ้งซ่อม</div>
            <div className='item item2'>ซ่อมเสร็จแล้ว</div>
        </div>
        <br />
        </>
    );
}
export default Index