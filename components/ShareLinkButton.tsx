"use client";
import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 150000);
  };
  return (
    <button
      onClick={handleClick}
      className="border flex justify-center mx-auto items-center px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link copied!" : "Share link"}
    </button>
  );
}
// export default function ShareLinkButton({ url, title, className, children }) {
//   const [copied, setCopied] = React.useState(false);
//   const handleClick = React.useCallback(() => {
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1000);
//   }, [url]);
//   return React.createElement(
//     "button",
//     {
//       className: `bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded ${className}`,
//       onClick: handleClick,
//     },
//     children,
//     copied &&
//       React.createElement(
//         "span",
//         { className: "ml-2 text-xs text-white" },
//         "Copied!"
//       )
//   );
// }
// ShareLinkButton.displayName = "ShareLinkButton";
// ShareLinkButton.__variants = [
//   {
//     name: "primary",
//     type: "variant",
//     value: "primary",
//   },
//   {
//     name: "secondary",
//     type: "variant",
//     value: "secondary",
//   },
// ];
