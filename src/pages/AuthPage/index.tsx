import { useState } from "react";
import { Container, Stack, TextField, Button, Typography } from "@mui/material";

const initForm = {
  email: "",
  password: "",
};

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState(initForm);

  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an accout?";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <Stack mb={5} spacing={6} alignItems="center" textAlign="center">
        <p>Title</p>
        <Typography color="rgb(255, 255, 255, .6)">
          Project Management software <br /> (proxy, chain of responsibility,
          abstract factory, bridge, flyweight, client-server)
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          value={form.password}
          type="password"
          name="password"
          onChange={handleChange}
          label="Password"
        />
        <Button
          disabled={!form.email.trim() || !form.password.trim()}
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
