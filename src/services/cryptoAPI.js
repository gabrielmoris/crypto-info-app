import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



const createRequest = (url)=>({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/exchanges"),
        }),
    }),
});