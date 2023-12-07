import "./style.css";
import Tower from "./assets/abc.png";
import printMe from "./logger.js";
import { createElement, useState } from "react";
import * as ReactDOM from "react-dom/client";
import { Nav } from "./components/Navbar.jsx";

const v_name = import.meta.env.VITE_NAME;
console.log("v_name: ", v_name);

const value_of_meta = import.meta.env.VITE_VALUE_OF_META;
console.log("value_of_meta: ", value_of_meta);

const root = document.getElementById("root");
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return createElement(`div`, { id: "parent" }, [
    <Nav key="nav" />,
    createElement(
      "p",
      {
        key: "p_tag",
        className: "hello",
        onClick: () => {
          setCounter(counter + 1);
        },
      },
      `this is p tag as a child component and this is rendering value of counter which is coming from parent ${counter}.
      Click here to increment counter.`
    ),
  ]);
};

const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<Counter />);

function NativeJSComponent() {
  const element = document.createElement("div");
  element.classList.add("hello");

  const pTag = document.createElement("p");
  pTag.textContent = "P Tag content";

  const imgTag = document.createElement("img");
  imgTag.src = Tower;
  imgTag.alt = "eifel tower";

  const button = document.createElement("button");
  button.textContent = "Button is a loved thing";
  button.onclick = printMe;

  element.appendChild(pTag);
  element.appendChild(imgTag);
  element.appendChild(button);

  return element;
}

document.body.appendChild(NativeJSComponent());
