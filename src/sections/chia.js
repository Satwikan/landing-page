/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import chiaLogo from "assets/images/icons/chia-logo.png";
import chiaCalc from "assets/images/icons/chia-calc.png";
import chiaLeaf from "assets/images/icons/chia-leaf.png";

const data = [
  {
    id: 1,
    icon: chiaLogo,
    title: "Chia Price",
    description: `Get latest Chia price chart`,
    clickLink: `https://coinmarketcap.com/currencies/chia-network/`,
  },
  {
    id: 2,
    icon: chiaCalc,
    title: "Chia Calculator",
    description: `How much can I earn farming Chia (XCH)?`,
    clickLink: `https://chiacalculator.com/`,
  },
  {
    id: 2,
    icon: chiaLeaf,
    title: "Download Chia",
    description: `Get chia and start farming`,
    clickLink: `https://www.chia.net/`,
  },
];

const Chia = () => {
  return (
    <Box as="section" id="chia" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Chia"
          description="Chia is our first priority. Our official chia pool is now live."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Chia;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    display: "grid",
    justifyContent: "center",
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
