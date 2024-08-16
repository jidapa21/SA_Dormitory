import {
  Table,
  Tag,
} from 'antd';
import React from 'react';

interface DataType {
  key: string;
  no: string;
  subject: string;
  type: string;
  state: string[];
}

const Index: React.FC = () => {
  const columns = [
    {
      title: 'ลำดับ',
      dataIndex: 'no',
      key: 'no',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'หัวข้อ',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'ประเภท',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'สถานะ',
      key: 'state',
      dataIndex: 'state',
      render: (state: string[]) => (
        <>
          {state.map((state: string) => {
            let color: string;
            if (state === 'รอการตรวจสอบ') {
              color = 'gray';
            } else if (state === 'กำลังดำเนินการ') {
              color = 'yellow';
            } else if (state === 'อนุมัติ') {
              color = 'green';
            } else if (state === 'เสร็จสิ้น') {
              color = 'green';
            } else {
              color = 'default';
            }
            return (
              <Tag color={color} key={state}>
                {state.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      no: '1',
      subject: 'ฟอร์มขออนุญาติเข้า-ออกหอพัก',
      type: 'ฟอร์มเอกสาร',
      state: ['รอการตรวจสอบ'],
    },
    {
      key: '2',
      no: '2',
      subject: 'เครื่องทำน้ำอุ่นไม่ทำงาน',
      type: 'แจ้งซ่อม',
      state: ['กำลังดำเนินการ'],
    },
    {
      key: '3',
      no: '3',
      subject: 'ฟอร์มผ่อนผัน',
      type: 'ฟอร์มเอกสาร',
      state: ['อนุมัติ'],
    },
    {
      key: '4',
      no: '4',
      subject: 'อ่างล้างหน้าตัน',
      type: 'แจ้งซ่อม',
      state: ['เสร็จสิ้น'],
    }
  ];

  return (
    <>
      <br />
      <div className='text-container'>
        <div className='text-1'>ติดตามสถานะของปัญหา</div>
      </div>
      <br />
      <br />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Index;
