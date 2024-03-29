import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync, selectData } from "./dataSlice"; 
export default function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchDataAsync()); 
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Data from API</h1>
      {data.loading ? (
        <div>Loading...</div>
      ) : data.error ? (
        <div>Error: {data.error}</div>
      ) : (
        <div>
          <h2>Data:</h2>
          <ul>
            {data.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
