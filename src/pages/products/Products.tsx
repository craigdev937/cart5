import React from "react";
import "./Products.css";
import { Link } from "react-router";
import { DAPI } from "../../global/DAPI";
import { ACT } from "../../global/CartSlice";
import { useAD } from "../../global/Hooks";
import { IProd } from "../../models/Interfaces";
import { Spinner } from "../../components/spin/Spinner";

export const Products = () => {
    const { error, isLoading, data } = DAPI.useProQuery();
    const DAT = data?.products;
    const dispatch = useAD();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    const handleAdd = (prod: IProd) => {
        dispatch(ACT.add(prod));
    };

    return (
    <React.Fragment>
        {isLoading ? (
            <Spinner />
        ) : (
            <main className="prod__container">
                <h1 className="prod__info">Products</h1>
                <section className="prod__grid">
                    {DAT && DAT.map((prod) => (
                        <aside key={prod.id} className="prod__card">
                            <Link 
                                to={`/products/${prod.id}`}
                                className="prod__link"
                            >
                                <h3 className="prod__title">{prod.title}</h3>
                                <img 
                                    className="prod__img"
                                    alt={prod.title} 
                                    src={prod.thumbnail}
                                />
                            </Link>
                            <section className="prod__cont">
                                <p className="prod__desc">
                                    {prod.description.slice(0, 100)}...
                                </p>
                            </section>
                            <footer className="prod__foot">
                                <span 
                                    className="prod__price"
                                    >{prod.price}
                                </span>
                                <button 
                                    className="prod__btn"
                                    onClick={() => handleAdd(prod)}
                                    disabled={prod.stock === 0}
                                >
                                    Add to Cart
                                </button>
                            </footer>
                        </aside>
                    ))}
                </section>
            </main>
        )}
    </React.Fragment>
    );
};


