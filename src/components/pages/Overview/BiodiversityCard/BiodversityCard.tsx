
import { getAuthHeader } from "misc/authentication"
import { BiodiversityData } from "models/biodiversity"
import { UpdateData } from "models/update"
import React, { useEffect, useState } from "react"
import BiodiversityRow from "./BiodiversityRow"

const BiodiversityCard = () => {
  const [data, setData] = useState<BiodiversityData[]>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP__API_URL}/biodiversity`, {
      method: 'get',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
    })
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    })
  }, []);
  
  const handleChange = (name: string, biodiversity: number) => {
    fetch(`${process.env.REACT_APP__API_URL}/biodiversity`, {
      method: 'put',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
      body: JSON.stringify({
        name,
        biodiversity
      })
    })
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <h3> Biodiversity</h3>              
      </div>
      <div className="card-body p-0">
        <table className="table table-striped table-hover customer-list">
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Biodiversity</th>
          </tr>
        </thead>
        <tbody>
        { data?.map((bd) => (<BiodiversityRow data={bd} onChange={handleChange} />)) }
        </tbody>  
      </table>
      </div>
    </div>
  )
}

export default BiodiversityCard;