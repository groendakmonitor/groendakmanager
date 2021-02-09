import { Customer } from "models/customer";
import React from "react";
import CustomerRow from "./CustomerRow";

interface Props {
  data: Customer[]
}

const CustomerList = (props: Props) => {
  const { data } = props;
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c) => 
          <CustomerRow key={c.id} data={c} />
        )}
      </tbody>  
    </table>
  )
}
export default CustomerList;

