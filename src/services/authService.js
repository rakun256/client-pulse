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

const authService = {
  login,
};

export default authService;