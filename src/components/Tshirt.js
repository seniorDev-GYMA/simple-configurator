import React, { useContext, useState } from "react";
import { TwitterPicker } from "react-color";
import Theme1 from "./Theme1";
import Theme2 from "./Theme2";
import Theme3 from "./Theme3";
import { Input, Button, message } from "antd";
import { ordersContext } from "../context/ordersContext";
import domtoimage from "dom-to-image";
import axios from "axios";
import { useLocation } from "@reach/router";

// const addidaslogo =
//   "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png";
// const barcalogo =
//   "https://www.freepnglogos.com/uploads/fc-barcelona-png-logo/fc-barcelona-png-logo-0.png";

const tshirtImages = [
  require("../images/outter.png").default,
  "https://staging.fif-civ.gyma-agency.com/wp-content/uploads/2024/10/777187_01.png",
  "https://staging.fif-civ.gyma-agency.com/wp-content/uploads/2024/10/777187_01_bv.png",
];
export default ({
  themeNumber,
  theme1Style,
  setTheme1Style,
  theme2Style,
  setTheme2Style,
  theme3Style,
  setTheme3Style,
}) => {
  const [color, setColor] = useState("#000EE0");
  const [selectedTab, setSelectedTab] = useState(0);
  const [orderFor, setOrderFor] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      productId: params.get("product_id"),
    };
  };
  const { productId } = getQueryParams();

  const context = useContext(ordersContext);

  const getImage = () => {
    var node = document.getElementById("my-node");
    return domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        // console.log("dataurl :", dataUrl);
        return img.src;
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
        return "No Img";
      });
  };
  const onSubmit = async () => {
    // if (!orderFor) {
    //   setError("OrderFor is required");
    //   return;
    // }
    // console.log("context", context);
    const productdata = {
      product_id: productId,
      quantity: 1,
    };
    try {
      const response = await axios.post(
        "https://staging.fif-civ.gyma-agency.com/wp-json/custom/v1/add-to-cart",
        productdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("product added to cart:", response.data);
    } catch (error) {
      console.error("error adding product to cart", error);
    }

    const image = await getImage();
    // console.log("image", image);
    context.addOrder({
      size: "XL",
      image,
      orderFor,
    });
    setError("");
  };
  // console.log("numberTheme :", themeNumber);
  // console.log("selectedTab :", selectedTab);
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {tshirtImages.map((_, index) => (
          <div
            key={index}
            style={{
              padding: "20px 30px",
              backgroundColor:
                selectedTab === index ? "rgba(0, 0, 0, 0.5)" : "transparent",
              color: "transparent",
              cursor: "pointer",
              backgroundImage: `url(${tshirtImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "80px",
              height: "100%",
              flex: "1",
              textAlign: "center",
              borderRadius: "12px",
              border:
                selectedTab === index
                  ? "2px solid orange"
                  : "2px solid transparent",
            }}
            onClick={() => setSelectedTab(index)}
          >
            Tab {index + 1}
          </div>
        ))}
      </div>
      <div>
        <div
          id="my-node"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Theme10verlay
            customStyle={
              selectedTab === 0
                ? theme1Style
                : selectedTab === 1
                ? theme2Style
                : selectedTab === 2
                ? theme3Style
                : {}
            }
            setStyle={
              selectedTab === 0
                ? setTheme1Style
                : selectedTab === 1
                ? setTheme2Style
                : selectedTab === 2
                ? setTheme3Style
                : () => {}
            }
            selectedTab={selectedTab}
          />

          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                height: 350,
                width: 350,
                position: "relative",
              }}
            >
              <img
                src={tshirtImages[selectedTab]}
                alt="t-shirt"
                style={{ position: "absolute", height: "100%", opacity: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(211, 211, 211, 0.3)",
          padding: "20px",
          borderRadius: "10px",
          width: "max-content",
        }}
      >
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            paddingBottom: "10px",
            letterSpacing: "2px",
          }}
        >
          Personalisez votre maillot
        </h1>
        {selectedTab === 0 && (
          <Theme1 customStyle={theme1Style} setStyle={setTheme1Style} />
        )}
        {selectedTab === 1 && (
          <Theme2 customStyle={theme2Style} setStyle={setTheme2Style} />
        )}
        {selectedTab === 2 && (
          <Theme3 customStyle={theme3Style} setStyle={setTheme3Style} />
        )}

        <div style={{ textAlign: "center" }}>
          <hr color="black" style={{ marginTop: 20, marginBottom: 20 }} />
          <Button
            type="default"
            onClick={onSubmit}
            style={{
              background: "orange",
              borderRadius: "10px",
              color: "white",
              fontWeight: 400,
              width: "80%",
              padding: "20px 20px",
            }}
          >
            Ajouter au panier
          </Button>
        </div>
      </div>

      {/* <div style={{ marginTop: 20 }}>
        <TwitterPicker onChange={(color) => setColor(color.hex)} />
      </div> */}
    </div>
  );
};

const Theme10verlay = ({ customStyle, setStyle, selectedTab }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        marginTop: 15,
      }}
    >
      <div
        style={{
          // background: customStyle.backColor ? customStyle.backColor : "orange",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: 90,
          margin: "auto",
          marginTop: 40,
          borderRadius: 5,
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 20,
            width: "100%",
            color: "white",
            letterSpacing: "2px",
          }}
          className="font1"
        >
          {selectedTab !== 1
            ? customStyle.topText
              ? customStyle.topText
              : "Didier.D"
            : ""}
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: selectedTab === 1 ? 40 : 80,
            position: "absolute",
            marginBottom: 10,
            top: 50,
            width: "100%",
            height: "50px",
            color: "white",
          }}
          className="font1"
        >
          {customStyle.bottomText ? customStyle.bottomText : "10"}
        </div>
      </div>
    </div>
  );
};
