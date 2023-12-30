interface CreateUserInput {
  username: string;
  password: string;
}

interface CreateUserResponse {
  id: number;
}

interface LoginUserInput {
  username: string;
  password: string;
}

interface LoginUserResponse {
  accessToken: string;
}
