import React, { useEffect, useState } from "react";
import img from "../../assets/Img/HOME/Union.svg";
import handl from "../../assets/Img/Hand,L.png";
import Phone from "../../assets/Img/iPhone 12 Pro (Wooden Hands).png";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Works = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  }, []);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  return (
    <div id="Works">
      <div className="container">
        <div className=" text-white">
          <div className=" ">
            <div className=" flex justify-between">
              <div className=" ">
                <div className="">
                  <h1 className=" text-[60px]">How it works</h1>
                </div>
                <div className=" flex gap-5">
                  <div className=" flex items-center flex-col ">
                    <img src={img} alt="img" />
                    <h4>Tap your card</h4>
                  </div>
                  <div className=" flex items-center flex-col ">
                    <img src={img} alt="img" />
                    <h4>Login & add details</h4>
                  </div>
                  <div className=" flex items-center flex-col ">
                    <img src={img} alt="img" />
                    <h4>Go share</h4>
                  </div>
                </div>
              </div>
              <div className="">
                <p className=" border-l-2 border-inherit border-solid pl-[30px]">
                  • Choose your design & personalize with your own <br />{" "}
                  company logo. The logo will be engraved into the <br /> metal
                  card.
                </p>
              </div>
            </div>
            <h1 className=" text-white text-2xl fixed bottom-[40px] right-[50px] ">
              {scrollPosition}
            </h1>
          </div>
          <div className=" flex items-start justify-between pt-[100px] gap-32">
            <div className=" w-[500px] text-3xl flex items-center flex-col gap-7">
              <h1>FAQ </h1>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative  ">
              <img className="" src={Phone} alt="img" />
              <img
                className=" absolute bottom-0  right-[360px]"
                src={handl}
                alt="img"
                style={{
                  transform:
                    scrollPosition < 2570
                      ? " translateY(100%)"
                      : "translateX(0)",
                  transition: "2s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
