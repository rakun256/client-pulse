const fakeToken = 'mock.jwt.token.here';

const mockUser = {
  email: 'admin@clientpulse.app',
  name: 'Admin User',
  role: 'ADMIN',
};

const login = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@clientpulse.app' && password === '123456') {
        resolve({
          user: mockUser,
          token: fakeToken,
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 700);
  });
};

const register = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'existing@clientpulse.app') {
        reject(new Error('User with this email already exists.'));
      } else {
        resolve({
          user: {
            email: data.email,
            name: `${data.firstname} ${data.lastname}`,
            role: 'USER',
          },
          token: fakeToken,
        });
      }
    }, 800);
  });
};

const authService = {
  login, register,
};

export default authService;