import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);

  function handleAdd(title, content) {
    setArr((prev) => [...prev, [title, content]]);
  }

  function handleDelete(id) {
    setArr((prev) =>
      prev.filter((item, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea clickAdd={handleAdd} />
      {arr.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item[0]}
            content={item[1]}
            clickDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
