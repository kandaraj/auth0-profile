interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '7494awUkGLh_87jGhiIaOApFz4nN0t33',
  domain: 'aitsl.au.auth0.com',
  callbackURL: 'http://localhost:3000/callback',
  apiUrl: 'https://aitsl-client.aitsl.edu.au/'
};
