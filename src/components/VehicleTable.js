import React from 'react';
import dateForm from '../utils/dateFormat';

import './VehicleTable.css';

class VehicleTable extends React.Component {
  render() {
    const { vehicles, onExitedVehicle } = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th className='text-right'>Plate</th>
            <th className='text-right'>Entry Date</th>
            <th className='text-right'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!vehicles.length && (
            <tr>
              <td colSpan={4} className='text-center'>
                There's no data to show
              </td>
            </tr>
          )}
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.name}</td>
              <td className='text-right'>{vehicle.plate}</td>
              <td className='text-right'>{dateForm(vehicle.createdAt)}</td>
              <td className='text-right'>
                <div className='btn-group'>
                  <button
                    type='button'
                    className='btn btn--red'
                    onClick={() => onExitedVehicle(vehicle)}
                  >
                    Exited
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default VehicleTable;
