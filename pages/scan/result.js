import Container from "../../components/container";
import {positive_feedback, negative_feedback} from "../../components/data";
import Benefits from "../../components/benefits";
import { useEffect, useState } from "react";
import {useSearchParams} from "next/navigation"

const Scan = () => {
  const [is_positive, setIsPositive] = useState(false)
  const [scan_type, setScanType] = useState()
  const search_params = useSearchParams()

  useEffect(()=>{
    setIsPositive(search_params.get("result") == "true")
    setScanType(search_params.get("scan_type"))
  },[])

  return (
    <>
      <Container className="">
        <div className="flex items-center w-full">
          <div className="mx-auto max-w-2xl mb-8 text-center">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white capitalize">
              See the result of our analysis
            </h1>
            <p className="py-5 leading-normal text-gray-500 dark:text-gray-300">
              Congratulations! You've taken the first step towards understanding your health status. Below, you'll find the results of the analysis of your MRI scan.
            </p>
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Analysis Findings:
              </h3>
              {is_positive?(
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Based on our advanced AI analysis, your MRI scan indicates the presence of [Ailment]. While this news may be concerning, it's important to remember that early detection is key to effective management and treatment.
              </p>

              ):(

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Great news! Your MRI scan does not indicate any significant abnormalities or health concerns. However, it's important to continue prioritizing your health and well-being through proactive measures.
              </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center w-full lg:w-1/2 `}>
        </div>
      </Container>

              {is_positive?(
      <Benefits data={positive_feedback} />
      ):(
      <Benefits data={negative_feedback} />
        )}

      <Container className="flex flex-wrap mb-20 lg:gap-10 items-stretch lg:flex-nowrap ">

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Chat with our AI bot
              </h3>

              {is_positive?(
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Have questions or need guidance? Our AI chatbot is here to assist you. Feel free to ask about managing symptoms, understanding treatment options, or any other concerns you may have. We're here to support you every step of the way.
              </p>
              ):(
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Our AI chatbot is available to provide personalized tips and advice for maintaining optimal health. Whether you have questions about preventive measures or general wellness tips, we're here to support you on your health journey.
              </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col justify-between w-full lg:w-1/2 space-y-8`}>
          <ul className="flex flex-col gap-1 overflow-y-auto">
            <li>
              <div className="flex items-end gap-2">
                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 text-sm">
                  Hi there! How can I help you today?
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">2:14pm</div>
              </div>
            </li>
            <li>
              <div className="flex justify-end gap-2 items-end">
                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 text-sm">
                  Hello!
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">2:14pm</div>
              </div>
            </li>
            <li>
              <div className="flex items-end gap-2">
                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3 text-sm">
                  typing...
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">2:14pm</div>
              </div>
            </li>
          </ul>
          <div className="mt-auto">
        <div className="container flex items-center px-4">
          <div className="flex-1 min-w-0">
            <div className="grid gap-1.5">
              <input placeholder="Type a message" className="input rounded-r-none " />
            </div>
          </div>
          <button className="rounded-l-none btn">Send</button>
        </div>
      </div>
        </div>
      </Container>

    </>
  );
}

export default Scan;
