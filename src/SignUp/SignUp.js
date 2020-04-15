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
    status: 'single',
    errors: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [],
    });
  };

  isFormValid = () => {
    const errors = [];

    if (this.isFiledEmpty()) {
      errors.push({ message: 'Fill in the empty fields.' });
    }

    if (this.isEmailValid()) {
      errors.push({ message: 'Your emial is incorrect.' });
    }

    if (this.isPhoneValid()) {
      errors.push({
        message:
          'Your phone number is incorrect. Must contain at least 4 characters but no more than 12 characters',
      });
    }

    if (errors.length) {
      this.setState({
        errors: errors,
      });
      return false;
    }

    return true;
  };

  isEmailValid = () => {
    return !this.state.email.includes('@');
  };

  isPhoneValid = () => {
    return this.state.phone.length < 4 || this.state.phone.length > 12;
  };

  isFiledEmpty = () => {
    return (
      !this.state.name.length ||
      !this.state.surname.length ||
      !this.state.email.length ||
      !this.state.phone.length ||
      !this.state.address.length ||
      !this.state.dataOfBirth.length ||
      !this.state.gender.length
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.isFormValid();

    if (!isValid) {
      return;
    }
    // const userDate = {
    //   name: this.state.name,
    //   surname: this.state.surname,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   address: this.state.address,
    //   dateOfBirth: this.state.dateOfBirth,
    //   gender: this.state.gender,
    // };
    // this.setState({
    //   data: this.state.data.concat(userDate),
    // });
  };

  render() {
    console.log('STATE', this.state);
    return (
      <div className="signUp main">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="wrapper">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlure}
              name="name"
              id="name"
              className="input"
              placeholder=" "
            />
            <label htmlFor="name" className="label">
              Name
            </label>
            {/* {this.state.errors &&
              this.state.errors.name &&
              this.state.errors.name.map((err) => <p>{err.message}</p>)} */}
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
            <label htmlFor="surname" className="label">
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
            <label htmlFor="email" className="label">
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
            <label htmlFor="phone" className="label">
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
            <label htmlFor="address" className="label">
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
            <label htmlFor="dataOfBirth" className="label">
              Data Of Birth
            </label>
          </div>

          <div className="wrapper-gender">
            <label htmlFor="female" className="label-gender">
              Female
              <input
                type="radio"
                value="female"
                onChange={this.handleChange}
                name="gender"
                id="female"
                checked={this.state.gender === 'female'}
                className="input-gender"
              />
            </label>
            <label htmlFor="male" className="label-gender">
              Male
              <input
                type="radio"
                value="male"
                onChange={this.handleChange}
                checked={this.state.gender === 'male'}
                name="gender"
                id="male"
                className="input-gender"
              />
            </label>
          </div>
          <div>
            <label htmlFor="select" className="label">
              Select
            </label>
            <select id="select" name="status" onChange={this.handleChange}>
              <option value="single">Single</option>
              <option value="maried" name="status" onChange={this.handleChange}>
                Maried
              </option>
            </select>
          </div>

          <button type="submit" className="btn btn-form">
            Add
          </button>
        </form>
        <div className="error-message">
          {this.state.errors.length > 0 &&
            this.state.errors.map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
        </div>
      </div>
    );
  }
}

export default SignUp;
