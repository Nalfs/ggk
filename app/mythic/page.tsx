"use client";
import React, { Suspense } from "react";
import Heading from "@/components/Heading";

const LazyIframe = React.lazy(() => import("../../components/LazyIframe"));

const iframeSrc =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKz6KT_z7RDPw0GuPIELygGOgcWysIipJD_YYPnWO5Bkxksg/viewform?embedded=true";

const Page = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex-col justify-center">
          <div className="mx-auto  w-[200px]">
            <Heading>Mythic Raiding</Heading>
          </div>

          <div
            style={{
              marginTop: "20px",
              maxWidth: "100%",
              height: "100vh",
            }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              }
            >
              <LazyIframe src={iframeSrc} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
