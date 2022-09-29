module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "5m",
      },
    },
  },
  email {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'marekmarczak@interia.pl',
        defaultReplyTo: 'marekmarczak@interia.pl',
      },
    },
  },
});
