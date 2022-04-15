import type { ReactNode } from "react";
import Head from "next/head";
import Meta from "./meta";
import { Box } from "@chakra-ui/react";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Box
        width="100vw"
        height="100vh"
        bgGradient="radial(gray.900, gray.800)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
