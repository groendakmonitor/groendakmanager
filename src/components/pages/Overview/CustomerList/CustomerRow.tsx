import { Customer } from "models/customer";

interface Props {
  data: Customer
}

const CustomerRow = (props: Props) => {
  const { data } = props;
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
    </tr>
  )
}
export default CustomerRow;

