type RegisterFormProps = {
  onClick: () => void;
};

const RegisterForm = ({ onClick }: RegisterFormProps) => {
  return (
    <div className="register-form">
      <button
        type="button"
        className="btn-primary register-btn cc-register-action-ripple"
        data-toggle="modal"
        data-target="#myModal"
        onClick={onClick}
      >
        Đăng ký vay
      </button>
    </div>
  );
};

export default RegisterForm;
