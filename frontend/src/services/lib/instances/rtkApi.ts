import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const $rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: () => ({}),
});