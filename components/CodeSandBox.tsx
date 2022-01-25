import React, { ReactNode } from "react";
import useThemeContext from "@theme/hooks/useThemeContext";

type Props = {
  url: string;
};

function CodeSandBox({ url }: Props) {
  const { isDarkTheme } = useThemeContext();
  const theme = isDarkTheme ? "dark" : "light";
  return (
    <iframe
      src={url + `theme=${theme}`}
      style={{
        width: "100%",
        height: "600px",
        border: 0,
        overflow: "hidden",
        boxShadow: "var(--blog-item-shadow)",
        margin: "24px 0px",
      }}
      title="thirsty-darkness-bws3w"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}

export default CodeSandBox;
