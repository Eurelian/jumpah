import { Box, Circle, Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React from "react";

type Props = {};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Timer = (props: Props) => {
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (90 - 100)));

  const duration = 10;
  const delay = 0.5;

  const transition = {
    duration: duration,
    delay: delay,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };
  return (
    <Box>
      {/* <Circle size="500" bg="red" position="relative">
        <Circle size="5" bg="teal.500" position="absolute" top="1"></Circle> */}
      <svg
        viewBox="0 0 100 100"
        width={50}
        height={50}
        style={{
          position: "absolute",
          transform: "rotate(-90deg)",
          overflow: "visible",
          marginLeft: -50,
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={6}
          stroke={"#fff"}
          fill="transparent"
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate={"show"}
        />
      </svg>
      {/* <Circle size="445" bg="tomato">
          <Text fontSize="8xl">02:40</Text>
        </Circle>
      </Circle> */}
    </Box>
  );
};

export default Timer;
