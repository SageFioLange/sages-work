import { useState, useRef } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  auth.onAuthStateChanged((user) => {
    setAuthenticated(user ? true : false);
  });

  function handleLogin() {
    if (emailRef.current && pwRef.current)
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        pwRef.current.value
      );
  }

  return authenticated ? (
    <div>authenticated</div>
  ) : (
    <div className="full-screen">
      <div className="centered-container">
        <input
          placeholder="user"
          type="email"
          className="input"
          ref={emailRef}
        />
        <input
          placeholder="password"
          type="password"
          className="input"
          ref={pwRef}
        />
        <button onClick={handleLogin} className="login-button" />
      </div>
    </div>
  );
}
