import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, ICat, IProd, SCat } from "../models/Interfaces";
const URL = "https://dummyjson.com";

type CAT = {
    limit?: number,
    skip?: number,
    category?: string
};

export const DAPI = createApi({
    reducerPath: "DAPI",
    tagTypes: ["Products", "Categories"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        pro: builder.query<IData, CAT>({
            query: ({ limit = 30, skip = 0, category }) => 
                category ? `/products/category/${
                    category}?limit=${limit}&skip=${skip}` : 
                    `/products?limit=${limit}&skip=${skip}`
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



