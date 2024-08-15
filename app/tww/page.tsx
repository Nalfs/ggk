import React, { Suspense } from "react";
import Heading from "@/components/Heading";
import { Skeleton } from "@/components/ui/skeleton"; // Example ShadCN component for loading placeholder

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
                  height: "1200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton className="w-full h-full" /> {/* Loading Skeleton */}
              </div>
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
