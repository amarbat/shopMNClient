export default function authHeader () {
  const user              = JSON.parse (localStorage.getItem ('user'));

  let accessTokens        = {};

  if (user) {
    if (user.accessToken) {
     accessTokens.['x-access-token']
                          = user.accessToken;
    }
  }

  return accessTokens;
}