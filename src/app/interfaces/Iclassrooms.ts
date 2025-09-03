export interface Iclassrooms {
  '@id': string;
  id: string;
  name: string;
  capacity: number;
  registerDeadline: string;
  nbStudents: number;
}

export interface IclassroomForm{

  name: string,
  capacity: number,
  registerDeadline: string,
  students?: [string],

}
