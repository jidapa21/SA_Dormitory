import {
  Button,
  Space,
  Form,
  Input,
  Radio,
  Divider,
  Row,
  Col,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./../Repairing/index.css";

export default function index() {

  const [componentDisabled, setComponentDisabled] = useState(true);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  return (
    <>
      <div className='title-1-flex'>
        <div className='text-1'>
          แบบฟอร์มลาออกหอพัก
        </div>
        <div className='status-text'>สถานะ</div>
        <div className='status-textbox'>รอดำเนินการ</div>
      </div>
      <br />
      <div className="full-width-line"></div>
      <br />
      <div className="container">
        <div className="background">
          <div className="flex-form">
            <div className='name-text flex1'>
              <div>ผู้ทำเรื่อง</div>
              <div>B191563</div>
              <div>มนัสเต</div>
              <div>สวัสดิกะ</div>
              <br />
              <br />
            </div>


            <Form
              name="layout-multiple-horizontal"
              layout="horizontal"
            >
              <Row gutter={64}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    label="เหตุผลที่ลาออกเนื่องจาก"
                    name="because_of"
                    rules={[{ required: true, message: 'กรุณากรอกเหตุผลในการลาออกจากหอพัก !' }]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    label="สถานที่พัก"
                    name="accommodation "
                    rules={[
                      {
                        required: true,
                        message: "กรุณาเลือกสถานที่ที่ไปพักหลังลาออกจากหอพัก !",
                      },
                    ]}>
                    <Radio.Group>
                      <Radio value="rest_home"> บ้านพัก </Radio>
                      <Radio value="dormitory_outside"> หอพักภายนอกมหาวิทยาลัย </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>

                <Divider style={{ borderWidth: "2px", width: "5%" }} />
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  ที่อยู่ที่ท่านพัก
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="บ้านเลขที่" 
                  name="house_no" 
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="หมู่ที่" 
                  name="village_no" 
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label=":ซอย" 
                  name="allay" 
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="ถนน" 
                  name="road" 
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="ตำบล/แขวง" 
                  name="sub_district" 
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกตำบล/แขวง !",
                    },
                  ]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="อำเภอ/เขต" 
                  name="district" 
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกอำเภอ/เขต !",
                    },
                  ]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="จังหวัด" 
                  name="province" 
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกจังหวัด !",
                    },
                  ]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="ไปรษณีย์" 
                  name="post_code"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item 
                  label="เบอร์โทรศัพท์" 
                  name="phone_number"
                  >
                    <Input />
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
        </div>
      </div >
    </>
  );
}