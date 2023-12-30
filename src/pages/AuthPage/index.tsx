import { useState } from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { userApi } from "../../services/Auth.service";
import useStore from "../../store";

const initForm = {
  username: "",
  password: "",
};

function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState(initForm);
  const [createUser] = userApi.useCreateUserMutation();
  const [loginUser] = userApi.useLoginUserMutation();
  const [error, isError] = useState(false);
  const { setLoginStatus } = useStore();

  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an accout?";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  const handleAuth = async () => {
    try {
      setLoading(true);
      if (isLogin) {
        const info = {
          username: form.username,
          password: form.password,
        };
        await loginUser(info);
        setLoginStatus(true);
      } else {
        const info = {
          username: form.username,
          password: form.password,
        };
        await createUser(info);
        setIsLogin(true);
        setLoading(false);
        setForm(initForm);
      }
    } catch (err) {
      setLoading(false);
      setForm(initForm);
    }
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 25,
      }}
    >
      <Stack mb={5} spacing={6} alignItems="center" textAlign="center">
        <h3>Project Management software </h3>
        <Typography color="rgb(255, 255, 255, .6)">
          proxy, chain of responsibility, abstract factory, bridge, flyweight,
          client-server
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField
          value={form.username}
          name="username"
          onChange={handleChange}
          label="Username"
        />
        <TextField
          value={form.password}
          type="password"
          name="password"
          onChange={handleChange}
          label="Password"
        />
        {form.password.length < 8 && (
          <p style={{ color: "red" }}>Password should be at least 8 symbols</p>
        )}
        <Button
          disabled={loading || !form.username.trim() || !form.password.trim()}
          onClick={handleAuth}
          size="large"
          variant="contained"
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        onClick={() => setIsLogin(!isLogin)}
        textAlign="center"
        marginTop={3}
      >
        {authText}
      </Typography>
    </Container>
  );
}

export default AuthPage;
