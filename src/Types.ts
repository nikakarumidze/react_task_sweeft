export interface User {
  id: number;
  imageUrl: string;
  title: string;
  prefix: string;
  name: string;
  lastName: string;
}
export interface UserProfileType {
    data: {
      id: number;
      name: string;
      title: string;
      jobDescriptor: string;
      jobArea: string;
      jobType: string;
      email: string;
      ip: string;
      company: {
        name: string;
        suffix: string;
      };
      address: {
        zipCode: string;
        city: string;
        streetAddress: string;
        country: string;
        state: string;
      };
    };
  }