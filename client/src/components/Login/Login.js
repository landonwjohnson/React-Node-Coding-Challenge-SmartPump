import React, { useState, useContext } from "react";
import BareLayout from "../Layout/BareLayout";
import Logo from "../../icons/logo";
import { Container, LoginSubmitButton } from "./styles";
import AuthUserContext from "../../context/AuthContext";
import MaterialFormInputGroup from "../common/MaterialFormInputGroup";
import ErrorsContext from "../../context/ErrorsContext";
import { loginUser } from "../../services/user.services";
import { ACCOUNT } from "../Layout/routes";

function Login(props) {
  const { history } = props;
  const { errors, setErrors } = useContext(ErrorsContext);
  const { setUser } = useContext(AuthUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  console.log(props, "this is props");
  const onSubmit = () => {
    setSubmitting(true);
    let payload = {
      email,
      password,
    };

    loginUser(payload)
      .then((decoded) => {
        setUser(decoded);
        setSubmitting(false);
        history.push(`${ACCOUNT}?id=${decoded._id}`)
      })
      .catch((err) => {
        // We are setting the errors
        // That comes from /api/users/login
        // which is a post method
        setErrors(err.response.data);
        setSubmitting(false);

        throw err;
      });
  };

  return (
    <Container>
      <div className="login-wrapper">
        <div className="logo-wrapper">
          <Logo />
        </div>

        <div className="card">
          <div className="form-wrapper">
            <MaterialFormInputGroup
              disabled={submitting}
              value={email}
              variant={"outlined"}
              name={"Email"}
              handleChange={(e) => setEmail(e.target.value)}
              errorText={errors.email ? errors.email : ""}
              error={errors.email ? errors.email : false}
            />
            <MaterialFormInputGroup
              disabled={submitting}
              variant={"outlined"}
              value={password}
              name={"Password"}
              type={"password"}
              handleChange={(e) => setPassword(e.target.value)}
              errorText={errors.password ? errors.password : ""}
              error={errors.password ? errors.password : false}
            />

            <LoginSubmitButton disabled={submitting} onClick={() => onSubmit()}>
              {submitting ? "Logging in" : "Login"}
            </LoginSubmitButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default (props) => (
  <BareLayout>
    <Login {...props} />
  </BareLayout>
);
