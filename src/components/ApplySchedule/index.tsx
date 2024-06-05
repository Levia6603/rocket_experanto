import { Container, Label } from "./style";

type timeData = { start: string; end: string }[];

interface props {
  timeData: {
    Sun?: timeData;
    Mon?: timeData;
    Tue?: timeData;
    Wed?: timeData;
    Thu?: timeData;
    Fri?: timeData;
    Sat?: timeData;
  };
}

function ApplySchedule({ timeData }: props) {
  return (
    <Container>
      <ul>
        <Label>日</Label>
        {(timeData?.Sun || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>一</Label>
        {(timeData?.Mon || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>二</Label>
        {(timeData?.Tue || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>三</Label>
        {(timeData?.Wed || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>四</Label>
        {(timeData?.Thu || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>五</Label>
        {(timeData?.Fri || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
      <ul>
        <Label>六</Label>
        {(timeData?.Sat || []).map((el, i) => {
          const { start, end } = el;
          return (
            <li key={i}>
              {start}-{end}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default ApplySchedule;
