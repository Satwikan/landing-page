/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";

const SectionHeading = ({ title, description, classes, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Heading sx={styles.title} className={classes}>
        {title}
      </Heading>
      <Text as="p" sx={styles.description} className={classes}>
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 660,
    margin: ["0 auto 60px"],
  },
  title: {
    fontFamily: "heading",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ["-0.5px", null, null, null, null, null, "-1px"],
    img: {
      ml: ["15px"],
      position: "relative",
      top: "8px",
    },
  },
  description: {
    color: "heading",
    fontSize: "1.5rem",
    maxWidth: ["none", "none", "none", "none", 490],
  },
};
