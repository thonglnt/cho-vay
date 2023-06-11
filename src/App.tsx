import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactUs } from "./components/contact";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import ZaloIcon from "./components/zaloIcon";
import CallIcon from "./components/callIcon";
import RegisterForm from "./components/registerForm";
import FormContact from "./components/formContact";
// import CallIcon from "./components/callIcon";

function App() {
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleClickRegisterForm = () => {
    setIsRegisterForm(true);
  };

  const handleCloseModal = () => {
    setIsRegisterForm(false);
  };

  return (
    <>
      {isRegisterForm && (
        <>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  <h4 className="modal-title">Modal Header</h4>
                </div> */}
                <div className="modal-body modal-close-button">
                  <button
                    type="button"
                    className="close close-button"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  {<FormContact />}
                </div>
                {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}
      <RegisterForm onClick={handleClickRegisterForm} />
      <CallIcon />
      <ZaloIcon />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
