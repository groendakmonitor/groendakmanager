const Login = () => (
<>
  <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="col col-md-6 user-form bg-white py-4 d-flex flex-column">
      <div className="card">
        <div className="card-body">
        <form>
          <div className="mt-3">
            <label className="form-label text-start w-100">
              Password
              <input type="password" className="form-control" />              
            </label>
          </div>
        </form>
        </div>
        <div className="pt-0 card-body">
          <button className="ml-auto btn btn-primary float-end">Login</button>
        </div>
      </div>
    </div>  
  </div>
</>
)

export default Login;