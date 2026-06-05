"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scaleDimensions = (): [number, number] =>
    isMobile ? [0.8, 1] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -100]);

  return (
    <div
      className="relative flex h-[58rem] items-center justify-center p-2 md:h-[72rem] md:p-12"
      ref={containerRef}
    >
      <div className="relative w-full py-10 md:py-24" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto -mt-8 h-[26rem] w-full max-w-5xl rounded-[24px] border border-white/10 bg-surface p-2 shadow-2xl md:h-[40rem] md:rounded-[30px] md:p-4"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-bg">
        {children}
      </div>
    </motion.div>
  );
};
