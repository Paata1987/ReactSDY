function Wrapper(props) {
  console.log(props);
  return (
    <>
      <h1>Wrapper Works!</h1>
      {props.children}
    </>
  );
}

export default Wrapper;
