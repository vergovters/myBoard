import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_URL}`,
  }),
  endpoints: (build) => ({
    getProjects: build.query<any, any>({
      query: () => ({
        url: "/project",
      }),
    }),
  }),
});
