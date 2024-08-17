import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(2);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem curOpen={curOpen} onCurOpen={setCurOpen} num={i} title={el.title} key={el.id}> {el.text} </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
