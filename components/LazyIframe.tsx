import React from "react";

interface LazyIframeProps {
  src: string;
}

const LazyIframe: React.FC<LazyIframeProps> = ({ src }) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="1200px"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
  );
};

export default LazyIframe;
