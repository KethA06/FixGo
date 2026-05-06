export type Role = 'ROLE_CUSTOMER' | 'ROLE_SERVICE_PROVIDER' | 'ROLE_COMPANY' | 'ROLE_ADMIN';

export interface User {
  id: number;
  email: string;
  roles: Role[];
  firstName?: string;
  lastName?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    id: number;
    email: string;
    roles: Role[];
  };
}
