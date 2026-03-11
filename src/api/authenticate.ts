export type User = {
  id: number;
  name: string;
  email: string;
};

export function authenticate(): Promise<User> {
  return new Promise<User>((resolve) => {
    // Simulate an API call
    setTimeout(() => {
      const user: User = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      resolve(user);
    }, 1000);
  });
}
