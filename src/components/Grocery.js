import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  console.log({ title, isVisible });

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="fon-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            console.log('hide clicked');
            setIsVisible(false);
          }}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            console.log('show clicked');
            setIsVisible(true);
          }}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible ? <p>{description}</p> : null}
    </div>
  );
};

const Grocery = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About instamart"}
        description={"about"}
        isVisible={visibleSection === "about"}
        setIsVisible={(e) => {
            console.log(e); 
            if(e === true) {
                setIsVisibleSection("about")
            } else { setIsVisibleSection("")}
            }}
      />
      <Section
        title={"Team instamart"}
        description={"team"}
        isVisible={visibleSection === "team"}
        // setIsVisible={() => setIsVisibleSection("team")}
        setIsVisible={(e) => {
            console.log(e); 
            if(e === true) {
                setIsVisibleSection("team")
            } else { setIsVisibleSection("")}
            }}
      />
      <Section
        title={"Career"}
        description={"career"}
        isVisible={visibleSection === "career"}
        // setIsVisible={() => setIsVisibleSection("career")}
        setIsVisible={(e) => {
            console.log(e); 
            if(e === true) {
                setIsVisibleSection("career")
            } else { setIsVisibleSection("")}
            }}  
      />
    </div>
  );
};

export default Grocery;
