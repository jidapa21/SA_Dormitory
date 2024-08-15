import {
  Button,
  Card,
  Space,
  Form,
  Input,
  Radio,
  message,
  Flex,
  Divider,
  Row,
  Col,
  InputNumber,
  DatePicker,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./index.css";

export default function index() {

  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div className='title-1-flex'>
        <div className='text-1'>
          แบบฟอร์มขออนุญาติเข้า-ออกหอพักหลังเวลาปิดหอพัก/ค้างคืนนอกหอพัก
        </div>
        <div className='status-text'>สถานะ</div>
        <div className='status-textbox'>รอดำเนินการ</div>
      </div>
      <br />
      <div className="full-width-line"></div>
      <br />
      <div className="background">
        <div className="flex-form">
          <div className='title-1-flex name-text'>
            <div className=' flex1'>
              <div>ผู้ทำเรื่อง</div>
              <div>B191563</div>
              <div>มนัสเต</div>
              <div>สวัสดิกะ</div>
            </div>
            <div className='flex2'>
              <div>วันที่ทำเรื่อง</div>
              <div>B191563</div><br />
              <br />
            </div>

          </div>


          <Form layout="inline">
            <Row gutter={64}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item label="เรื่องที่ขอ">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>ขอกลับหอพักหลังเวลาปิดหอพัก</Radio>
                    <Radio value={2}>ขอออกจากหอพักก่อนเวลาเปิดหอพัก</Radio>
                    <Radio value={3}>ค้างคืนนอกหอพัก</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  label="ค่าไฟฟ้า"
                  name="electricly_bill"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรายละเอียดการขอรับบริการ !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  label="ค่าน้ำ"
                  name="water_bill"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรายละเอียดการขอรับบริการ !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  label="ทั้งนี้เนื่องจาก"
                  name="because_of"
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรายละเอียด !",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  label="ชำระภายในวันที่"
                  name="due_date"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกวัน/เดือน/ปี !",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end">
              <Col style={{ marginTop: "40px" }}>
                <Form.Item>
                  <Space>
                    <Link to="/">
                      <Button htmlType="button" style={{ marginRight: "10px" }}>
                        ยกเลิก
                      </Button>
                    </Link>
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<PlusOutlined />}
                    >
                      ยืนยัน
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>

          </Form>

        </div>
      </div >
    </>
  );
}