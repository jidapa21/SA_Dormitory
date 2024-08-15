import { Col, Row, Card, Statistic, Table } from "antd";
import {
  LineOutlined,
  BorderOutlined,
  AuditOutlined,
  UserOutlined,
  PieChartOutlined,
  StockOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import "./index.css";

interface DataType {
  key:              string;
  Subject:          string;
  Detail:           string;
  Image:            string;
  Location_Details: string;
  Contact:          string;
  Time_Slot:        string;
  Remarks:          string;
  Status:           string;
  Student_ID:       number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "หัวข้อการขอรับบริการ",
    dataIndex: "Subject",
    key: "subject",
  },
  {
    title: "รายละเอียดการขอรับบริการ",
    dataIndex: "Detail",
    key: "Detail",
  },
  {
    title: "`ภาพประกอบ`",
    dataIndex: "Image",
    key: "image",
  },
  {
    title: "รายละเอียดสถานที่ที่รับบริการ",
    dataIndex: "Location_Details",
    key: "location_details",
  },
  {
    title: "`ช่องทางติดต่อ`",
    dataIndex: "Contact",
    key: "contact",
  },
  {
    title: "ช่วงเวลาที่รับบริการ",
    dataIndex: "Time_Slot",
    key: "time_slot",
  },
  {
    title: "หมายเหตุ",
    dataIndex: "Remarks",
    key: "remarks",
  },
  {
    title: "สถานะ",
    dataIndex: "Status",
    key: "status",
  },
];

const data: DataType[] = [
  {
    key: '1',
    Subject: 'ซ่อมไฟฟ้า',
    Detail: 'หลอดไฟไม่ติด',
    Image: 'image_url',
    Location_Details: 'ห้อง 101',
    Contact: 'ติดต่อ 123456789',
    Time_Slot: '09:00 - 11:00',
    Remarks: 'เร่งด่วน',
    Status: 'รอดำเนินการ',
  },
];

export default function index() {
  const filteredData = data.filter(item => item.Status);
  return (
    <>
      <br />
      <div className='text-container'>
        <div className='text-1'>
          แจ้งซ่อม
        </div>
          <div className='text-2'>
            สถานะ
          </div>
          <div className='text-3'>
            <div>{filteredData[0].Status}</div>
          </div>
      </div>
      <br />
      <div className="full-width-line-container">
        <div className="full-width-line"></div>
      </div>

    </>
  );
}