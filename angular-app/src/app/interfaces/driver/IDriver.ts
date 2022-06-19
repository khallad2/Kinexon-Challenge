export interface IDriver {
  id: number // should be string UUID
  carMake: string,
  driverCityOrigin: string,
  driverGender: string,
  driverInfo: string,
  driverLanguage: string,
  driverName: string,
  driverPhone: string,
  kmDriven: number,
  location: number[]
}
