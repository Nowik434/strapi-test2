module.exports = ({ env }) => ({
  email: {
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
