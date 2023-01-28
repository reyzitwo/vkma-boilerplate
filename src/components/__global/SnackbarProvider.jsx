import React from "react";
import { useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";

export default function SnackbarProvider({ children }) {
  const isDesktop = useRecoilValue(getIsDesktop);

  return (
    <>
      {children}

      <Toaster
        toastOptions={{
          className: "toast",
        }}
        gutter={isDesktop ? 8 : -20}
        position={isDesktop ? "bottom-left" : "top-center"}
        reverseOrder={false}
      />
    </>
  );
}
