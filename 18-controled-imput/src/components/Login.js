import { useState } from "react";
function Login() {
  ///const [username, setUsername] = useState("");
  ///const [password, setPassword] = useState("");
  const [data, setData] = useState({ username: " ", password: " " });
  function handelFormSubmit(event) {
    //prevent page relodding
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username:
          <input
            onChange={(event) => handleInputChange(event, "username")}
            value={data.username}
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(event) => handleInputChange(event, "password")}
            value={data.password}
            type="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
