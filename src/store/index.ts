import { configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";

declare global {
  interface Window {
    order_id: number;
    timeout: number;
    show_credit: boolean;
    urlok: string;
    urlfail: string;
    result_time: number;
  }
}

const preloadedApp = {
  order_id: window.order_id,
  timeout: window.timeout,
  show_credit: window.show_credit,
  urlok: window.urlok,
  urlfail: window.urlfail,
  result_time: window.result_time
};

export const store = configureStore({
  preloadedState: {
    app: preloadedApp
  },
  reducer: { app }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
