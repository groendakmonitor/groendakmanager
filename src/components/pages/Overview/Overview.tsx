import { getAuthHeader, getAuthToken } from "authentication";
import Header from "components/misc/Header";
import Page from "components/misc/Page";
import React, { useEffect, useState } from "react";
import useLocation from "wouter/use-location";
import { Customer } from "../../../models/customer";
import Loading from "../../misc/Loading";
import CustomerDetails from "./CustomerDetails";
import CustomerList from "./CustomerList";

const Overview = () => {
  const [_location, setLocation] = useLocation();
  const [data, setData] = useState<Customer[]>()
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>()
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setLocation("/login");
      return;
    }
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/customers`, {
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
      fetch(`${process.env.REACT_APP_API_URL}/customer`, {
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

  const handleUpdateCustomer = (customerData: Customer) => {
    console.log(customerData)
    setLoading(true);
    // Update customer on backend
    fetch(`${process.env.REACT_APP_API_URL}/customer`, {
      method: 'put',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
      body: JSON.stringify(customerData)
    }).then<Customer[]>((response) => response.json())
    .then((response) => {
      console.log('done', response)
      setData(response);
      setLoading(false);
    })
  }

  return (
    <Page>
      <Header title="Customers">
        <button type="button" className="btn btn-success" onClick={handleAddCustomer}>Add customer</button>
      </Header>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h3>Customers</h3>              
              </div>
              <div className="card-body p-0">
              { loading && <Loading />}
              { data && <CustomerList data={data} onCustomerSelect={setSelectedCustomer} selectedCustomer={selectedCustomer} /> }
              </div>
            </div>
          </div>
          <div className="col">
            { selectedCustomer && <CustomerDetails data={selectedCustomer} onUpdateCustomer={handleUpdateCustomer} /> }
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Overview;