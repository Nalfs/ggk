import React, { Suspense } from "react";
import Heading from "@/components/Heading";
// import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the iframe component
const LazyIframe = React.lazy(() => import("../../components/LazyIframe"));

const page = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div>
          <Heading>The War Within</Heading>
        </div>
        <div
          style={{
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
    </>
  );
};

export default page;

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
