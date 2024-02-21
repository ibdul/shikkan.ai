import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Empowering Health Through Advanced AI Analysis
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">Welcome to Shikkan.ai, where cutting-edge technology meets compassionate care.</p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/scan"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get started
              </a>
              <a
                href="#learn-more"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">Learn More</a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
