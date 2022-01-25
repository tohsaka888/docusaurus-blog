import React, { useCallback, useEffect, useReducer, useState } from "react";

type SizeProps = {
  width: number | string;
  height: number | string;
};

function useScreenSize() {
  const [size, setSize] = useState<SizeProps>({
    width: "100%",
    height: "92vh",
  });
  const resizeEvent = useCallback(() => {
    requestAnimationFrame(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);
  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", resizeEvent);
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);
  return size;
}

export default useScreenSize;
