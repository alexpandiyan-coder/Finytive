// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import img1 from "./mobileApplication.jpg";
// import img2 from "./aiApplication.jpg";
// import img3 from "./cloudApplication.jpg";
// import img4 from "./javaApplication.jpg";

// const MotionImg = motion.img;

// export default function BoxPageService() {
//     const [order, setOrder] = useState(initialOrder);

//     useEffect(() => {
//         const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
//         return () => clearTimeout(timeout);
//     }, [order]);

//     return (
//         <ul style={container}>
//             {order.map((src, index) => (
//                 <MotionImg
//                     key={index}
//                     src={src}
//                     layout
//                     transition={spring}
//                     style={item}
//                     alt={`image-${index}`}
//                 />
//             ))}
//         </ul>
//     );
// }

// const initialOrder = [img1, img2, img3, img4];

// /**
//  * ==============   Utils   ================
//  */
// function shuffle(array) {
//     return [...array].sort(() => Math.random() - 0.5);
// }

// /**
//  * ==============   Styles   ================
//  */

// const spring = {
//     type: "spring",
//     damping: 20,
//     stiffness: 300,
// };

// const container = {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     position: "relative",
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 10,
//     width: 500,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
// };

// const item = {
//     width: 190,
//     height: 190,
//     borderRadius: "10px",
//     objectFit: "cover",
//     border:"1px solid block",
//     margin:"10px"
// };
