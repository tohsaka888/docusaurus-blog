import React, { useContext } from "react";
import { animated } from "react-spring";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PageContext } from "../Context/PageContext";

function DownIcon() {
  const { setPage } = useContext(PageContext);
  return (
    <animated.div
      onClick={() => setPage((page) => (page + 1) % 3)}
      style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        marginLeft: "-25px",
        cursor: "pointer",
        border: "1px solid #cecece",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BsChevronDoubleRight size={30} style={{ cursor: "pointer" }} />
    </animated.div>
  );
}

export default DownIcon;
