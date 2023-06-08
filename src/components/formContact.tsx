import { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
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

  return (
    <div className="bg-light w-50 form_example rounded text-dark text_form_lai ">
      <h6 className="text-center fw-bold fs-4 text-danger">
        ĐĂNG KÝ NHẬN TƯ VẤN
      </h6>
      <p className="border border-1 border-primary rounded-pill text_form_lai w-50 text-center text-primary">
        Lãi suất chỉ từ 0.6%
      </p>
      <p className="text-center fs-6">Đăng ký ngay để nhận gói vay ưu đãi</p>
      <div className="row text_form text-primary time_form fw-bold fs-4">
        <div className="col-3">
          00
          <br />
          <p className="text-dark fs-6 fw-normal">Days</p>
        </div>
        <div className="col-3">
          05
          <br />
          <p className="text-dark fs-6 fw-normal">Hours</p>
        </div>
        <div className="col-3">
          41
          <br />
          <p className="text-dark fs-6 fw-normal">Min</p>
        </div>
        <div className="col-3">
          12
          <br />
          <p className="text-dark fs-6 fw-normal">Sec</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
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
              <option value="life_insurance">Vay theo bảo hiểm nhân thọ</option>
              <option value="health_insurance">Vay theo bảo hiểm y tế</option>
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
        <button className="btn btn-danger from_input mt-2 w-100" type="submit">
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
  );
};

export default FormContact;
