import React, { useState, useEffect } from "react";
import { List } from "./list";
import { Filter } from "./filter";
import { Profile } from "./profile";

import styled from "styled-components";

const apiUrl = import.meta.env.VITE_API_URL;

export function App() {
  const [originalList, setOriginalList] = useState([]);
  const [robotsList, setRobotsList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const data_url = apiUrl;
        const response = await fetch(data_url);
        const data = await response.json();
        setRobotsList(data);
        setOriginalList(data);
        // removed {} because its one liner and not a block of code:
        // when the page is loaded open first user profile:
        if(data.length > 0) setSelectedUser(data[0]);
        
      } catch (error) {
        setErrorMsg(`fetch operation failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  // const handleUserClick = (user) => {}
  //   setSelectedUser(user);
  // };


  return (
    <Div className="app">
      <div className="header">
        {/* <h1 className="headline white-text">Show me the list!</h1> */}
      </div>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : isLoading ? (
        <H1 className="load-label">Loading...</H1>
      ) : (
        <>
        <Filter listData={originalList} onFilter={setRobotsList}/>
          <List listData={robotsList} onUserClick={setSelectedUser} />
           <Profile {...selectedUser} />
          {/* profile instanse: */}
        </>
      )}
    </Div>
  );
}


const Div = styled.div`

  background: Cornsilk;
  padding: 8.5rem 2rem 2rem 2rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: row-reverse;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;

  `;


const H1 = styled.h1`
  
display: flex;
justify-content: center;
align-items: center;
width: 60rem; 
height: 40rem;
font-size: 5rem;
font-family: "Yanone Kaffeesatz", sans-serif;
color: slategray;

`
export default App;