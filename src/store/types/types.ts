export type User = {
  id: string;
  role: string;
  dateCreated: string;
};

export interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: { id: string; role: string; dateCreated: string }) => void;
  logout: () => void;
}
