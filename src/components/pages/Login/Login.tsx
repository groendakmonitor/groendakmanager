import { API_URL } from "api";
import { setAuthToken } from "authentication";
import { useState } from "react";
import useLocation from "wouter/use-location";

const Login = () => {

  const [_location, setLocation] = useLocation();
  const [password, setPassword] = useState<string>("safehouse ominous overdrive")

  const handleLogin = () => {
    fetch(`${API_URL}/login`, {
      method: 'post',
      headers: [['Content-Type', 'application/json']],
      body: JSON.stringify({
        password
      })
    }).then((response) => {
      if(response.status === 401) {
        console.warn("WRONG PW")
      } else {
        response.text().then((response) => {
          setAuthToken(response);
          setLocation("/");

        });
      }
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col col-md-6 user-form bg-white py-4 d-flex flex-column">
        <div className="card">
          <div className="card-header pt-3 bg-success text-white">
            <h3>Log in to groendakmonitor</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mt-3">
                <label className="form-label text-start w-100">
                  Password
                  <input type="password" className="form-control mt-2" onChange={(e) => {setPassword(e.currentTarget.value)}} value={password} />              
                </label>
              </div>
            </form>
          </div>
          <div className="pt-0 card-body">
            <button className="ml-auto btn btn-primary float-end" onClick={handleLogin} >
              Login
            </button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Login;