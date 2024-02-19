import React, { useCallback, useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectTopic, setSelectTopic] = useState(null);

  const handleSelect = useCallback(
    (selectButton) => {
      setSelectTopic(selectButton);
    },
    [selectTopic]
  );

  let tabContent = <p>Please select a topic.</p>;

  if (selectTopic) {
    tabContent = (
      <div id="tab-content" style={{ marginTop: "50px" }}>
        <h3> {EXAMPLES[selectTopic].title} </h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples" className="">
     
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectTopic === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>

              <TabButton
                isSelected={selectTopic === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>

              <TabButton
                isSelected={selectTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>

              <TabButton
                isSelected={selectTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >  {tabContent}</Tabs>
      

       
    </Section>
  );
};

export default Examples;
