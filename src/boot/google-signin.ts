import { boot } from 'quasar/wrappers';
import GoogleSignInPlugin from "vue3-google-signin"

export default boot(({ app }) => {
  app.use(GoogleSignInPlugin, {
    clientId: '680414393195-ikkj5vafetq5q67t499k60n7b1hpiuaf.apps.googleusercontent.com',
  });
});
