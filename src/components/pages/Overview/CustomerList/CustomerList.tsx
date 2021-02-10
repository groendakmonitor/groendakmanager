import { Customer } from "models/customer";
import React from "react";
import CustomerRow from "./CustomerRow";
import './styles/customerList.scss';

interface Props {
  data: Customer[];
  selectedCustomer?: Customer;

  onCustomerSelect: (customer: Customer) => void
}

const CustomerList = (props: Props) => {
  const { data, selectedCustomer, onCustomerSelect } = props;
  return (
    <table className="table table-striped table-hover customer-list">
      <thead>
        <tr>
          <th scope="col" style={{width: 32}}>#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c) => 
          <CustomerRow key={c.id} data={c} onClick={onCustomerSelect} selected={selectedCustomer === c}/>
        )}
      </tbody>  
    </table>
  )
}
export default CustomerList;

