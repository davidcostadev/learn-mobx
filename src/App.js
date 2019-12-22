import React from 'react';
import { observer } from 'mobx-react';
import AddVehicleForm from './components/AddVehicleForm';
import VehicleTable from './components/VehicleTable';

import './App.css';

@observer
class ParkingControlApp extends React.Component {
  render() {
    const { vehicles, addVehicle, exitVehicle } = this.props.store;

    return (
      <div className='page'>
        <div className='page__wrapper'>
          <h1>Parking Control</h1>
          <AddVehicleForm onAddVehicle={addVehicle} />
          <VehicleTable vehicles={vehicles} onExitedVehicle={exitVehicle} />
        </div>
      </div>
    );
  }
}

export default ParkingControlApp;
