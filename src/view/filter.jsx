import React, { useRef } from 'react';

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
        <div className="header">
            <h4 className="filter_title">{num.current !== -1 ? num.current : listData.length} items filtered</h4>
            <input ref={myInput} 
            className="filter" 
            type="text" 
            onChange={onChange} />
        </div>
    );
}





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