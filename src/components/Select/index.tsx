import { Label } from "./SelectStyle";
import arrowDown from "/chevron-down.png";

interface Props {
  list: { id: number; Name: string }[];
  currentValue: string | number;
  setValue: (param: string) => void;
}

function Select({ list, currentValue, setValue }: Props) {
  return (
    <>
      <Label $width={264} $length={list.length}>
        <p>{currentValue}</p>
        <input type="checkbox" />
        <img src={arrowDown} alt="select-arrow" />
        <ul>
          {list.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(el.Name);
              }}
            >
              {el.Name}
            </li>
          ))}
        </ul>
      </Label>
    </>
  );
}

export default Select;
