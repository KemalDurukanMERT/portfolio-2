import { useState } from "react";

const Mail = ({setFocus}) => {
  const handleSubmit = () => {
    setTimeout(() => setFocus(false), 3000);
  };
  const [success, setSuccess] = useState(false);
  return (
    <div className="container">
      <h1>FormSubmit Demo</h1>
      <form
        // target="_blank"
        action="https://formsubmit.co/c26da42eacb77d5add0d2e7163d80e0e"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="text" name="_honey" style={{display:"none"}} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://dazzling-torrone-287536.netlify.app/#contact" />
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows={10}
            required
            defaultValue={""}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block" onClick={()=>{setSuccess(true)
        setTimeout(setSuccess(false),3000)}}>
          Submit Form
        </button>
        <div className="success-message" style={success ? {display:"block"} : {display:"none"}}>Mail Sended</div>
      </form>
    </div>
  );
};


export default Mail;