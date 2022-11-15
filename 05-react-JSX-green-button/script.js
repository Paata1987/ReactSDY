const App = () => {
  let buttonText = 'Click Me please';
  const onButtonClick = () => {
    buttonText = 'Hello from REact';
    console.log(buttonText);
  };

  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
