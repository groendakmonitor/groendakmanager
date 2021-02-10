import { Water } from "models/water";

interface Props {
  data: Water;
}

const WaterRow = (props: Props) => {
  const { data } = props;
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.incoming}</td>
      <td>{data.outgoing}</td>
    </tr>
  )
}
export default WaterRow;

