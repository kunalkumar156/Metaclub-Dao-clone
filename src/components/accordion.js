import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      question: "What is MetaClub DAO?",
      answer:
        "Meta Club DAO is a community first approach to build and empower NFT projects. A place to inspire and push the industry standards for NFTs by delivering blue chip projects and offer world class services.",
    },
    {
      question: "How can I become a part of MetaClub DAO?",
      answer: "Answer 2",
    },
    {
      question: "Is MetaClub DAO a NFT project?",
      answer: "Answer 3",
    },
    {
      question: "What are the benefits of joining MetaClub DAO?",
      answer: "Answer 4",
    },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <button onClick={() => handleAccordionClick(index)}>
            {item.question}
          </button>
          {activeIndex === index && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
