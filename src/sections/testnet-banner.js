/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Box, Image } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import ServiceData from "components/cards/service-data";
import farming from "assets/images/farming.png";
import { useMediaQuery } from "react-responsive";
import animation from "assets/css/animation.module.css";

const data = [
  {
    id: 1,
    title: "Net Space",
    description: `2.58 TiB`,
  },
  {
    id: 2,
    title: "Pool Space",
    description: `0.35 TiB`,
  },
  {
    id: 3,
    title: "forms online",
    description: `8`,
  },
  {
    id: 4,
    title: "Time to Win",
    description: `2 minutes`,
  },
];

const TestNetBanner = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 900px)",
  });
  return (
    <Box as="section" id="chia" sx={styles.section}>
      <SectionHeading
        sx={styles.heading}
        title="Indian Pool"
        description="Join forces to take back control of predictable Chia farming winnings"
        classes={animation["tracking-in-contract-bck"]}
      />
      <Box sx={styles.dataShow}>
        {data?.map((item) => (
          <ServiceData key={item.id} item={item} />
        ))}
      </Box>
      {!isTabletOrMobileDevice ? (
        <Image src={farming} alt="miner" style={styles.headImage} />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default TestNetBanner;

const styles = {
  section: {
    display: "grid",
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: "13vh",
    height: "",
    justifyContent: "center",
  },
  heading: {
    gridColumn: "1 / 3",
  },
  dataShow: {
    gridRow: " 2 / 4",
    gridColumn: "1 / 3",
    gap: 5,
    display: "grid",
    justifyContent: "center",
    gridTemplate: "150px / repeat(2, minmax(20vw, 1fr))",
  },
  headImage: {
    aspectRatio: "default",
    height: "90%",
    gridRow: "1 / 4",
    gridColumn: "3 / 4",
  },
};
