import React from "react";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  validation,
  setValidation,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Name</span>
          <input
            type="text"
            placeholder="Jean Dupont"
            name="username"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input
            type="email"
            placeholder="jeandupont@lereacteur.io"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input
            type="password"
            placeholder="IErEaCtEuR2020"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <span>Confirm your password</span>
          <input
            type="password"
            placeholder="IErEaCtEuR2020"
            name="confirm-password"
            onChange={(event) => setValidation(event.target.value)}
            value={validation}
          />

          <button type="submit" className="button-container">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
