import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const DAPI = createApi({
    reducerPath: "DAPI",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        pro: builder.query<IData, void>({
            query: () => ({
                url: "/products?limit=500",
                method: "GET",
            }),
            providesTags: ["Products"]
        })
    })
});



