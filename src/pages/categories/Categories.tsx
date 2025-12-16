import React from "react";
import "./Categories.css";
import { Link, useParams } from "react-router";
import { DAPI } from "../../global/DAPI";
import { Package } from "lucide-react";
import { Spinner } from "../../components/spin/Spinner";

export const Categories = () => {
    const { SG } = useParams();
    const slug = SG !== undefined ? String(SG) : "";
    const { error, isLoading, data } = DAPI.useCatQuery();
    console.log(data);

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
                <main className="cat__container">
                    <h1 className="cat__title">Categories Page</h1>
                    <section className="cat__grid">
                        {data && data.map((cat) => (
                            <Link
                                key={cat.slug}
                                to={`/products?category/${cat.slug}`}
                            >
                                <aside className="cat__content">
                                    <div className="icon__wrapper">
                                        <Package />
                                    </div>
                                    <h2 className="cat__name">{cat.name}</h2>
                                </aside>
                                <div className="cat__overlay"></div>
                            </Link>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


