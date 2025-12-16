import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, ICat, IProd, SCat } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const DAPI = createApi({
    reducerPath: "DAPI",
    tagTypes: ["Products", "Categories"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        pro: builder.query<IData, void>({
            query: () => ({
                url: "/products?limit=500",
                method: "GET",
            }),
            providesTags: ["Products"]
        }),
        product: builder.query<IProd, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            }),
            providesTags: ["Products"]
        }),
        cat: builder.query<ICat[], void>({
            query: () => ({
                url: "/products/categories",
                method: "GET"
            }),
            providesTags: ["Categories"]
        }),
        scat: builder.query<SCat, string>({
            query: (slug) => ({
                url: `/products/category/${slug}`,
                method: "GET"
            }),
            providesTags: ["Categories"]
        })
    })
});



