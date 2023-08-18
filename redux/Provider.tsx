import React from "react";
import { Provider } from "react-redux";

import store from "./store";

interface Props {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<Props> = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;