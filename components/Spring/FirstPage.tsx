import useScreenSize from "@site/hooks/useScreenSize";
import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
import { CSSProperties } from "styled-components";
import { PageContext } from "../Context/PageContext";

type Props = {
  children: React.ReactNode;
};

const showPage = (page: number): CSSProperties => {
  switch (page) {
    case 0:
      return {
        transform: "translate3d(0px, 0, 0)",
        opacity: 1,
        display: "block",
      };
    case 1:
      return {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
      };
    case 2:
      return {
        display: "none",
      };
  }
};

function FirstPage({ children }: Props) {
  const { width, height } = useScreenSize();
  const { page } = useContext(PageContext);
  const styles = useSpring<CSSProperties>({
    from: {
      display: "block",
      transform: "translate3d(0, 0, 0)",
      opacity: 1,
    },
    to: async (next) => {
      await next(showPage(page));
      if (page !== 0) {
        await next({ display: "none" });
      }
    },
  });
  return (
    <animated.div
      style={{
        ...styles,
        position: "relative",
        widows: width,
        height: +height - 60,
        backgroundColor: "transparent",
      }}
    >
      {children}
    </animated.div>
  );
}

export default FirstPage;
