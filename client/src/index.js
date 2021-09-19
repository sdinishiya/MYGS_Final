import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "assets/styles/index.css";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {SnackbarProvider} from "notistack";
import Routes from "./navigation/Routes";
import {persistedStore, reduxPersistStore} from "./store/persistStore";


ReactDOM.render(
    <Provider store={reduxPersistStore}>
      <PersistGate
          persistor={persistedStore}>
        <SnackbarProvider>
          <Routes />
        </SnackbarProvider>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
);
