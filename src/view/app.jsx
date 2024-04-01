import React, { useState, useEffect } from "react";
import { List } from "./list";
import { Filter } from "./filter";
import styled, {keyframes} from "styled-components";

export function App() {
  const [originalList, setOriginalList] = useState([]);
  const [robotsList, setRobotsList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(data_url);
        const data = await response.json();
        setRobotsList(data);
        setOriginalList(data);
      } catch (error) {
        setErrorMsg(`fetch operation failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  return (
    <Div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="load-label">Loading...</h1>
      ) : (
        <>
        <Filter listData={originalList} onFilter={setRobotsList}/>
          <List listData={robotsList} />
        </>
      )}
    </Div>
  );
}


const Div = styled.div`

  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
`;