import React from 'react';
import './AddVehicleForm.css';

class AddVehicleForm extends React.Component {
  state = {
    name: '',
    plate: ''
  };

  onAddVehicle = event => {
    event.preventDefault();

    this.props.onAddVehicle(this.state);
    this.setState({
      name: '',
      plate: ''
    });
  };

  handleInput = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    const { name, plate } = this.state;
    return (
      <form className='form' onSubmit={this.onAddVehicle}>
        <h3 className='text-center'>New Vehicle</h3>
        <div className='field'>
          <label htmlFor='name'>Vehicle</label>
          <input type='text' name='name' value={name} onChange={this.handleInput} />
        </div>
        <div className='field'>
          <label htmlFor='plate'>Plate</label>
          <input
            type='text'
            name='plate'
            value={plate}
            onChange={this.handleInput}
            placeholder='XXX-9999'
          />
        </div>
        <div className='form__footer'>
          <button className='btn btn--blue' disabled={!plate.trim() || !name.trim()}>
            Add Vehicle
          </button>
        </div>
      </form>
    );
  }
}

export default AddVehicleForm;
