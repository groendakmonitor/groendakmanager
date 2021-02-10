import { Water } from "models/water";
import React, { useState } from "react";
import WaterRow from "./WaterRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

interface Props {
  data: Water[];
  
  onAddWater: (incoming: number, outgoing: number) => void;
}

const CustomerList = (props: Props) => {
  const { data, onAddWater } = props;
  const [addingWater, setAddingWater] = useState({ incoming: 0, outgoing: 0})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddingWater(aW => ({
      ...aW,
      [event.target.name]: event.target.value
    }))
  }

  const handleAddClick = () => {
    onAddWater(addingWater.incoming, addingWater.outgoing);
  }

  const handleRandomIncoming = () => {
    setAddingWater(aW => ({
      ...aW,
      incoming: (Math.random() * 5)
    }))
  }

  const handleRandomOutgoing = () => {
    setAddingWater(aW => ({
      ...aW,
      outgoing: (Math.random() * 4) + aW.incoming
    }))

  }
  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" style={{width: 46}}>Date</th>
              <th scope="col">Incoming</th>
              <th scope="col">Outgoing</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c) => 
              <WaterRow key={c.id} data={c}/>
            )}
          </tbody>  
        </table>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className="d-flex">
          <div className="col-6">
            <label className="form-label">Incoming</label>
            <div className="input-group">
              <input type="number" className="form-control" name="incoming" value={addingWater.incoming} onChange={handleChange} placeholder="Incoming"/>
              <span className="input-group-append">
                <button className="btn btn-primary" onClick={handleRandomIncoming}>
                  <FontAwesomeIcon icon={faRandom} />
                </button>
              </span>
            </div>
          </div>
          <div className="col-6">
            <label className="form-label">Outgoing</label>
            <div className="input-group">
              <input type="number" className="form-control" name="outgoing" value={addingWater.outgoing} onChange={handleChange} placeholder="Outgoing"/>
              <span className="input-group-append">
                <button className="btn btn-primary" onClick={handleRandomOutgoing}>
                  <FontAwesomeIcon icon={faRandom} />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <button type="button" className="ml-2 btn btn-primary" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
export default CustomerList;

