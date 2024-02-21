
import SectionTitle from "../components/sectionTitle";

const Scan = () => {
  const scan_options = "Brain MRI, Kidney MRI, Abdomen MRI".split(", ")
  return (
    <>


      <SectionTitle
        pretitle="Form"
        title="Get Your Scan Analyzed">
      </SectionTitle>

      <div className="container mx-auto max-w-4xl ">
        <form className="text-left space-y-4 w-full">
          <div>
            <label>
              Name:
              <br/>
              <input name="name" className="input" placeholder="Enter your full name here" />
            </label>
          </div>
          <div>
            <label>
              Email: 
              <br/>
              <input name="email" className="input" placeholder="Enter your email here" />
            </label>
          </div>
          <div>
            <label>
              Scan type:
              <br/>
              <select name="scan" required className="input">
                {scan_options.map((scan_option, index)=>(
                  <option className="input" key={index} value={scan_option}>{scan_option}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex justify-end">
            <button className="btn"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Scan;
