import React, { useRef } from 'react';
import styled, {keyframes} from "styled-components";

export function Filter({ listData, onFilter }) {
    const myInput = useRef(null);
    const num = useRef(-1);
    
    function onChange() {
        if (!myInput.current) return;
        const txt = myInput.current.value;

        const filteredItems = listData.filter((item) => {
            return item.first_name.toLowerCase().includes(txt.toLowerCase());
        });
        num.current = filteredItems.length;
        onFilter(filteredItems);
    }

    return (
        <Div className="header">
            <h4 className="filter_title">{num.current !== -1 ? num.current : listData.length} items filtered</h4>
            <input ref={myInput} 
            className="filter" 
            type="text" 
            onChange={onChange} />
        </Div>
    );
}

const Div = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

    h4{
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
    }
    input{
        
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;
}
&:focus {
  border: tomato 2px solid;
}
    
`;





// return (
//     <div>
//       <input type="text" onChange={handleFilter} />
//       {filteredUsers.map(user => (
//         <div key={user.name}>
//           <p>Name: {user.name}</p>
//           <p>Age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   );