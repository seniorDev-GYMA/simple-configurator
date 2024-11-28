import { Dropdown, Menu, Input, Button, message, Radio, Select } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Tshirt from "./Tshirt";
import Theme1 from "./Theme1";
import Theme2 from "./Theme2";
import Theme3 from "./Theme3";
import domtoimage from "dom-to-image";
import { useContext } from "react";
import { ordersContext } from "../context/ordersContext";

export default ({ setThemeNumber, themeNumber, addOrder }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [theme1Style, setTheme1Style] = useState({});
  const [theme2Style, setTheme2Style] = useState({});
  const [theme3Style, setTheme3Style] = useState({});
  const [theme4Style, setTheme4Style] = useState({});
  const [error, setError] = useState("");
  const [orderFor, setOrderFor] = useState("");
  const [image, setImage] = useState("");
  const handeButtonClick = (e) => {
    // e.preventDefault();
    const { key } = e;
    setSelectedTheme(Number(key));
    console.log("event: ", e);
    message.info(`Click on menu: ${key}`);
  };
  const handeSecondButtonClick = (e) => {
    // e.preventDefault();
    const { key } = e;
    setImage(require("../images/inner.png").default);
    message.info(`Click on menu: ${key}`);
  };
  const items = [
    {
      label: "1st menu item",
      key: 1,
      onClick: handeButtonClick,
    },
    {
      label: "2nd menu item",
      key: 2,
      onClick: handeSecondButtonClick,
    },
    {
      label: "3rd menu item",
      key: 3,
      onClick: handeButtonClick,
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
      onClick: handeButtonClick,
    },
  ];

  const context = useContext(ordersContext);
  console.log("contextz", context);

  const onSubmit = async () => {
    if (!orderFor) {
      setError("OrderFor is required");
      return;
    }
    console.log("context", context);
    const image = await getImage();
    console.log("image", image);
    context.addOrder({
      size: "XL",
      image,
      orderFor,
    });
    setError("");
  };

  const getImage = () => {
    var node = document.getElementById("my-node");

    return domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log("dataurl :", dataUrl);
        return img.src;
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
        return "No Img";
      });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            boxShadow: "1px 1px 1px 1px",
            borderRadius: 10,
            background: "white",
            padding: 20,
            margin: 10,
          }}
        >
          <Tshirt
            themeNumber={selectedTheme}
            image={image}
            theme1Style={theme1Style}
            theme2Style={theme2Style}
            theme3Style={theme3Style}
            setTheme1Style={setTheme1Style}
            setTheme2Style={setTheme2Style}
            setTheme3Style={setTheme3Style}
          />
        </div>
        <div style={{ margin: 10, width: 400, marginTop: 30 }}>
          {/* <div style={{ fontWeight: 600, color: "blue" }}>
            Select Theme
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{
                  background: "white",
                  color: "blue",
                  padding: 10,
                  marginLeft: 15,
                }}
              >
                Pick a theme here <DownOutlined />
              </a>
            </Dropdown>
          </div> */}
          {/* <hr color="black" style={{ marginTop: 20 }} /> */}
          {/* {selectedTheme === 1 && (
            <Theme1 customStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {selectedTheme === 2 && (
            <Theme2 customStyle={theme2Style} setStyle={setTheme2Style} />
          )}
          {selectedTheme === 3 && (
            <Theme3 customStyle={theme3Style} setStyle={setTheme3Style} />
          )} */}
          {/* {selectedTheme === 4 && (<Theme4 customStyle={theme4Style} setStyle={setTheme4Style} />)} */}
          {/* {selectedTheme} */}

          {/* <div>
            <div className="textInputFlex">
              <p className="w100">Order for</p>
              <p>
                <Input
                  placeholder="Wilfried"
                  onChange={(event) => setOrderFor(event.target.value)}
                />
              </p>
            </div>
            <hr color="black" style={{ marginTop: 20, marginBottom: 20 }} />
            <Button
              type="default"
              onClick={onSubmit}
              style={{
                background: "green",
                border: "1px solid green",
                color: "white",
                fontWeight: 400,
              }}
            >
              Submit
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
