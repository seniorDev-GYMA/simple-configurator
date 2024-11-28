import { Button, Dropdown, Input, Radio, Select, Space } from "antd";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

export default ({ customStyle, setStyle }) => {
  const changeTheme = (key, value) => {
    var newStyle = { ...customStyle };
    var joinStyle = Object.assign(newStyle, { [key]: value });
    setStyle(joinStyle);
  };
  const items = [
    {
      label: "1st menu item",
      key: 1,
    },
    {
      label: "2nd menu item",
      key: 2,
    },
    {
      label: "3rd menu item",
      key: 3,
    },
    {
      type: "divider",
    },
    {
      label: "4rd menu item",
      key: 4,
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div className="textinputFlex">
        <p className="w100">Selectionez un jouer</p>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button style={{ width: "100%" }}>
            <Space>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <div className="textinputFlex" style={{ width: "30%" }}>
          <p className="w100">Numéro</p>
          <p>
            <Input
              style={{
                borderRadius: "8px",
              }}
              type="number"
              placeholder="Numero"
              // onChange={(event) =>
              //   changeTheme("bottomText", event.target.value)
              // }
            />
          </p>
        </div>
        <div className="textinputFlex" style={{ width: "70%" }}>
          <p className="w100">Nom</p>
          <p>
            <Input
              style={{
                borderRadius: "8px",
              }}
              placeholder="Votre noms"
              // onChange={(event) => changeTheme("topText", event.target.value)}
            />
          </p>
        </div>
      </div>
      {/* <div className="textinputFlex">
        <p className="w100">Size</p>
        <div>
          <Select
            defaultValue={"M"}
            style={{ width: 120 }}
            onChange={(value) => {
              changeTheme("size", value);
            }}
            options={[
              { value: "XS", label: "XS" },
              { value: "S", label: "S" },
              { value: "M", label: "M" },
              { value: "L", label: "L" },
              { value: "XL", label: "XL" },
            ]}
          />
        </div>
      </div> */}
      {/* <div className="textinputFlex">
        <p className="w100">Circle Color</p>
        <div>
          <Radio.Group
            defaultValue={"a"}
            buttonStyle="solid"
            onChange={(value) => {
              changeTheme("backColor", value.target.value);
            }}
          >
            <Radio.Button
              value={"red"}
              style={{ background: "red" }}
            ></Radio.Button>
            <Radio.Button
              value={"blue"}
              style={{ background: "blue" }}
            ></Radio.Button>
            <Radio.Button
              value={"green"}
              style={{ background: "green" }}
            ></Radio.Button>
            <Radio.Button
              value={"orange"}
              style={{ background: "orange" }}
            ></Radio.Button>
          </Radio.Group>
        </div>
      </div> */}
    </div>
  );
};
