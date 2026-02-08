import React from "react";
import "./Categories.css";
import { Link } from "react-router";
import { DAPI } from "../../global/DAPI";
import { Package } from "lucide-react";
import { Spinner } from "../../components/spin/Spinner";

export const Categories = () => {
    const { error, isLoading, data: categories } = DAPI.useCatQuery();

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
                    <h1 className="cat__title">Shop by Category</h1>
                    <section className="cat__grid">
                        {categories?.map((cat) => (
                            <Link
                                className="cat__card"
                                key={cat.slug}
                                to={`/products?category=${cat.slug}`}
                            >
                                <aside className="cat__content">
                                    <div className="cat__icon">
                                        <Package />
                                    </div>
                                    <h2 className="cat__name">{cat.name}</h2>
                                </aside>
                            </Link>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


