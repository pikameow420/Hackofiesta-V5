import { useRef, useState } from "react";
import "./accordian.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordian() {
  return (
    <>
      {[1, 2, 3].map((item, idx) => {
        return (
          <div className="p-5 ">
          <Accordion type="single" id="accordcomp" collapsible className=" p-5 rounded">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-3xl">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-lg md:text-2xl border-glow">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        );
      })}
    </>
  );
}

export default Accordian;
