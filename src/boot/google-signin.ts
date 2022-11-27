import { boot } from 'quasar/wrappers';
import GoogleSignInPlugin from "vue3-google-signin"

export default boot(({ app }) => {
  app.use(GoogleSignInPlugin, {
    clientId: process.env.GOOGLE_IDENTITY_CLIENT_ID,
  });
});
