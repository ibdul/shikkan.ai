
import { useState } from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/sectionTitle";
import { useRouter } from "next/router";

const Scan = () => {
  const scan_options = "Brain MRI, Kidney MRI, Abdomen MRI".split(", ")
  const router = useRouter()

  const [form, setForm] = useState({
    name:"",
    email:"",
    scan_type:scan_options[0],
    file: undefined,
  })


  const [is_submitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(false)

  function submitForm(e){
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(()=>{
    router.push(`/scan/result?type=${form.scan_type}&result=${result}`)
    setIsSubmitting(false)
    }, 2000)

  }
  return (
    <>


      <Container className="space-y-2">
        <SectionTitle
          pretitle="Form"
          title="Get Your Scan Analyzed">
            Take the first step towards better health by uploading your MRI scan now. Our platform is designed to empower you with valuable insights and personalized recommendations. Together, let's unlock the potential of AI-driven healthcare.
        </SectionTitle>
      </Container>

      <div className="container mx-auto max-w-4xl ">
        <form className="text-left space-y-4 w-full" onSubmit={submitForm}>
          <div>
            <label>
              Name:
              <br/>
              <input name="name" className="input" placeholder="Enter your full name here" required onChange={e=>setForm({...form,name:e.target.value})} value={form.name} />
            </label>
          </div>
          <div>
            <label>
              Email: 
              <br/>
              <input name="email" className="input" placeholder="Enter your email here" required onChange={e=>setForm({...form,email:e.target.value})} value={form.email} />
            </label>
          </div>
          <div>
            <label>
              Scan type:
              <br/>
              <select name="scan" required className="input" onChange={e=>setForm({...form,scan_type:e.target.value})}>
                {scan_options.map((scan_option, index)=>(
                  <option className="input" key={index} value={scan_option}>{scan_option}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              File:
              <br/>
              <input type="file" name="file" required onChange={console.log} />
            </label>
          </div>
          <div className="flex justify-end">
            {is_submitting? (
            <p className="text-center btn">Submitting...</p>
            ):(
            <button className="btn">Submit</button>
              )}
          </div>
          <p className="opacity-50">If you have any questions or encounter any issues during the upload process, please don't hesitate to contact our support team at support@shikkan.ai. We're here to assist you every step of the way.</p>
          {is_submitting&&(
            <p>
              After the analysis is complete, you'll receive results outlining the findings of your MRI scan. These insights will help you better understand your health and make informed decisions about your well-being.
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Scan;
