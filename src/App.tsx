import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  const [txt, settxt] = useState("");
  const [txtlist, setlist] = useState<any>([]);
  const del = (i: any) => {
    txtlist.splice(i, 1);
    setlist([...txtlist]);
  };
  const edit = (x: any) => {
    let a = prompt("Enter new value");
    if (a !== null) {
      const newlist = [...txtlist];
      newlist[0] = a;
      setlist(newlist);
    }
  };
  const deleteAll = () => {
    setlist([]); // Set the list to an empty array
  };

  return (
    <div className="App">
      <h1 className="text-dark d-flex justify-content-center mt-5">
        TO-DO App
      </h1>
      <div className="sec-1 d-flex justify-content-center">
        <input
          type="text"
          className="d-flex justify-content-center rounded-pill border border-2 border-black"
          placeholder="Search"
          onChange={(e) => {
            settxt(e.target.value);
          }}
        />
        <button
          className="ms-3 rounded-pill border border-2 border-black"
          onClick={() => {
            txtlist.push(txt);
            setlist([...txtlist]);
          }}
        >
          Add
        </button>
      </div>
      <p className="d-flex justify-content-center">{txt}</p>
      {txtlist.map((x: any, i: any) => {
        return (
          <p key={i}>
            {x}
            <button
            className="rounded-pill border border-2 border-black ms-2"
              onClick={(txtlist) => {
                del(i);
              }}
            >
              Delete
            </button>
            <button
              className="rounded-pill border border-2 border-black ms-2"
              onClick={deleteAll}
            >
              Delete All
            </button>
            <button
              className="rounded-pill border border-2 border-black ms-2"
              onClick={(x) => {
                edit(x);
              }}
            >
              Edit
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default App;
