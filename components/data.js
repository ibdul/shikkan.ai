import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What We Offer",
  desc: "Shikkan.ai provides you with a lot of tools to help you understand and manage your health. Some of these tools include",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personalized Recommendations, Tailored Support",
      desc: "Beyond analysis, we offer personalized recommendations and support to empower you on your health journey. Our AI chatbot is here to guide you, providing actionable advice to control and prevent potential health issues.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Experience Peace of Mind",
      desc: "With Shikkan.ai, you're not just receiving results—you're gaining peace of mind. Trust in our expertise and technology to navigate your health concerns with confidence.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "How It Works",
  desc: "At Shikkan.ai, we've simplified the process of obtaining vital insights from your MRI scans. Here's how it works:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "1. Upload Your Scan",
      desc: "Begin by selecting the type of MRI scan you'd like to analyze: Brain, Kidney, or Abdomen. Then, simply upload your scan using our secure and user-friendly interface. Rest assured, your data is handled with the utmost care and confidentiality.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "2. AI Analysis in Action",
      desc: "Once your scan is uploaded, our state-of-the-art machine learning models spring into action. They meticulously analyze every detail of your scan, detecting even the most subtle indicators of potential health issues, such as tumors or hemorrhages.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "3. Receive Detailed Results",
      desc: "Within moments, you'll receive a detailed report outlining the analysis findings. From probabilities of specific conditions to visual representations of your scan, we provide comprehensive insights to help you understand your health status.",
      icon: <SunIcon />,
    },
    {
      title: "4. Personalized Recommendations",
      desc: "But we don't stop there. Shikkan.ai goes beyond analysis to offer personalized recommendations tailored to your unique health profile. Our AI chatbot is on hand to provide expert advice and guidance, empowering you to take proactive steps towards better health.",
      icon: <SunIcon />,
    },
    {
      title: "5. Take Control of Your Health",
      desc: "Armed with valuable insights and actionable recommendations, you're equipped to make informed decisions about your health. Whether it's preventive measures or further consultation, Shikkan.ai is your partner in health management.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
