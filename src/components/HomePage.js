import React from "react";
import Header from "../commons/AdminHeader";
import { Row, Col, Input, Button } from "antd";
import { SaveOutlined, EditOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function HomePage() {
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [visibleSave, setVisibleSave] = React.useState(true);
  const [editModeOn, setEditMode] = React.useState(true);

  const onEdit = () => {
    setEditMode(!editModeOn);
    setVisibleEdit(true);
    setVisibleSave(false);
  };

  const onSave = () => {
    setEditMode(!editModeOn);
    setVisibleSave(true);
    setVisibleEdit(false);
  };

  return (
    <div className="App">
      <Header />
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={12}>
          <Input
            placeholder="Enter Logo URL"
            style={{ width: "98%" }}
            disabled={editModeOn}
          />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Input
            placeholder="Enter Avatar URL"
            style={{ width: "98%" }}
            disabled={editModeOn}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={24}>
          <Input placeholder="Enter Punchline" disabled={editModeOn} />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Col span={24}>
          <TextArea
            placeholder="Enter Content"
            autoSize={{ minRows: 20, maxRows: 20 }}
            disabled={editModeOn}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Input placeholder="Enter Copyrights Text" disabled={editModeOn} />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {editModeOn && (
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
          )}
          {!editModeOn && (
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
          )}
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
