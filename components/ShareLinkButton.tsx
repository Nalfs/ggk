"use client";
import React from "react";

export default function ShareLinkButton() {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 rounded text-slate-500 text-sm
                   hover:bg-orange-100 hover:text-slate-700"
    >
      Share link
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
