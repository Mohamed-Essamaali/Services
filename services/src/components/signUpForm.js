import React from "react";
import { useForm } from "../hooks/useForm";

const initialValues = {
  name: "",
  username: "",
  password: "",
  terms: false
};

function SignUpForm() {
  const [values, handleChange] = useForm("key", initialValues);

  return (
    <div>
      <form>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="username">user Name </label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <label htmlFor="name">Terms </label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={values.terms}
          onChange={(e) => {
            return { terms: e.target.checked };
          }}
        />
      </form>
    </div>
  );
}
export default SignUpForm;
