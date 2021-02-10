import { Water } from "models/water";

interface Props {
  data: Water;
}

const WaterRow = (props: Props) => {
  const { data } = props;
  const date = new Date(data.date).toLocaleString();

  return (
    <tr>
      <td>{date}</td>
      <td>{data.incoming}</td>
      <td>{data.outgoing}</td>
    </tr>
  )
}
export default WaterRow;

