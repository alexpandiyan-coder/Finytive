import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Reordering.css"; // CSS file

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
        <ul className="container-item">
            {order.map((color) => (
                <motion.li
                    key={color}
                    layout
                    transition={spring}
                    className="item"
                    style={{ backgroundColor: color }}
                />
            ))}
        </ul>
    );
}

const initialOrder = ["yellow", "teal", "#9911ff", "#0d63f8"];

function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5);
}

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
};
