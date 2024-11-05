import React from 'react';

const Map = () => {
  return (
    <iframe
      title="Location Map"
      src="https://www.bing.com/maps/embed?osid=5bb925b7-6763-41d6-bec8-45dd64a6410b&cp=45.725072~9.557784&lvl=16&pi=0&imgid=2d912b34-5782-43f0-80f1-6b45e99ca953&v=2&sV=2&form=S00027"
      width="100%"
      height="500vh"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default Map;
