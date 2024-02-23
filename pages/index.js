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
        pretitle="A Quick Demo"
        title="Learn About Us in a Quick Video">
        A picture is worth more than a thousand words they say, a video is definitely worth even more than.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQs" title="Frequently Asked Questions">These are questions we frequently get.</SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}

export default Home;
