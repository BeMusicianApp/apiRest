const config = {
  PORT: 8000,
  HASH_PREFIX: "$2b$08$",
  JWT_SECRET: "b3715d5693ef63a7f77454f671a3270a",
  RESTRICTED_ROUTES : {
    "/profil": (user) => user.role === 1,
    "/admin": (user) => user.role === 2,
    "/account/*": (user, params) =>  user.role > 0 && user.id == params.id,
  },
  origin: 'https://bemusician.fr',
};

module.exports = config;