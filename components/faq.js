import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is my data secure with Shikkan.ai?",
    answer: "Yes, absolutely. We prioritize the security and privacy of your data. All information and MRI scans uploaded to Shikkan.ai are encrypted and stored securely. We adhere to strict privacy protocols and comply with relevant data protection regulations.",
  },
  {
    question: "What types of MRI scans does Shikkan.ai analyze?",
    answer: "Shikkan.ai analyzes MRI scans of the brain, kidney, and abdomen. Our advanced machine learning models can detect various abnormalities and health indicators in these areas, providing comprehensive insights into your health status.",
  },
  {
    question: "How long does it take to receive analysis results?",
    answer:
      "The analysis process typically takes just a few moments. Once you upload your MRI scan, our machine learning algorithms work swiftly to analyze the data and generate detailed results. You'll receive your analysis report promptly via our platform.",
  },
  {
    question: "Can I trust the accuracy of the analysis results?",
    answer:
      "Yes, you can trust the accuracy of the analysis results provided by Shikkan.ai. Our machine learning models are trained on vast amounts of data and undergo rigorous testing to ensure precision and reliability. While no analysis is perfect, we strive for the highest level of accuracy in our assessments.",
  },
  {
    question: "Are the recommendations provided by Shikkan.ai personalized?",
    answer: "Yes, indeed. Shikkan.ai offers personalized recommendations based on the analysis findings of your MRI scan. Our AI chatbot is available to provide tailored advice and guidance, taking into account your unique health profile and concerns."
  },
  {
    question:"Can I discuss the analysis results with a healthcare professional?",
    answer:"Absolutely. While Shikkan.ai provides valuable insights and recommendations, we always encourage users to consult with qualified healthcare professionals for further evaluation and guidance. Our platform complements traditional healthcare services and is not a substitute for medical advice."
  },
  {
    question:"How can I contact Shikkan.ai for support or inquiries?",
    answer:"You can reach out to our support team via email at support@shikkan.ai. We're here to assist you with any questions, concerns, or technical issues you may encounter. Additionally, you can use the contact form on our website to submit inquiries, and we'll respond promptly."
  },
];

export default Faq;
