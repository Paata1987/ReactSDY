function Wrapper(props) {
  console.log(props);

  const style = {
    backgroundColor: props.color,
    width: "550px",
    padding: "20px auto",
    margin: "20px auto",
  };
  return (
    <div style={style}>
      <h1>Wrapper Works!</h1>
      {props.children}
    </div>
  );
}

export default Wrapper;
