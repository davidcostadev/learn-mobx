import React from 'react';
import uuid from 'uuid';
import AddVehicleForm from './components/AddVehicleForm';
import VehicleTable from './components/VehicleTable';

import './App.css';

class ParkingControlApp extends React.Component {
  state = {
    vehicles: [
      {
        id: uuid(),
        createdAt: new Date(),
        name: 'Honda Fan',
        plate: 'ABC-1234'
      }
    ]
  };

  onAddVehicle = vehicle =>
    this.setState(({ vehicles }) => ({
      vehicles: [
        ...vehicles,
        {
          ...vehicle,
          id: uuid(),
          createdAt: new Date()
        }
      ]
    }));

  onExitedVehicle = exitedVehicle =>
    this.setState(({ vehicles }) => ({
      vehicles: vehicles.filter(vehicle => vehicle.id !== exitedVehicle.id)
    }));

  render() {
    return (
      <div className='page'>
        <div className='page__wrapper'>
          <h1>Parking Control</h1>
          <AddVehicleForm onAddVehicle={this.onAddVehicle} />
          <VehicleTable vehicles={this.state.vehicles} onExitedVehicle={this.onExitedVehicle} />
        </div>
      </div>
    );
  }
}

export default ParkingControlApp;
