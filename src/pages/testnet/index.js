import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import TestNetBanner from "sections/testnet-banner";
import ShowData from "sections/table";
import SearchBar from "sections/search-bar";
import illustration from "assets/images/banner-crypto.png";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#fff7f1" }}>
        <Layout>
          <SEO
            title="Indian Pool"
            description="A cryptocurrency pool of the Indians, by the Indians and for the Indians"
          />
          <TestNetBanner />
          <br />
          <div
            style={{
              backgroundImage: `url(${illustration})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "#fff7f1",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: `calc(100vw + 48px)`,
              margin: -24,
              padding: 24,
              opacity: 0.9,
            }}
          >
            <SearchBar />
            <br />
            <ShowData />
          </div>
          {/* <RoadMap/> */}
          {/* <Testimonials /> */}
          {/* <OurTeam /> */}
          {/* <OtherServices /> */}
          {/* <WhyUs /> */}
          {/* <Blog /> */}
          {/* <SubscribeUs /> */}
        </Layout>
      </div>
    </ThemeProvider>
  );
}
