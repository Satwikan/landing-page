/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Heading } from 'theme-ui';

const ServiceData = ({ item }) => {
  return (
    <Box sx={styles.serviceItem}>
      <Box as="figure" sx={styles.figure}>
    </Box>
      <Box sx={styles.content}>
        <Text as="p">{item?.description}</Text>
        <Heading as="h3">{item?.title}</Heading>
        {/* {item?.moreLink && <LearnMore path={item?.moreLink} />}
        {item?.clickLink && <ClickHere path={item?.clickLink} />} */}
      </Box>
    </Box>
  );
};

export default ServiceData;

const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%'],
    },
  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: "1rem",
      lineHeight: [1.68],
    },
    p: {
      fontSize: "1.5rem",
      lineHeight: [1.88],
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
