"use client"; // Client component to enable React hooks

import { Provider } from "react-redux";
import store from "../redux/store"; // Import Redux store

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
