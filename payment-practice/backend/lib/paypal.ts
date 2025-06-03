const paypal = require("@paypal/paypal-server-sdk");
const Client = paypal.Client;
const Environment = paypal.Environment;
const LogLevel = paypal.LogLevel;

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

export const paypalClient = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID!,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET!,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true,
    },
    logResponse: {
      logHeaders: true,
    },
  },
});
