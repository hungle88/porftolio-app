'use client';
import React, { useEffect } from 'react';
// @ts-expect-error: AOS does not provide TypeScript declarations.
import AOS from "aos";
import "aos/dist/aos.css";

function AnimationLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initAOS = async () => {
      // @ts-expect-error: The module is untyped.
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return <>{children}</>;
}

export default AnimationLayout;
