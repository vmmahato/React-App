import { useState } from "react";
import FaqAccordion from "../../../../mui/FaqAccordion";
import { faq } from "../../../../../data/faq/faq";

function FaqRight() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleAccordionToggle(id: string) {
    setExpanded((prev) => prev === id ? null : id);
  }

  return (
    <>
      {faq.map((item) => (
        <FaqAccordion
          handleAccordionToggle={handleAccordionToggle}
          faq={item}
          expanded={expanded}
        />
      ))}
    </>
  );
}

export default FaqRight;
