import React from "react";
import "./Cart.css";
import { Link } from "react-router";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { ICart } from "../../models/Interfaces";
import { ACT } from "../../global/CartSlice";
import { useAS, useAD } from "../../global/Hooks";

export const Cart = () => {
    const dispatch = useAD();
    const cartItems = useAS((state) => state.cart.items);
    const subTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity!, 0);
    const tax = subTotal * 0.1;
    const total = subTotal + tax;

    const handleUpQty = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(ACT.upQty({ id, quantity }))
        }
    };

    const handleSub = (id: number) => {
        dispatch(ACT.sub(id));
    };

    const handleClear = () => {
        dispatch(ACT.clear());
    };

    if (cartItems.length === 0) {
        return (
            <React.Fragment>
                <main className="empty__cart">
                    <ShoppingBag className="empty__icon" />
                    <h2 className="empty__title">Your cart is empty</h2>
                    <p className="empty__text">Add some products</p>
                    <Link 
                        to="/products" 
                        className="browse__btn"
                    >
                        Browse Products
                    </Link>
                </main>
            </React.Fragment>
        );
    };

    return (
    <React.Fragment>
        <main className="cart__container">
            <section className="cart__list">
                {cartItems.map((item) => (
                    <aside 
                        key={item.id} 
                        className="cart__item"
                    >
                        <img 
                            alt={item.title}
                            src={item.thumbnail} 
                        />

                        <div className="cart__cont">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <footer>
                                <section>
                                    <button
                                        className="cart__quantity"
                                        onClick={() => handleUpQty(item.id, item.quantity! - 1)}
                                    >
                                        <Minus className="footer__btn" />
                                    </button>
                                    <span className="cart__qty">
                                        {item.quantity}
                                    </span>
                                    <button
                                        className="cart__quantity"
                                        onClick={() => handleUpQty(item.id, item.quantity! +1)}
                                    >
                                        <Plus className="footer__btn" />
                                    </button>
                                </section>
                                <span className="item__price">
                                    ${(item.price * item.quantity!).toFixed(2)}
                                </span>
                            </footer>
                        </div>
                        <button
                            className="remove__btn"
                            onClick={() => handleSub(item.id)}
                        >
                            <Trash2 />
                        </button>
                    </aside>
                ))}
            </section>

            <section className="summary">
                <div className="summary__card">
                    <h2 className="summary__title">Order Summary</h2>

                    <div className="summary__items">
                        <aside className="summary__row">
                            <span>Subtotal ({cartItems.length} items)</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </aside>
                        <aside className="summary__row">
                            <span>Tax (10%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </aside>
                        <aside className="summary__total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </aside>
                    </div>
                </div>
            </section>
        </main> 
    </React.Fragment>
    );
};


