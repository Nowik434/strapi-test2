module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "1m",
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'marekmarczak@interia.pl',
        defaultReplyTo: 'marekmarczak@interia.pl',
      },
    },
  },
});
