// import { useState } from "react";

const Mail = ({ setFocus }) => {
  const handleSubmit = () => {
    alert("Mail was sended succesfuly!")
    // document.getElementById("contact").focus();
  };
  // const [success, setSuccess] = useState(false);
  return (
    <div className="container">
      <h1>FormSubmit Demo</h1>
      <form
        action="https://formsubmit.co/c26da42eacb77d5add0d2e7163d80e0e"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://dazzling-torrone-287536.netlify.app/"
        />
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
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Mail;
