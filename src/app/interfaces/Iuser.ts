export interface Iuser{
  _id: number;
  name: string;
  firstname: string;
  classroom: string;
  email: string;

}

export interface IuserForm{
  name: string;
  firstname: string;
  registeredAt: string;
  classroom: string;
  email: string;
}

export interface IsigninForm{
  username: string;
  password: string;
}

export interface Istudents {
  id: number;
  name: string;
  firstname: string;
  registeredAt: string;
  classroom: string;
  email: string;
}
