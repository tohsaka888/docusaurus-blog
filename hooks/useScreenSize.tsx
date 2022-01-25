import React, { useCallback, useEffect, useReducer, useState } from "react";

type SizeProps = {
  width: number;
  height: number;
};

function useScreenSize() {
  const [size, setSize] = useState<SizeProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const resizeEvent = useCallback(() => {
    requestAnimationFrame(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);
  return size;
}

export default useScreenSize;
