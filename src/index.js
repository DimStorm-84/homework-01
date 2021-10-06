import react from "react";
import reactDom from "react-dom";

const element = <h1> Hello World меня зовут: Мотевич Дмитрий </h1>;

console.log(element);

reactDom.render(element, document.getElementById("root"));
