import { Customer } from "models/customer";

interface Props {
  data: Customer
  onClick: (customer: Customer) => void
}

const CustomerRow = (props: Props) => {
  const { data, onClick } = props;
  return (
    <tr onClick={() => onClick(data) }>
      <td>{data.id}</td>
      <td>{data.name}</td>
    </tr>
  )
}
export default CustomerRow;

