import { useState } from "react";
import { Select, Option } from "./SelectorStyle";
import arrowDown from "/chevron-down.png";

interface props {
  languageList: string[];
  currentValue: string;
  setValue: (parms: string) => void;
}

function Selector({ languageList, currentValue, setValue }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Select $size={"short"} $isOpen={isOpen} onClick={toggle}>
        <p>{currentValue}</p>
        <img src={arrowDown} alt="" />
        <Option $index={languageList.length} $isOpen={isOpen} onClick={toggle}>
          <ul>
            {languageList.map((el) => (
              <li
                key={el}
                onClick={() => {
                  setValue(el);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </Option>
      </Select>
    </>
  );
}
export default Selector;
