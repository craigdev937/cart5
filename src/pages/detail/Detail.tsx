import React from "react";
import "./Detail.css";
import { useParams } from "react-router";
import { DAPI } from "../../global/DAPI";
import { Spinner } from "../../components/spin/Spinner";

export const Detail = () => {
    const { id } = useParams();
    const DID = id !== undefined ? Number(id) : 0;

    const { error, isLoading, 
        data } = DAPI.useProductQuery(DID);
    const DET = data!;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main>
                    {DET.title}
                </main>
            )}
        </React.Fragment>
    );
};


