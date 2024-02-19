import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <>
        <section id="core-concepts">
          <h1>React Essentials</h1>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} {...conceptItem} />
            ))}
          </ul>
        </section>
  
    </>
  );
};

export default CoreConcepts;
