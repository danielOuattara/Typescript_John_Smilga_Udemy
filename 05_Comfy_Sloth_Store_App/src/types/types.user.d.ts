type User = {
  username: string;
  jwt: string;
};

type UserState = {
  user: User | null;
};
