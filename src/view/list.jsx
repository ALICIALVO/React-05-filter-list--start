import { Card } from "./card";
import styled from "styled-components";

export function List({ listData, onUserClick }) {
  return (
    <Div className="cards-list">
      <ul>
        {listData.map((item) => (
          <li className="card-item" key={item.id}  onClick={() => onUserClick(item)}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </Div>
  );
}

const Div = styled.div`

  background: oldlace;
  height: 77vh;
  min-width: 37rem;
  /*border: #0000b9 solid 3px;*/
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;

&:nth-child(even) {
  background: honeydew;
}
&:nth-child(odd) {
  background: white;
}
`






// import React from "react";
// import Card from "./Card";

// const List = ({ list_data }) => {
//   return (
//     <div className="cards-list">
//       <ul>
//         {list_data.map((item) => (
//           <li key={item.id} className="card-item">
//             <Card {...item} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default List;
