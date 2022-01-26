import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1></Page1>}></Route>

        <Route path="/page2" element={<Page2></Page2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//Routers
function Page1() {
  return (
    <div>
      <h1> Page1 </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui
        consequuntur obcaecati blanditiis repellendus, molestias dolorem eum
        delectus numquam labore. Nostrum soluta, accusamus hic earum
        praesentium, blanditiis repellat iste sapiente officiis nam dolore.
        Fugit facere voluptas accusamus quas hic commodi, modi dicta vel iste
        quaerat, reprehenderit aperiam delectus recusandae laboriosam? Voluptas
        quod ducimus aperiam! Nesciunt vitae minima dolores ipsam suscipit
        veritatis sit ratione numquam aut, saepe nostrum nulla quis labore
        tenetur officia sapiente expedita neque consectetur delectus fuga
        incidunt unde iure porro? Deserunt et veritatis laboriosam quam
        perspiciatis tempora culpa, molestias voluptatem fugiat illo laudantium
        debitis, in ipsa qui quaerat?{" "}
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1> Page2 </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui
        consequuntur obcaecati blanditiis repellendus, molestias dolorem eum
        delectus numquam labore. Nostrum soluta, accusamus hic earum
        praesentium, blanditiis repellat iste sapiente officiis nam dolore.
        Fugit facere voluptas accusamus quas hic commodi, modi dicta vel iste
        quaerat, reprehenderit aperiam delectus recusandae laboriosam? Voluptas
        quod ducimus aperiam! Nesciunt vitae minima dolores ipsam suscipit
        veritatis sit ratione numquam aut, saepe nostrum nulla quis labore
        tenetur officia sapiente expedita neque consectetur delectus fuga
        incidunt unde iure porro? Deserunt et veritatis laboriosam quam
        perspiciatis tempora culpa, molestias voluptatem fugiat illo laudantium
        debitis, in ipsa qui quaerat?{" "}
      </p>
    </div>
  );
}
