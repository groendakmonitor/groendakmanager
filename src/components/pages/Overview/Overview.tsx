import { API_URL } from "api";
import { getAuthHeader, getAuthToken } from "authentication";
import React, { useEffect, useState } from "react";
import useLocation from "wouter/use-location";
import { Customer } from "../../../models/customer";
import Loading from "../misc/Loading";
import CustomerList from "./CustomerList/CustomerList";

const Overview = () => {
  const [_location, setLocation] = useLocation();
  const [data, setData] = useState<Customer[]>()
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setLocation("/login");
      return;
    }
    setLoading(true)
    fetch(`${API_URL}/customers`, {
      method: 'get',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
    })
    .then<Customer[]>((response) => response.json())
    .then((response) => {
      setData(response);
      setLoading(false)
    })
  }, [setLocation]);

  const handleAddCustomer = () => {
    const name = prompt("Enter customer name");
    if (name) {
      setLoading(true)
      fetch(`${API_URL}/customer`, {
        method: 'post',
        headers: [['Content-Type', 'application/json'], getAuthHeader()],
        body: JSON.stringify({
          name
        })
      }).then<Customer[]>((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
    }
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h3>Customers</h3>
                <button type="button" className="btn btn-success" onClick={handleAddCustomer}>Add customer</button>
              </div>
              <div className="card-body p-0">
              { loading && <Loading />}
              { data && <CustomerList data={data} /> }
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">slfjds
              <ul className="list-group">
                <li className="list-group-item d-flex">
                  <div className="col-6 text-end pe-2 fw-bold">Name</div>
                  <div className="col-6 text-start">Name</div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col-6 text-end">Roof dize</div>
                  <div className="col-6">..</div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col-6">Roof thickness</div>
                  <div className="col-6">..</div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="col-6">Location</div>
                  <div className="col-6">..</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col col-md-6 user-form bg-white py-4 d-flex flex-column">
          <div className="card">
            <div className="card-header pt-3 bg-success text-white">
              <h3>Log in to groendakmonitor</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mt-3">
                  <label className="form-label text-start w-100">
                    Password
                    <input type="password" className="form-control mt-2" />              
                  </label>
                </div>
              </form>
            </div>
            <div className="pt-0 card-body">
              <button className="ml-auto btn btn-primary float-end">Login</button>
            </div>
          </div>
        </div>   */}
      </div>
    </>
  )
}

export default Overview;