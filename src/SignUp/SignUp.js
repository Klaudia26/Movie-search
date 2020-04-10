import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    date: [],
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    dataOfBirth: '',
    gender: 'female',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const userDate = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
    };
    e.preventDefault();
    this.setState({
      data: this.state.data.concat(userDate),
    });
  };
  render() {
    return (
      <div className="signUp">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="wrapper">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              id="name"
              className="input"
              placeholder=" "
            />
            <label for="name" className="label">
              Name
            </label>
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
              name="surname"
              id="surname"
              className="input"
              placeholder=" "
            />
            <label for="surname" className="label">
              Surname
            </label>
          </div>

          <div className="wrapper">
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              className="input"
              placeholder=" "
            />
            <label for="email" className="label">
              Email
            </label>
          </div>

          <div className="wrapper">
            <input
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
              id="phone"
              className="input"
              placeholder=" "
            />
            <label for="phone" className="label">
              Phone
            </label>
          </div>

          <div className="wrapper">
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
              id="address"
              className="input"
              placeholder=" "
            />
            <label for="address" className="label">
              Address
            </label>
          </div>

          <div className="wrapper">
            <input
              type="date"
              value={this.state.dataOfBirth}
              onChange={this.handleChange}
              name="dataOfBirth"
              id="dataOfBirth"
              className="input"
              placeholder=" "
            />
            <label for="dataOfBirth" className="label">
              Data Of Birth
            </label>
          </div>

          <div className="wrapper-gender">
            <label for="female" className="label-gender">
              Female
              <input
                type="radio"
                value={this.state.gender}
                onChange={this.handleChange}
                name="female"
                id="female"
                className="input-gender"
              />
            </label>
            <label for="male" className="label-gender">
              Male
              <input
                type="radio"
                value={this.state.gender}
                onChange={this.handleChange}
                name="male"
                id="male"
                className="input-gender"
              />
            </label>
          </div>
          <div>
            <label for="select" className="label">
              Select
            </label>
            <select id="select">
              <option value="single">Single</option>
              <option value="maried">Maried</option>
            </select>
          </div>

          <button type="submit" className="btn btn-form">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
