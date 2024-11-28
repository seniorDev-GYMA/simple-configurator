import { Button, Dropdown, Input, Radio, Select, Space, message } from "antd";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

export default ({ customStyle, setStyle }) => {
  const changeTheme = (key, value) => {
    var newStyle = { ...customStyle };
    var joinStyle = Object.assign(newStyle, { [key]: value });
    setStyle(joinStyle);
  };
  const changeState = (top, bottom) => {
    const newObj = { ["topText"]: top, ["bottomText"]: bottom };
    setStyle(newObj);
  };
  const handeButtonClick = (e) => {
    // e.preventDefault();
    const { key } = e;
    if (key === "1") {
      changeState("S.Etoo", "9");
    } else if (key === "2") {
      changeState("Messi", "10");
    } else if (key === "3") {
      changeState("D.Maradona", "11");
    }
    // message.info(`Click on menu: ${key}`);
  };

  const items = [
    {
      label: "9 S.Etoo",
      key: 1,
      onClick: handeButtonClick,
    },
    {
      label: "10 L.Messi",
      key: 2,
      onClick: handeButtonClick,
    },
    {
      label: "11 D.Maradona",
      key: 3,
      onClick: handeButtonClick,
    },
    {
      type: "divider",
    },
    {
      label: "10 Ronaldinho",
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
              disabled
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
              disabled
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
