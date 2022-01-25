import React, { ReactNode, useCallback } from "react";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import WAVES from "vanta/dist/vanta.waves.min";
import CLOUNDS from "vanta/dist/vanta.clouds.min";
import FOG from "vanta/dist/vanta.fog.min";
import RINGS from "vanta/dist/vanta.rings.min";
import useScreenSize from "@site/hooks/useScreenSize";

type Props = {
  children: ReactNode;
};

const BIRDSConfig = {
  colorMode: "variance",
  wingSpan: 25.0,
  separation: 50.0,
  alignment: 35.0,
  cohesion: 50.0,
};

const commonConfig = {
  THREE: THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundAlpha: 0.0,
};

const vantaArray = [BIRDS, RINGS];

export default function Background({ children }: Props) {
  const vantaRef = useRef<HTMLDivElement>();
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaIndexRef = useRef<number>(
    Math.floor(Math.random() * vantaArray.length)
  );
  const { width, height } = useScreenSize();
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        vantaArray[vantaIndexRef.current](
          vantaIndexRef.current
            ? {
                el: vantaRef.current,
                ...commonConfig,
              }
            : {
                el: vantaRef.current,
                ...commonConfig,
                ...BIRDSConfig,
              }
        )
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      style={{ height: height - 60, width: "100%" }}
      ref={(refs) => {
        if (refs) {
          vantaRef.current = refs;
        }
      }}
    >
      {children}
    </div>
  );
}
