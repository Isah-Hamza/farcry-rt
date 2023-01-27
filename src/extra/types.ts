export interface ISupport {
  _id: string;
  support_type: string;
  name: string;
  email: string;
  status: string;
  gender: string;
  phone: string;
  address: string;
  message: string;
  createdAt?: string;
  imgUrl: string;
  assigned_body: {
    name: string;
    address: string;
    description:string;
  };
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  imgUrl: string;
  occupation: string;
  marital_status: string;
  age: string;
  gender: string;
}

export interface IPartner {
  name: string;
  email: string;
  description: string;
  partner_type: string;
}
