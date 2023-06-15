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

function App() {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  console.log(isRegisterForm);

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
                <div className="modal-body modal-close-button">
                  <button
                    type="button"
                    className="close close-button"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  {<FormContact onCloseModal={handleCloseModal} />}
                </div>
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
