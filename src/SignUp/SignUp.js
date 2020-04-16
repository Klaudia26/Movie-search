import React, { Component } from 'react';
import './SignUp.scss';

class UserForm extends Component {
  state = {
    user: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
      dataOfBirth: '',
      gender: 'female',
      status: 'single',
    },
    errors: [],
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        user: { ...this.props.user },
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        user: { ...this.props.user },
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
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
    return !this.state.user.email.includes('@');
  };

  isPhoneValid = () => {
    return (
      this.state.user.phone.length < 4 || this.state.user.phone.length > 12
    );
  };

  isFiledEmpty = () => {
    console.log(this.state);
    return (
      !this.state.user.name.length ||
      !this.state.user.surname.length ||
      !this.state.user.email.length ||
      !this.state.user.phone.length ||
      !this.state.user.address.length ||
      !this.state.user.dataOfBirth.length ||
      !this.state.user.gender.length
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.isFormValid();

    if (!isValid) {
      return;
    }
    this.props.saveUser(this.state.user);
  };

  render() {
    return (
      <div className="signUp main">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="wrapper">
            <input
              type="text"
              value={this.state.user.name}
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
          </div>
          <div className="wrapper">
            <input
              type="text"
              value={this.state.user.surname}
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
              value={this.state.user.email}
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
              value={this.state.user.phone}
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
              value={this.state.user.address}
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
              value={this.state.user.dataOfBirth}
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
                checked={this.state.user.gender === 'female'}
                className="input-gender"
              />
            </label>
            <label htmlFor="male" className="label-gender">
              Male
              <input
                type="radio"
                value="male"
                onChange={this.handleChange}
                checked={this.state.user.gender === 'male'}
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

export default UserForm;
