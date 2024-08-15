import React from "react";

const LazyIframe = () => {
  return (
    <iframe
      src="https://docs.google.com/forms/d/1-AkoP08BVeLt2nF2t42MXpblpnDSh4HUhlOsPt6-o2M/viewform?embedded=true"
      width="100%"
      height="1200px"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      style={{ border: "none" }}
    >
      Loading…
    </iframe>
  );
};

export default LazyIframe;
