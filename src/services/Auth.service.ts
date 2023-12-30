import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_URL}`,
  }),
  endpoints: (build) => ({
    createUser: build.mutation<CreateUserResponse, CreateUserInput>({
      query: (info) => ({
        url: "/auth/registration",
        method: "POST",
        body: info,
      }),
    }),
    loginUser: build.mutation<LoginUserResponse, LoginUserInput>({
      query: (data) => {
        const bodyFormData = new FormData();
        bodyFormData.append("username", data.username);
        bodyFormData.append("password", data.password);
        return {
          url: "/process_login",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: bodyFormData,
          formData: true,
        };
      },
    }),
  }),
});
