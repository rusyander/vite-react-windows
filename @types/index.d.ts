type ProfileRole = 'admin' | 'user';

interface ProfileProps {
  id: number;
  email: string;
  avatar: string;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  role: ProfileRole;
  country: {
    id: number;
    label: string;
    code: string;
  };
}
