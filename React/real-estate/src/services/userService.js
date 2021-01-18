import { UserManager } from "oidc-client";
import { storeUserError, storeUser } from "../actions/authActions";

const config = {
  authority: "http://localhost:10000",
  client_id: "real-estate-react-app",
  redirect_uri: "http://localhost:4000/signin-oidc",
  response_type: "code",
  scope: "openid profile real-estate-api",
  post_logout_redirect_uri: "http://localhost:4000",
};

const userManager = new UserManager(config);

export async function loadUserFromStorage(store) {
  try {
    let user = await userManager.getUser();
    if (!user) {
      return store.dispatch(storeUserError());
    }
    store.dispatch(storeUser(user));
  } catch (e) {
    console.error(`User not found: ${e}`);
    store.dispatch(storeUserError());
  }
}

export function signinRedirect() {
  return userManager.signinRedirect();
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback();
}

export async function signoutRedirect() {
  var user = await userManager.getUser();
  let id_token = null;
  if (user) id_token = user.id_token;

  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirect({ id_token_hint: id_token });
}

export function signoutRedirectCallback() {
  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirectCallback();
}

export default userManager;
