import {
  Button,
  Card,
  Form,
  Input,
  message,
  Flex,
  Divider,
  Row,
  Col,
  InputNumber,
  DatePicker,
  Select,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import "./index.css";

export default function index() {
  return (
    <>
      <div className='title-1-flex'>
        <div className='text-1'>แจ้งซ่อม</div>
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
          </div>



        <Form layout="vertical">
          <Row gutter={16}>
          <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <Form.Item
                label="ค่าหอพัก"
                name="	Dormยayment "
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกหัวข้อการขอรับบริการ !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <Form.Item
                label="รายละเอียดการขอรับบริการ"
                name="detail"
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

            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <Form.Item
                label="รายละเอียดสถานที่รับบริการ"
                name="location_detail"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกรายละเอียดสถานที่รับบริการ !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
              <Form.Item
                label="หมายเหตุ"
                name="remark"
              >
                <Input />
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