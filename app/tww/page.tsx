"use client";
import React, { Suspense } from "react";
import Heading from "@/components/Heading";
import { useGetResponses } from "@/lib/responses";
import ResultsComponent from "@/components/ResultsComponent";
// import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the iframe component
const LazyIframe = React.lazy(() => import("../../components/LazyIframe"));

const Page = () => {
  const csvUrl = process.env.CSV_URL || "";
  console.log("csvUrl", csvUrl);
  const { data, loading, error } = useGetResponses();
  console.log("page data: ", data);
  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <div>
            <Heading>The War Within</Heading>
          </div>
          <p className="flex items-center space-x-2">
            <span>Vi tar tempen</span>
            <svg
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </p>
          <p>Se resultat</p>
          <ResultsComponent data={data} />
          <div
            style={{
              marginTop: "20px",
              maxWidth: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    // height: "1200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              }
            >
              <LazyIframe />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import Heading from "@/components/Heading";
// import { Skeleton } from "@/components/ui/skeleton";

// // Lazy load the iframe component
// const LazyIframe = React.lazy(() => import("../../components/LazyIframe"));

// const Page = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 20); // Adjust this delay as needed to simulate loading

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="container mx-auto py-10">
//         <div>
//           <Heading>The War Within</Heading>
//         </div>
//         <div
//           style={{
//             maxWidth: "100%",
//             height: "100vh",
//             overflow: "hidden",
//           }}
//         >
//           {loading ? (
//             <div
//               style={{
//                 width: "100%",
//                 height: "1200px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Skeleton className="w-full h-full" /> {/* Show Skeleton */}
//             </div>
//           ) : (
//             <Suspense
//               fallback={
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "1200px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Skeleton className="w-full h-full" />
//                 </div>
//               }
//             >
//               <LazyIframe />
//             </Suspense>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;