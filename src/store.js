import { observable } from 'mobx';
import uuid from 'uuid';

class ObservableVehicleStore {
  @observable vehicles = [
    {
      id: uuid(),
      createdAt: new Date(),
      name: 'Honda Fan',
      plate: 'ABC-1234'
    }
  ];

  addVehicle = vehicle => {
    this.vehicles.push({
      ...vehicle,
      id: uuid(),
      createdAt: new Date()
    });
  };

  exitVehicle = exitedVehicle => {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== exitedVehicle.id);
  };
}

export default new ObservableVehicleStore();
