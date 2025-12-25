"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { type AppStore, makeStore } from "@/lib/redux/store";
import type { Persistor } from "redux-persist";
import { useAppStore } from "@/hooks/redux";

const PersistLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600">loading...</span>
  </div>
);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistProvider>{children}</PersistProvider>
    </Provider>
  );
}

export function PersistProvider({
  children,
  Loader = <PersistLoading />,
}: {
  children: React.ReactNode;
  Loader?: React.ReactNode;
}) {
  const store = useAppStore();
  const persistorRef = useRef<Persistor | null>(null);

  if (!persistorRef.current) {
    persistorRef.current = persistStore(store);
  }

  return (
    <PersistGate loading={Loader} persistor={persistorRef.current}>
      {children}
    </PersistGate>
  );
}
