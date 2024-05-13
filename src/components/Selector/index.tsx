import { useState } from "react";
import { Select, Option } from "./SelectorStyle";
import arrowDown from "/chevron-down.png";

interface props {
  size: string;
  languageList: string[];
  currentValue: string;
  setValue: (parms: string) => void;
  className?: string;
}

function Selector({
  size,
  languageList,
  currentValue,
  setValue,
  className,
}: props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Select
        $size={size}
        $isOpen={isOpen}
        onClick={toggle}
        className={className}
      >
        <p>{currentValue}</p>
        <img src={arrowDown} alt="" />
        <Option
          $size={size}
          $index={languageList.length}
          $isOpen={isOpen}
          onClick={toggle}
        >
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
