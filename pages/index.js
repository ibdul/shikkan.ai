import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="learn-more">
      <Benefits data={benefitOne} />
      </div>
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
    </>
  );
}

export default Home;
