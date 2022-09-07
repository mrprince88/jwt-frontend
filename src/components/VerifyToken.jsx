import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.div`
  color: #4caf50;
`;

const ErrorMessage = styled.div`
  color: red;
`;

function VerifyToken() {
  const [token, setToken] = useState();
  const [isValid, setIsValid] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      axios
        .post("jwt/validate", {
          token,
        })
        .then((res) => {
          setIsValid(res.data.isValid);
        });
    }
  };
  return (
    <Wrapper>
      <Title>JWT VERIFY</Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input placeholder="token" onChange={(e) => setToken(e.target.value)} />
        <Button type="submit">Verify Token</Button>
      </Form>
      {isValid === true && (
        <SuccessMessage style={{ wordWrap: "break-word" }}>JWT Token is valid!</SuccessMessage>
      )}
      {isValid === false && (
        <ErrorMessage style={{ wordWrap: "break-word" }}>JWT Token is not valid!</ErrorMessage>
      )}
    </Wrapper>
  );
}

export default VerifyToken;
