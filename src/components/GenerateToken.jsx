import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import FileCopyIcon from "@material-ui/icons/FileCopy";

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

const CopyButton = styled.button`
  margin-left: 2px;
  background: transparent;
  color: #4caf50;
  border: 0;
`;

const SuccessMessage = styled.div`
  color: #4caf50;
`;

function GenerateToken() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post("jwt/generate", {
          email,
          password,
        })
        .then((res) => {
          setToken(res.data.token);
        });
    }
  };
  return (
    <Wrapper>
      <Title>JWT GENERATE</Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Generate Token</Button>
      </Form>
      {token && (
        <SuccessMessage style={{ wordWrap: "break-word" }}>
          Jwt Token generated: {token}
          <CopyButton
            onClick={() => {
              // eslint-disable-next-line no-undef
              navigator.clipboard.writeText(token);
            }}
          >
            <FileCopyIcon />
          </CopyButton>
        </SuccessMessage>
      )}
    </Wrapper>
  );
}

export default GenerateToken;
