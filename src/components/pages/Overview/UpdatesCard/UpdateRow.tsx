import { getAuthHeader } from "misc/authentication";
import { CustomerData, CustomerListData } from "models/customer";
import { UpdateData } from "models/update";
import React from "react";
import { useDebouncedCallback } from 'use-debounce';
import "./styles/updateRow.scss";

interface Props {
  data: UpdateData;

  onChange: (data: UpdateData) => void;
  onDelete: (id: number) => void;
}

const UpdateRow = (props: Props) => {
  // const { data, selected, onClick } = props;
  const { data, onChange, onDelete } = props;

  const debounced = useDebouncedCallback((text: string) => {
    onChange({ ...data, text })
  }, 500);

  return (
    <tr className="update-row">
      <td>
        <span className="d-block">
          <input type="checkbox" defaultChecked={data.enabled} onChange={(e) => onChange({ ...data, enabled: e.target.checked })}></input>
        </span>
      </td>
      <td className="col-text">
        <textarea onChange={(e) => debounced(e.target.value)} defaultValue={data.text}></textarea>
      </td>
      <td className="col-delete">
        <button type="button" className="btn btn-light" onClick={() => onDelete(data.id)}>🗑️</button>        
      </td>
    </tr>
  )
}
export default UpdateRow;

