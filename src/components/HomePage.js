import React from "react";
import Header from "../commons/AdminHeader";
import { Row, Col, Input, Button } from "antd";
import { SaveOutlined, EditOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function HomePage() {
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [visibleSave, setVisibleSave] = React.useState(true);

  const onEdit = () => {
    setVisibleEdit(true);
    setVisibleSave(false);
  };

  const onSave = () => {
    setVisibleSave(true);
    setVisibleEdit(false);
  };

  return (
    <div className="App">
      <Header />
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={12}>
          <Input placeholder="Enter Logo URL" style={{ width: "98%" }} />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Input placeholder="Enter Avatar URL" style={{ width: "98%" }} />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={24}>
          <Input placeholder="Enter Punchline" />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={24}>
          <TextArea
            placeholder="Enter Content"
            autoSize={{ minRows: 20, maxRows: 20 }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Input placeholder="Enter Copyrights Text" />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<EditOutlined />}
            onClick={onEdit}
            disabled={visibleEdit}
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<SaveOutlined />}
            onClick={onSave}
            disabled={visibleSave}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
