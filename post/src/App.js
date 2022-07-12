import React, { useState } from 'react';
import Axios from 'axios';
import './App.css'
const App = () => {
  // const url = "http://127.0.0.1:3500/post";
  const url2 = "https://127.0.0.1:7180/api/Profile";

  const [profile, setProfile] = useState({
    Name: "",
    Address: "",
    Phone: "",
  })

  function submit(e) {
    e.preventDefault()
    Axios.post(url2,
      {
        id: new Date().getTime(),
        name: profile.Name,
        address: profile.Address,
        phone: profile.Phone,
      })
      .then(
        res => { console.log(res.data) }
      )
  }
  function handle(e) {

    const newprofile = { ...profile }
    newprofile[e.target.id] = e.target.value
    setProfile(newprofile);
    console.log(newprofile);
  }
  return (

    <div>
      <div className="form-container">
        <form onSubmit={submit}>
          <h1>Register now!</h1>

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text"
              id="Name"
              onChange={(e) => { handle(e) }}
              required
              value={profile.Name}
              placeholder="Tsireledzo...." />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="Address"
              onChange={(e) => { handle(e) }}
              value={profile.Address}
              required
              placeholder="444 Diplomandi Cres..."
            />
          </div>
          <div className="form-field ">
            <label htmlFor="phone">Phone</label>
            <input type="text"
              onChange={(e) => { handle(e) }}
              value={profile.Phone}
              required
              id="Phone"
              placeholder="example@mail.com" />
          </div>

          <div className="form-field submit-field">
            <button type='submit' >Submit </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App