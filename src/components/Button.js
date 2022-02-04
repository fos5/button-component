const Button = ({ btnId, btnValue, iconNameStart, iconNameEnd }) => {
  return (
    <div>
      <button id={btnId} className="btn">
        <span className="material-icons">{iconNameStart}</span>
        {btnValue}
        <span className="material-icons">{iconNameEnd}</span>
      </button>
    </div>
  );
};

export default Button;
