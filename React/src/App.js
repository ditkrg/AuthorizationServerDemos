import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninOidc from "./pages/signin-oidc";
import SignoutOidc from "./pages/signout-oidc";
import Home from "./pages/home";
import Login from "./pages/login";
import { Provider } from "react-redux";
import store from "./store";
import userManager, { loadUserFromStorage } from "./services/userService";
import AuthProvider from "./utils/authProvider";
import PrivateRoute from "./utils/protectedRoute";
import "./index.css";
import { storeUser } from "./actions/authActions";

function App() {
  useEffect(() => {
    // Commented out not to check the localStorage for the user's existence ** Temporary **
    // fetch current user from cookies
    // loadUserFromStorage(store);
  }, []);

  // Should be removed ** Temporary **
  const logUserIn = () => {
    const user = { profile: { given_name: "John Doe" } };
    console.log(`User logged in!`);
    store.dispatch(storeUser(user));
  };

  // ** Temporary **
  logUserIn();

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signout-oidc" component={SignoutOidc} />
            <Route path="/signin-oidc" component={SigninOidc} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
