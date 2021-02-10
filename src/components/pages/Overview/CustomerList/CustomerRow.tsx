import { Customer } from "models/customer";

interface Props {
  data: Customer;
  selected?: boolean;

  onClick: (customer: Customer) => void
}

const CustomerRow = (props: Props) => {
  const { data, selected, onClick } = props;
  return (
    <tr onClick={() => onClick(data)} className={selected ? "selected" : ""}>
      <td>
        <span className="d-block badge badge-info">ID: {data.id}</span>
      </td>
      <td>{data.name}</td>
    </tr>
  )
}
export default CustomerRow;

