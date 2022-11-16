const App = ({ initialButtonText, initiaClassesList }) => {
  //= > const { initialButtonText/ initiaClassesList } = props;
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initiaClassesList);

  const onButtonClick = () => {
    setButtonText("Hello from REact");
    setClassesList("green-btn");
  };

  return (
    <div className="app">
      <button
        className={classesList}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <App
    initiaClassesList="blue"
    initialButtonText="Click me !!!"
  />
);
