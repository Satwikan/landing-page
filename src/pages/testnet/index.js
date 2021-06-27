import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import TestNetBanner from 'sections/testnet-banner';
import ShowData from 'sections/table';
import SearchBar from 'sections/search-bar';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Indian Pool"
          description="A cryptocurrency pool of the Indians, by the Indians and for the Indians"
        />
        <TestNetBanner />
        <br/>
        <SearchBar />
        <br/>
        <ShowData/>
        {/* <RoadMap/> */}
        {/* <Testimonials /> */}
        {/* <OurTeam /> */}
        {/* <OtherServices /> */}
        {/* <WhyUs /> */}
        {/* <Blog /> */}
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
