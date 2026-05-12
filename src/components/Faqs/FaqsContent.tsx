"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export interface FaqItem {
  uuid: string;
  question: string;
  answers: string[];
}

export interface FaqsContentProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
}

// Data default jika komponen ini dipanggil tanpa prop
const defaultFaqData: FaqItem[] = [
  {
    uuid: "a",
    question: "How I can book a service?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "b",
    question: "What are the terms of service?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "c",
    question: "What if I don't like the first design?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "d",
    question: "How much does a consultation cost?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "e",
    question: "What services does your architecture company offer?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "f",
    question: "Can you handle both residential and commercial projects?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "g",
    question: "How do you ensure that the design aligns with our vision and needs?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
  {
    uuid: "h",
    question: "What is your approach to sustainability in architecture?",
    answers: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Our organizational sprit believes that where design meets passion & love with space, good architecture happens here. We are a leading architecture firm dedicated to creating visionary designs.",
    ],
  },
];

const FaqsContent: React.FC<FaqsContentProps> = ({ 
  faqs = defaultFaqData,
  title = "Contact Us Anytime, We Are Always There For You",
  subtitle = "FAQ"
}) => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>{subtitle}</span>
            <h2>{title}</h2>
          </div>

          <Accordion preExpanded={faqs.length > 0 ? [faqs[0].uuid] : []} className="faq-accordion">
            {faqs.map((faq) => (
              <AccordionItem uuid={faq.uuid} key={faq.uuid}>
                <AccordionItemHeading>
                  <AccordionItemButton>{faq.question}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {faq.answers.map((answer, index) => (
                    <p key={index}>{answer}</p>
                  ))}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqsContent;
