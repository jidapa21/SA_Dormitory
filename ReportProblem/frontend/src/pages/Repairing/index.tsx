import {
  Button,
  Card,
  Form,
  Input,
  message,
  Flex,
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
      <div className='container-1'>
        <div className='title-1-flex'>
          <div className='text-1'>แจ้งซ่อม</div>
          <div className='status-text'>สถานะ</div>
          <div className='status-textbox'>รอดำเนินการ</div>
        </div>
      </div>
      <br />
      <div className="full-width-line"></div>
      <br />
      <div className="background">
        <Row align={"middle"} justify={"center"}>
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <Card title="เนื้อหาตรงกลาง">
              <p>ผู้รับบริการ</p>
              <p>B191563</p>
              <p>มนัสเต</p>
              <p>สวัสดิกะ</p>
            </Card>
            <div className='name-text'>ผู้รับบริการ</div>
            <div className='name-text'>B191563</div>
            <div className='name-text'>มนัสเต</div>
            <div className='name-text'>สวัสดิกะ</div>
          </Col>
        </Row>
        <Row align={"middle"} justify={"center"}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className='name-text'>อาคาร</div>
            <div className='name-text'>4</div>
            <div className='name-text'>ห้อง</div>
            <div className='name-text'>414A</div>
          </Col>
        </Row>

        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <Form.Item
            label="หัวข้อการขอรับบริการ"
            name="subject"
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
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <Form.Item
            label="รายละเอียดการขอรับบริการ"
            name="detail "
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
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <Form.Item
            label="รายละเอียดสถานที่รับบริการ"
            name="location_detail "
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
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <Form.Item
            label="หมายเหตุ"
            name="remark "
          >
            <Input />
          </Form.Item>
        </Col>
      </div >

      <div className="container-2">
        gggg
      </div>
    </>
  );
}