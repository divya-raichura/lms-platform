"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  /**
   *     import react quill without ssr as "use client" is not enough to disable server side rendering as it is still rendered once on the server and then it runs again on the client side
   
   *    that won't work with react quill, as we will get hydration errors, so import it like this to avoid that
   */
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};
