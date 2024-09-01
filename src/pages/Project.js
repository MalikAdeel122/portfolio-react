// import React, { useState } from "react";

// const Project = () => {
//   const btn = [
//     {
//       label: "All",
//       value: "All",
//     },
//     {
//       label: "Web Apps",
//       value: "web apps",
//     },
//     {
//       label: "Games",
//       value: "games",
//     },
//     {
//       label: "Designing",
//       value: "designing",
//     },
//   ];
//   const project = [
//     {
//       id: 1,
//       image: "/images/img/portfolio/project-1.jpg",
//       category: "web apps",
//     },
//     {
//       id: 2,
//       image: "/images/img/portfolio/project-2.jpg",
//       category: "games",
//     },
//     {
//       id: 3,
//       image: "/images/img/portfolio/project-3.jpg",
//       category: "designing",
//     },
//     {
//       id: 4,
//       image: "/images/img/portfolio/project-4.jpg",
//       category: "web apps",
//     },
//     {
//       id: 5,
//       image: "/images/img/portfolio/project-5.jpg",
//       category: "games",
//     },
//     {
//       id: 6,
//       image: "/images/img/portfolio/project-6.jpg",
//       category: "designing",
//     },
//   ];
//   const [activeTap, setActiveTap] = useState("All");
//   const [items, setItems] = useState(project);
//   const filterItem = (categItem) => {
//     const updateData = project.filter((curElem) => {
//       return curElem?.category === categItem;
//     });
//     setItems(updateData);
//     setActiveTap(categItem);
//   };

//   return (
//     <>
//       <div className="project">
//         <div className="wrapper app-width">
//           <div className="heading">
//             <div className="ls">
//               <div className="heading_name">Our Projects</div>
//             </div>
//             <div className="rs">
//               {btn.map((btn, index) => (
//                 <button
//                   className={`btn_wave ${
//                     activeTap === btn.value ? "active" : ""
//                   }`}
//                   onClick={() => {
//                     setActiveTap(btn.value);
//                     if (btn.value === "All") {
//                       setItems(project);
//                     } else {
//                       filterItem(btn.value);
//                     }
//                   }}
//                 >
//                   {btn.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="container">
//             <div className="wave">
//               {items.map((proj, index) => (
//                 <div className="project_card">
//                   <img src={proj.image}></img>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project;
