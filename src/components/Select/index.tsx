import { Label } from "./SelectStyle";
import arrowDown from "/chevron-down.png";

interface Props {
  width: number;
  list: { Id: number; Name: string }[];
  currentValue: string | number;
  setValue: (param: { Id: number; Name: string }) => void;
}

function Select({ width, list, currentValue, setValue }: Props) {
  return (
    <>
      <Label $width={width} $length={list.length}>
        <p>{currentValue}</p>
        <input type="checkbox" />
        <img src={arrowDown} alt="select-arrow" />
        <ul>
          {list.map((el, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(el);
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
