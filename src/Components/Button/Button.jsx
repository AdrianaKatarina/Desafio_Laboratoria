import './Button.css';

const Button = (props) => {
  return (
    <button className={props.className} value={props.value} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;