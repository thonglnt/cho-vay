import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const [days, setDay] = useState<any>("00");
  const [hours, setHours] = useState<any>("00");
  const [minutes, setMinutes] = useState<any>("00");
  const [seconds, setSeconds] = useState<any>("00");
  const [resetTime, setResetTime] = useState(false);

  const form = useRef<HTMLFormElement>({} as any);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o0pafyc",
        "template_15xez0p",
        form.current,
        "XX6PmaP0iNkgJa8Gf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg sended");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function addDays(dateObj: any, numDays: any) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  }

  let interval: any = useRef();
  const startTime = (countDown: any) => {
    console.log("call start time");

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setResetTime(true);
      } else {
        setResetTime(false);
        setDay(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("call useEffect");
    const today = new Date();
    const countDown = addDays(today, 3);
    startTime(countDown);
  }, [resetTime]);

  return (
    <div className="container bg-normal mt-lg-0 p-3 p-md-5 text-white position-relative">
      <div className="row">
        <div className="position-absolute z-index-1 mg-top-negative-girl">
          <img
            className="size_girl"
            src="./assets/image_bot_content_3.png"
            alt=""
          />
        </div>
        <div className="z-index-2 w-100 text-white">
          <div className="bg-light text-dark p-5 text-center">
            <h6 className="mt-5 text-danger">ĐĂNG KÝ NHẬN TƯ VẤN</h6>
            <p className="border border-1 border-primary rounded-pill text_form w-0 text-primary p-2">
              Lãi suất chỉ từ 0.6%
            </p>
            <p className="text_form">Đăng ký ngay để nhận gói vay ưu đãi</p>
            <div className="row text_form text-primary time_form">
              <div className="col-3 fs-4 fw-bold">
                {days}
                <br />
                <p className="text-dark fs-6 fw-normal">Days</p>
              </div>
              <div className="col-3 fs-4 fw-bold">
                {hours}
                <br />
                <p className="text-dark fs-6 fw-normal">Hours</p>
              </div>
              <div className="col-3 fs-4 fw-bold">
                {minutes}
                <br />
                <p className="text-dark fs-6 fw-normal">Min</p>
              </div>
              <div className="col-3 fs-4 fw-bold">
                {seconds}
                <br />
                <p className="text-dark fs-6 fw-normal">Sec</p>
              </div>
            </div>
            <form method="post">
              <div className="form-group from_input mt-5">
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  id="full_name"
                  aria-describedby="helpId"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="form-group from_input mt-2">
                <input
                  type="text"
                  className="form-control"
                  name="phone_number"
                  id="phone_number"
                  aria-describedby="helpId"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="form-group from_input mt-2">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  aria-describedby="helpId"
                  placeholder="Địa chỉ"
                />
              </div>
              <div className="form-group from_input mt-2">
                <input
                  type="text"
                  className="form-control"
                  name="address_company"
                  id="address_company"
                  aria-describedby="helpId"
                  placeholder="Địa chỉ công ty đang làm"
                />
              </div>
              <div className="form-group from_input mt-2">
                <div className="mb-3">
                  <select
                    className="form-select form-select-normal"
                    name="loan_type"
                    id="loan_type"
                  >
                    <option selected>Lựa chọn hình thức vay</option>
                    <option value="salary_transfer">
                      Vay theo lương chuyển khoản
                    </option>
                    <option value="cash_salary">Vay theo lương tiền mặt</option>
                    <option value="life_insurance">
                      Vay theo bảo hiểm nhân thọ
                    </option>
                    <option value="health_insurance">
                      Vay theo bảo hiểm y tế
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group from_input mt-2">
                <input
                  type="text"
                  className="form-control"
                  name="loan_amount"
                  id="loan_amount"
                  aria-describedby="helpId"
                  placeholder="Số tiền cần vay"
                />
              </div>
              <button
                className="btn btn-danger from_input mt-2 w-100"
                type="submit"
                onSubmit={sendEmail}
              >
                Gửi đi
              </button>
              <p className="text_form">
                Mọi thông tin khách hàng đều được bảo mật
                <br />
                <span className="fw-bold text-secondary">
                  Lưu ý: chưa hỗ trợ khách hàng có nợ xấu
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
