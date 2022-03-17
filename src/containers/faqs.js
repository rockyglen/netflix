import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs";

export function FaqsContainer() {
  const faq = "Frequenty Asked Questions";
  return (
    <Accordion>
      <Accordion.Title>{faq}</Accordion.Title>
      {faqsData.map((item) => {
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
      <Accordion.Item />
    </Accordion>
  );
}
