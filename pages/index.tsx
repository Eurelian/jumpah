import { Box, Center } from "@chakra-ui/react";
import type { NextPage } from "next";

import Image from "next/image";
import Timer from "../components/timer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Center>
      <Timer />
    </Center>
  );
};

export default Home;
