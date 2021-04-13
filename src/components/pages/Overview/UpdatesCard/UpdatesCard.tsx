import { getAuthHeader } from "misc/authentication"
import { UpdateData } from "models/update"
import React, { useEffect, useState } from "react"
import UpdatesList from "./UpdatesList"

const UpdatesCard = () => {
  const [data, setData] = useState<UpdateData[]>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP__API_URL}/updates`, {
      method: 'get',
      headers: [['Content-Type', 'application/json']],
    })
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    })
  }, []);
  
  const handleAdd = () => {
    fetch(`${process.env.REACT_APP__API_URL}/update`, {
      method: 'post',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
    }).then<UpdateData[]>((response) => response.json())
    .then((response) => {
      setData(response);
    })
  }

  const handleChange = (data: UpdateData) => {
    fetch(`${process.env.REACT_APP__API_URL}/update`, {
      method: 'put',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
      body: JSON.stringify(data)
    })
  }

  const handleDelete = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      fetch(`${process.env.REACT_APP__API_URL}/update/${id}`, {
        method: 'delete',
        headers: [['Content-Type', 'application/json'], getAuthHeader()],
      }).then<UpdateData[]>((response) => response.json())
      .then((response) => {
        setData(response);
      })
    }
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <h3>Updates</h3>              
      </div>
      <div className="card-body p-0">
        { data && <UpdatesList data={data} onDelete={handleDelete} onChange={handleChange} /> }
      </div>
      <div className="card-footer">
        <button type="button" className="btn btn-success px-3 float-right mr-2" onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default UpdatesCard;