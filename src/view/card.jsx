import styled from "styled-components";
import { Thumb } from "./thumb";


export function Card({ country, description, first_name, avatar }) {
  return (
    <Div>
      <Thumb image_url={avatar} size="small" />
      <div className="texts-box">
        <h1 className="card-title paragraph">
          {first_name} from {country}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </Div>
  );
}

const Div = styled.div`
/* .card: */
  /* margin: 1rem 3rem; */
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: "Yanone Kaffeesatz", sans-serif;
  /* flex-wrap: wrap; */

&:hover {
  background: paleturquoise;
} 
&:active {
  background: skyblue;
  color: white;
}
&:hover img {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
}
&:active img {
  box-shadow: 0 0.4rem 1.5rem DimGrey;
}

h1{
  text-align: left;
  font-size: 5rem;
  color: gray;
}
/* &:active h1 {
  color: white;
} */
.texts-box {
  padding-left: 2.8rem;
}
p {
  font-size: 2.1rem;
  color: gray;
  max-width: 35rem;
}


  
`;


// const H1 = styled.h1`
//   &.card-title {
//     font-family: "Expletus Sans";
//     text-align: left;
//     font-size: 3rem;
//   } 

//   &.paragraph {
//     font-size: 3.8rem;
//     font-weight: 400;
//     font-family: "Yanone Kaffeesatz", sans-serif;
//     text-align: center;
//     color: slategray;
//   }
// `;









// export default Card;
// import React, { Component } from "react";
// import Thumb from "./Thumb";

// export default ({ first_name, country, description, avatar }) => {
//   // console.log('first_name:',first_name)
//   //	console.log('props:',props)
//   return (
//     <div className="card">
//       <Thumb image_url={avatar} />
//       <div className="texts-box">
//         <h1 className="card-title paragraph">
//           {first_name} from {country}
//         </h1>
//         <p className="card-msg">{description}</p>
//       </div>
//     </div>
//   );
// };
