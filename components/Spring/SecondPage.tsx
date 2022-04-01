import useScreenSize from "@site/hooks/useScreenSize";
import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
import { CSSProperties } from "styled-components";
import { PageContext } from "../Context/PageContext";

type Props = {
  children: React.ReactNode;
};

function SecondPage({ children }: Props) {
  const { page } = useContext(PageContext);
  const { width, height } = useScreenSize();
  const styles = useSpring<CSSProperties>({
    from: {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0,
      display: "none",
    },
    to: {
      transform:
        page === 1 ? "translate3d(0%, 0, 0)" : "translate3d(100%, 0, 0)",
      opacity: page === 1 ? 1 : 0,
      display: page === 1 ? "block" : "none",
    },
    delay: 500,
  });

  return (
    <animated.div
      style={{
        ...styles,
        width: width,
        height: +height - 60,
      }}
    >
      SecondPage
    </animated.div>
  );
}

export default SecondPage;
