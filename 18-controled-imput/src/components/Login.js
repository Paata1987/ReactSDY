import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handelFormSubmit(event) {
    //prevent page relodding
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username:
          <input
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
