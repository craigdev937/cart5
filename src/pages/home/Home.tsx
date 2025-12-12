import React from "react";
import "./Home.css";
import { Products } from "../products/Products";

export const Home = () => {
    return (
        <React.Fragment>
            <main>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vero recusandae omnis perferendis, eveniet, eaque temporibus cum animi ad dolore incidunt? Nam dolores nobis molestiae iure velit! Consectetur, dolores vel.
                </p>
                <Products />
            </main>
        </React.Fragment>
    );
};


