const config = {
  PORT: 8000,
  HASH_PREFIX: "$2b$08$",
  JWT_SECRET: "",
  RESTRICTED_ROUTES : {
    "/profil": (user) => user.role === 1,
    "/admin": (user) => user.role === 2,
    "/account/*": (user, params) =>  user.role > 0 && user.id == params.id,
  },
  origin: 'https://bemusician.fr',
};

module.exports = config;
