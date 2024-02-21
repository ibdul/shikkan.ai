import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Shikkan.ai - Empowering Health Through AI Analysis</title>
        <meta
          name="description"
          content="Our AI-driven platform harnesses the power of machine learning to analyze MRI scans of the brain, kidney, and abdomen with unparalleled accuracy. Within moments, we provide comprehensive insights into potential tumors, hemorrhages, and other critical health indicators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="what we do"
        title="Unlocking Insights, Transforming Lives">
        Our AI-driven platform harnesses the power of machine learning to analyze MRI scans of the brain, kidney, and abdomen with unparalleled accuracy. Within moments, we provide comprehensive insights into potential tumors, hemorrhages, and other critical health indicators.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a review"
        title="See what a happy user thinks of us">
        A picture is worth more than a thousand words they say, a video is definitely worth even more than.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Get a feel of what our users think about us
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQs" title="Frequently Asked Questions">These are questions we frequently get.</SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
