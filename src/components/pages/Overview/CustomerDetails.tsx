import { useEffect, useState } from "react";
import { Customer } from "../../../models/customer";

interface Props {
  data: Customer;
}

const CustomerDetails = (props: Props) => {
  const { data } = props;
  const [current, setCurrent] = useState(data);

  useEffect(() => {
    setCurrent(data)
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent({
      ...current,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSaveClick = () => {
    console.log(current);
  }

  return (
    <div className="card">
      <div className="card-body">
        <fieldset>
          <legend className="text-uppercase font-size-sm font-weight-bold">Customer details</legend>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Name</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" value={current.name} onChange={handleChange} name="name" placeholder="name" />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Roof size</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" value={current.roof_size} onChange={handleChange} name="roof_size" placeholder="roof size" />
                <span className="input-group-append">
                  <span className="input-group-text">m2</span>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Roof thickness</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" value={current.roof_thickness} onChange={handleChange} name="roof_thickness" placeholder="roof thickness" />
                <span className="input-group-append">
                  <span className="input-group-text">cm</span>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Location</label>
            <div className="col-lg-9">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="roof thickness" />
              </div>
            </div>
          </div>
        </fieldset> 
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button type="submit" className="btn btn-light">Verwijderen<i className="icon-file-text2 ml-2"></i></button>
        <div>
          <button type="button" className="ml-2 btn btn-primary" onClick={handleSaveClick}>
            Opslaan<i className="icon-arrow-right14 "></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails;