function Button(props) {
  const { onClick } = props;

  return <button onClick={onClick}>Click me!</button>;
}
export default Button;
