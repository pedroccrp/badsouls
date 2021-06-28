const tokenKey = 'Authorization';

const auth = {
  storeToken: function (token: string) {
    if (!token) {
      return;
    }

    // TODO: change to cookie
    localStorage.setItem(tokenKey, token);
  },

  getToken: function (): string {
    // TODO: change to cookie
    return localStorage.getItem(tokenKey) || '';
  },
};

export default auth;
