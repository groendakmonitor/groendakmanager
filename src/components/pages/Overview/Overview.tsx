import { getAuthHeader, getAuthToken } from "misc/npmauthentication";
import Header from "components/misc/Header";
import Page from "components/misc/Page";
import { Water } from "models/water";
import React, { useEffect, useState } from "react";
import useLocation from "wouter/use-location";
import { CustomerData, CustomerListData } from "../../../models/customer";
import Loading from "../../misc/Loading";
import CustomerDetails from "./CustomerDetails";
import CustomerList from "./CustomerList";
import WaterList from "./WaterList";

const Overview = () => {
  const [_location, setLocation] = useLocation();
  const [data, setData] = useState<CustomerListData[]>()
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerData>()
  const [loading, setLoading] = useState(false);
  const [selectedCustomerWater, setSelectedCustomerWater] = useState<Water[]>()
  
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
    .then<CustomerListData[]>((response) => response.json())
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
      }).then<CustomerListData[]>((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
    }
  }

  const handleUpdateCustomer = (customerData: CustomerData) => {
    setLoading(true);
    // Update customer on backend
    fetch(`${process.env.REACT_APP_API_URL}/customer`, {
      method: 'put',
      headers: [['Content-Type', 'application/json'], getAuthHeader()],
      body: JSON.stringify(customerData)
    }).then<CustomerListData[]>((response) => response.json())
    .then((response) => {
      setData(response);
      setLoading(false);
    })
  }

  const handleDeleteCustomer = () => {
    if (selectedCustomer){
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Are you sure you want to delete customer "${selectedCustomer.name}" (id: ${selectedCustomer.id}) with ${selectedCustomerWater?.length} water data points` )){
        console.log('go!')
      }
    }
  }

  useEffect(() => {
    // Fetch water for selected customer
    if (selectedCustomer) {
      fetch(`${process.env.REACT_APP_API_URL}/water/${selectedCustomer.id}`, {
        method: 'get',
        headers: [['Content-Type', 'application/json'], getAuthHeader()],
      })
      .then<Water[]>((response) => response.json())
      .then((response) => {
        setSelectedCustomerWater(response);
      })
    }
  },[selectedCustomer]);

  const handleAddingWater = (incoming: number, outgoing: number) => {
    if (selectedCustomer) {
      fetch(`${process.env.REACT_APP_API_URL}/water`, {
        method: 'post',
        headers: [['Content-Type', 'application/json'], getAuthHeader()],
        body: JSON.stringify({
          id: selectedCustomer.id,
          in: incoming,
          out: outgoing
        })
      }).then(() => {
        // fetch water
        if (selectedCustomer) {
          fetch(`${process.env.REACT_APP_API_URL}/water/${selectedCustomer.id}`, {
            method: 'get',
            headers: [['Content-Type', 'application/json'], getAuthHeader()],
          })
          .then<Water[]>((response) => response.json())
          .then((response) => {
            setSelectedCustomerWater(response);
          })
        }
      })
    }
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
            { selectedCustomer && <CustomerDetails data={selectedCustomer} onUpdateCustomer={handleUpdateCustomer} onDeleteCustomer={handleDeleteCustomer}/> }
            { selectedCustomerWater && <WaterList data={selectedCustomerWater} onAddWater={handleAddingWater} />}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Overview;