import React, { useState } from "react";
import { login } from "../store/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectMe } from "../store/auth/selectors";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const me = useSelector(selectMe);
  
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login(email, password));
  }

  return (
    <div>
      <h1>Login</h1>
      {!me ? <div><p>Not logged in</p></div> : <div><p>Hello {me.name}, you are logged in!</p></div> }
      {!me && <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>}
    </div>
  );
}
