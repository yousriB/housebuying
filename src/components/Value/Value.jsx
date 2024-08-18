import React, { useState } from "react";
import "./Value.css";
import data from "../../utils/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Value = () => {
  return (
    <section className="v-wrapper" id="Value">
      <div className="paddings innerWidth flexCenter v-container">
        {/* {left side} */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* {right side} */}
        <div className="v-right flexColStart">
          <sapn className="orangeText">Our Value</sapn>
          <sapn className="primaryText">Value We Give to You</sapn>
          <sapn className="secondaryText">
            We always ready to help by providing the best services for you
            <br />
            we belive a good blace to live can make your life better
          </sapn>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [cls, setcls] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${cls}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? setcls("expanded") : setcls("collapsed")
                        }
                      </AccordionItemState>
                      <div className="felxCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="felxCenter icon">
                        <MdOutlineArrowDropDown size={20} />{" "}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
