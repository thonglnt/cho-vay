import FormContact from "./formContact";

const Content = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-box-shadow">
                  <img
                    src="/images/card-1.jpg"
                    className="card-img-top img-fluid"
                    alt="cho vay tieu dung"
                  />
                  <div className="card-body">
                    <h5 className="card-text text-center davy-grey">
                      Ưu đãi theo lương
                    </h5>
                  </div>
                </div>
                <div className="card mt-4 card-box-shadow">
                  <img
                    src="/images/card-4.jpg"
                    className="card-img-top img-fluid"
                    alt="cho vay tieu dung"
                  />
                  <div className="card-body">
                    <h5 className="card-text text-center davy-grey">
                      Vay theo bảo hiểm nhân thọ
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="card card-box-shadow">
                  <img
                    src="/images/card-3.jpg"
                    className="card-img-top img-fluid"
                    alt="cho vay tieu dung"
                  />
                  <div className="card-body">
                    <h5 className="card-text text-center davy-grey">
                      Vay tới 20 lần thu nhập
                    </h5>
                  </div>
                </div>
                <div className="card mt-4 card-box-shadow">
                  <img
                    src="/images/card-2.jpg"
                    className="card-img-top resize-img img-fluid"
                    alt="cho vay tieu dung"
                  />
                  <div className="card-body">
                    <h5 className="card-text text-center davy-grey">
                      Không phát sinh chi phí
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-5">
            <div className="row">
              <div className="col-auto">
                <h3 className="forest-green fw-bold text-primary">ƯU ĐIỂM</h3>
              </div>
              <div className="col-lg-6 col-md-1 col-sm-4 col-6">
                <hr className="hr hr-tag forest-green bg-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-2 col-sm-2 col-4">
                <hr className="hr forest-green bg-primary" />
              </div>
              <div className="col-auto">
                <h3 className="forest-green fw-bold text-primary">
                  VAY TÍN CHẤP
                </h3>
              </div>
            </div>
            <div className="row pe-5">
              <p className="raisin-black fs-5">
                ✧ Lãi suất tiêu dùng hấp dẫn (lãi suất tối thiểu 0,8% đến lãi
                suất tối đa 1,6%/tháng)
              </p>
              <p className="raisin-black fs-5">✧ Lãi suất năm APR tối đa 20%</p>
              <p className="raisin-black fs-5">
                ✧ Hạn mức vay tối thiểu 10 triệu - tối đa 900 triệu
              </p>
              <p className="raisin-black fs-5">
                ✧ Không bảo lãnh, không thế chấp
              </p>
              <p className="raisin-black fs-5">
                ✧ Không mất phí bảo hiểm khoản vay
              </p>
              <p className="raisin-black fs-5">✧ Giải ngân nhanh sau 24h</p>
              <p className="raisin-black fs-5">
                ✧ Thời gian vay tiêu dùng linh hoạt (thời gian tối thiểu 12 đến
                thời gian tối đa 48 tháng)
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-auto">
                <h3 className="forest-green fw-bold text-primary">
                  CHÍNH SÁCH
                </h3>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-4 col-6">
                <hr className="hr hr-tag forest-green bg-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-2 col-sm-2 col-4">
                <hr className="hr forest-green bg-primary" />
              </div>
              <div className="col-auto">
                <h3 className="forest-green fw-bold text-primary">
                  VAY TIÊU DÙNG
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  height="57px"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                  className=""
                  fill="rgba(232, 140, 48, 1)"
                >
                  {" "}
                  <path d="M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"></path>{" "}
                </svg>
                <p className="text-start fs-3 fw-bold d-flex align-items-center m-0">
                  HỒ SƠ VAY VỐN ĐƠN GIẢN
                </p>
              </div>
            </div>
            <ul className="text-start mt-3 fs-6 abc">
              <li>Sổ hộ khẩu.</li>
              <li>Chứng minh thư/Căn cước công dân.</li>
              <li>Phiếu Lương Hoặc Xác Nhận Lương (Đối Với Lương Tiền Mặt).</li>
              <li>
                Tin Nhắn Lương Hoặc Sao Kê Lương (Đối Với Lương Chuyển Khoản).
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-3">
            <img
              className="border radius-2 box-shaw-dow w-100"
              src="/images/vay-nhanh.png"
              alt=""
            />
          </div>
        </div>
        <div className="row mt-5 m-0">
          <div className="col-lg-4 col-md-4 col-sm-4"></div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="advantage bg-warning">
              <h5 className="fs-4 text-center p-2">Ưu điểm nổi bật</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4"></div>
          <div className="row advantage-wrapper">
            <div className="col-md-4 px-4">
              <div className="card-body d-flex justify-content-center mb-3">
                <p className="card-text text-center">
                  Đáp ứng nhanh chóng các nhu cầu chi tiêu đột xuất
                </p>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="card-body d-flex justify-content-center mb-3">
                <p className="card-text text-center">
                  Thủ tục hồ sơ giản lược, thời gian phê duyệt nhanh chóng
                </p>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="card-body d-flex justify-content-center">
                <p className="card-text text-center">
                  Không cần thế chấp tài sản đảm bảo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 bg-normal radius-2 p-5 m-0">
          <div className="col-lg-5 radius-2">
            <img
              className="border radius-2 box-shaw-dow w-100"
              src="/images/images_content_center.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-7 text-white">
            <div className="row">
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  height="57px"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                  className=""
                  fill="rgba(238, 233, 102, 1)"
                >
                  <path d="M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"></path>
                </svg>
                <p className="text-start fs-3 fw-bold d-flex align-items-center m-0">
                  HÌNH THỨC VAY ĐA DẠNG
                </p>
              </div>
            </div>
            <div className="">
              <ul className="text-start mt-3 fs-6">
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Vay theo lương (chuyển khoản hoặc tiền mặt)
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Vay theo bảo hiểm nhân thọ.
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Vay theo hợp đồng tín dụng ở tổ chức tín dụng khác.
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Vay theo thẻ bảo hiểm y tế
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5 bg-normal radius-2 p-5 m-0">
          <div className="col-lg-7 text-white">
            <div className="row">
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59px"
                  height="57px"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                  className=""
                  fill="rgba(238, 233, 102, 1)"
                >
                  <path d="M15,10.5A1.5,1.5 0 0,1 13.5,12C14.34,12 15,12.67 15,13.5V15C15,16.11 14.11,17 13,17H9V15H13V13H11V11H13V9H9V7H13C14.11,7 15,7.89 15,9M19,3H5C3.91,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19C20.11,21 21,20.1 21,19V5A2,2 0 0,0 19,3Z"></path>
                </svg>
                <p className="text-start fs-3 fw-bold d-flex align-items-center m-0">
                  ĐIỀU KIỆN ĐƠN GIẢN
                </p>
              </div>
            </div>
            <div className="">
              <ul className="text-start mt-3 fs-6">
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Độ tuổi: 18- 59 tuổi
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Đi làm nhận lương chuyển khoản/ tiền mặt hoặc Kinh doanh có
                  bảo hiểm nhân thọ.
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Thu nhập lương chuyển khoản tối thiểu 4 triệu đồng/ tháng.
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Không có nợ xấu tại các tổ chức tín dụng.
                </li>
                <li className="fw-bold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1664 1896.0833"
                      className="checked-icon"
                      fill="rgba(238, 233, 102, 1)"
                    >
                      <path d="M1408 930v318q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24L281 825q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"></path>{" "}
                    </svg>
                  </span>
                  Đã từng từ chối tại các ngân hàng vẫn có thể tiếp tục làm hồ
                  sơ
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 radius-2">
            <img
              className="border radius-2 box-shaw-dow w-100"
              src="/images/images_content_center_2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-row">
                <div className="col-md-2 col-3 d-flex justify-content-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="69px"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    className=""
                    fill="rgba(232, 140, 48, 1)"
                  >
                    <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"></path>
                  </svg>
                </div>
                <div className="col-md-10 col-9 text-start">
                  <h4>BƯỚC ĐĂNG KÝ VAY NHANH CHÓNG</h4>
                  <p>
                    Thời gian vay tín chấp linh hoạt <br />
                    Không hỗ trợ khoản vay có thời hạn dưới 60 ngày.
                  </p>
                  <hr className="w-50" />
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0 mg-top-negative-1">
              <div className="d-flex p-0 flex-column flex-md-row">
                <div className="col-md-6">
                  <div className="text-center bg-warning height-step-4 mt-3">
                    <div className="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36px"
                        height="36px"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                        className=""
                        fill="rgba(255, 255, 255, 1)"
                      >
                        <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
                      </svg>
                      <h6 className="card-title fs-title-step-4 fw-bold">
                        KÝ KẾT HỢP ĐỒNG
                      </h6>
                      <p className="card-text fs-step-4">
                        Hỗ trợ ký hợp đồng online hoặc trực tiếp
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center bg-normal height-step-4 mt-3">
                    <div className="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36px"
                        height="36px"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                        className=""
                        fill="rgba(255, 255, 255, 1)"
                      >
                        <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
                      </svg>
                      <h6 className="card-title fs-title-step-4 fw-bold">
                        PHÊ DUYỆT - GIẢI NGÂN
                      </h6>
                      <p className="card-text fs-step-4">
                        Đợi 24 tiếng tính từ ngày sau ngày ký kết hợp đồng để
                        được thẩm định và phê duyệt khoản vay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 p-0 mg-top-negative-1">
              <div className="d-flex p-0 flex-column flex-md-row">
                <div className="col-md-6">
                  <div className="text-center bg-warning height-step-4 mt-3">
                    <div className="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36px"
                        height="36px"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                        className=""
                        fill="rgba(255, 255, 255, 1)"
                      >
                        <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
                      </svg>
                      <h6 className="card-title fs-title-step-4 fw-bold">
                        ĐĂNG KÝ VAY
                      </h6>
                      <p className="card-text fs-step-4">
                        Đăng ký vay tín chấp, và nhận tư vấn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center bg-normal height-step-4 mt-3">
                    <div className="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36px"
                        height="36px"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                        className=""
                        fill="rgba(255, 255, 255, 1)"
                      >
                        <path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
                      </svg>
                      <h6 className="card-title fs-title-step-4 fw-bold">
                        CHUẨN BỊ HỒ SƠ
                      </h6>
                      <p className="card-text fs-step-4">
                        Chuẩn bị hồ sơ và hoàn tất thủ tục vay tiền như đã được
                        tư vấn
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="container text-center">
            <h4 className="text-normal">
              BẢNG MINH HỌA SỐ TIỀN PHẢI ĐÓNG HÀNG THÁNG
            </h4>
            <p className="">
              Bảng lãi suất chỉ mang tính chất tham khảo, để biết con số chính
              xác thì còn phụ thuộc vào nhiều điều kiện
            </p>
            <div className="row w-100 m-0">
              <img src="/images/imgaes_lai_suat.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="row">
            <h1 className="col-md-6">Cảm Nhận Khách Hàng Khi Vay Tiêu Dùng</h1>
            <p>Chúng tôi luôn nỗ lực để đáp ứng mọi nhu cầu khách hàng</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card w-100 text-center bg-normal text-white position-relative">
                <span>
                  <img
                    className="card-img-top size_avatar border boder-5 border-primary rounded-circle position-absolute mg-top-negative-avatar d-flex justify-content-start"
                    src="/images/avatar_bot_content_1.jpg"
                    alt=""
                  />
                  <div className="card-body p-4 text-end">
                    <h4 className="card-title">Nguyễn Xuân Quỳnh</h4>
                    <p className="card-text">Sinh năm 1994 - Hà Nội</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="col-md-6 ps-5 pe-5 pb-5 pt-5 pt-mb-0">
              <p>
                "Tôi thực sự hài lòng về trải nghiệm sản phẩm mà bên mình mang
                lại. Lãi suất rất ưu đãi, dịch vụ chăm sóc khách hàng tận tâm.
                Tôi sẽ luôn luôn sử dụng sản phẩm và dịch vụ."
              </p>
            </div>
          </div>
          <div className="row mt-3 flex-row-reverse">
            <div className="col-md-6">
              <div className="card w-100 text-center bg-normal text-white position-relative">
                <span>
                  <img
                    className="card-img-top size_avatar border boder-5 border-primary rounded-circle position-absolute mg-top-negative-avatar d-flex justify-content-start"
                    src="/images/avatar_bot_content_2.jpg"
                    alt=""
                  />
                  <div className="card-body p-4 text-end">
                    <h4 className="card-title">Bùi Minh Hiếu</h4>
                    <p className="card-text">IT sinh năm 1992 - Đà Nẵng</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="col-md-6 ps-5 pe-5 pt-5 pt-md-0">
              <p>
                "Mình mới đăng ký tầm 24h phút xong giải ngân luôn. Hằng tháng
                có các bạn tư vấn nhắc nhở đóng phí khỏi lo việc quên đóng phí
                ảnh hưởng đến điểm tín dụng."
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-around">
          <div className="col-md-12 col-lg-6 flex-column">
            <div className="container bg-normal p-4 p-md-5 text-white">
              <div className="row w-100 p-1">
                <h4 className="text-center fw-bold">VÍ DỤ KHOẢN VAY</h4>
                <ul className="text-start">
                  <li className="mt-2 list-li-2">
                    Lãi suất được tính theo phương thức nợ giảm dần, hàng tháng
                    sẽ trẻ gốc và lãi suất.
                  </li>
                  <li className="mt-2 list-li-2">
                    Ví dụ: Khoản vay 50 triệu trong 24 tháng với lãi suất
                    0.8%/tháng
                  </li>
                  <li className="mt-2 list-li-2">
                    Gốc trả hàng tháng 50.000.000 / 24 = 2.830.000
                  </li>
                  <li className="mt-2 list-li-2">
                    Tiền lãi hàng tháng 50.000.000 x 0.8% = 400.000 Đ
                  </li>
                  <li className="mt-2 list-li-2">
                    Tổng số tiền phải trả hàng tháng Gốc + Lãi = 2.483.000 Đ
                  </li>
                  <li className="mt-2 list-li-2">
                    Lưu ý(*): Ví dụ trên chỉ mang tính chất minh họa
                  </li>
                  <li className="mt-2 list-li-2">
                    Tùy Nhu Cầu mà các khoản vay thời gian vay tối thiểu là 12
                    tháng ( 365 ngày ) và tối đa 48 tháng ( 1440 ngày)
                  </li>
                  <li className="mt-2 list-li-2">
                    Tùy vào nhu cầu lãi suất tối thiểu 9.6%/1năm – lãi suất tối
                    đa 18%/1 năm
                  </li>
                  <li className="mt-2 list-li-2">
                    Các khoản vay dài hạn sẽ được hỗ trợ ưu đãi:
                  </li>
                  <li className="mt-2 list-li-2">
                    Ví dụ: Nguyên Văn A vay 30 triệu trong 12 tháng và trả góp
                    mỗi tháng gốc + lãi là 2.750.000 vậy sau 12 tháng tổng lãi +
                    gốc là 33 triệu suy ra số tiền lãi là 3 triệu vậy lãi suất:
                    10%/năm – đây là tạm tính còn thực tế là lãi suất tính trên
                    dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn
                    nợ ít.
                  </li>
                  <li className="mt-2 list-li-2">
                    Nhưng nếu Nguyễn Văn A vay 30 triệu trả trong vòng 48 tháng
                    thì mỗi tháng sẽ phải trả góp 881.000đ vậy tổng sau 48 tháng
                    cả gốc và lãi là : 42.300.000 trừ đi gốc tiền lãi là
                    15.720.000 trong 4 năm thì mỗi năm lãi là 3.074.000 sấp sỉ
                    10%/năm. đây là tạm tính còn thực tế là lãi suất tính trên
                    dư nợ giảm dần nên khách hàng sẽ chỉ phải trả ít hơn khi còn
                    nợ ít.
                  </li>
                  <li className="mt-2 list-li-2">
                    Khách vay số tiền càng lớn lãi suất càng thấp
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 flex-column mt-5 mt-md-0">
            <FormContact />
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="container bg-normal p-4 p-md-5 text-white">
              <div className="row w-100">
                <h4 className="text-center fw-bold">
                  MỘT VÀI LƯU Ý KHI VAY TÍN CHẤP CHO KHÁCH HÀNG
                </h4>
                <ul>
                  <li className="mt-2 list-li-2">
                    Tính toán khả năng trả nợ Trước khi nhận khoản vay: bạn cần
                    phải biết chính xác về khả năng thanh toán hàng tháng của
                    mình, bạn cần biết số tiền phải trả sẽ chiếm bao nhiêu trong
                    thu nhập hàng tháng và bạn có thể trả nó mà vẫn sống bình
                    thường được. Số tiền chi trả hàng tháng không nên vượt quá
                    40% tổng thu nhập hàng tháng của bạn.
                  </li>
                  <li className="mt-2 list-li-2">
                    Các ngân hàng/Tổ chức tín dụng sẽ bị thiệt nếu bạn trả nợ
                    sớm, do đó các ngân hàng/Tổ chức tín dụng thường đưa ra ít
                    nhất là 2% nợ gốc còn lại làm phí thanh lý hợp đồng mà bạn
                    phải trả thêm nếu bạn tiến hành tất toán trước hạn. Nhưng
                    đổi lại, bạn sẽ không phải đóng thêm phần lãi nào cả.
                  </li>
                  <li className="mt-2 list-li-2">
                    Khách hàng vay tín chấp cũng cần hiểu đúng về lãi suất vay
                    tại ngân hàng/Tổ chức tín dụng. Các ngân hàng/Tổ chức tín
                    dụng thường đưa ra 2 cách tính lãi suất đó là lãi suất giảm
                    dần và lãi suất cố định
                  </li>
                  <li className="mt-2 list-li-2">
                    Trong phương pháp tính lãi suất giảm dần: số tiền phải thanh
                    toán cho lãi suất khoản vay của bạn vẫn tiếp tục giảm dựa
                    trên số tiền gốc hàng tháng được giảm, nguyên tắc là được
                    giảm hàng tháng, hàng quý hoặc hàng năm.
                  </li>
                  <li className="mt-2 list-li-2">
                    Trong phương thức tính lãi suất cố định, số tiền phải thanh
                    toán cho lãi suất khoản vay của bạn vẫn không đổi trong thời
                    gian vay, đơn giản chỉ vì số tiền này được tính dựa vào số
                    dư nợ gốc ban đầu.
                  </li>
                  <li className="mt-2 list-li-2">
                    Thời hạn khoản vay mặc định, có thể trả trước hạn linh hoạt
                    tùy vào mông muốn của Khách hàng.
                  </li>
                  <li className="mt-2 list-li-2">
                    Lãi suất vay theo năm tối thiểu 10%/năm, tối đa 20%/năm.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
