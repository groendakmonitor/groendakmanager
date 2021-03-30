import { PropsWithChildren } from "react";
import { UpdateData } from "models/update";
import UpdateRow from "./UpdateRow";
// import './styles/customerList.scss';

interface Props {
  data: UpdateData[];

  onChange: (data: UpdateData) => void;
  onDelete: (id: number) => void;
}

const UpdatesList = (props: PropsWithChildren<Props>) => {
  const { data, children, onDelete, onChange} = props;
  
  return (
    <table className="table table-striped table-hover customer-list">
      <thead>
        <tr>
          <th scope="col" style={{width: 32}}>Active</th>
          <th scope="col">Text</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {children}
        {data.map((c) => 
          <UpdateRow key={c.id} data={c} onChange={onChange} onDelete={onDelete}/>
        )}
      </tbody>  
    </table>
  )
}
export default UpdatesList;

