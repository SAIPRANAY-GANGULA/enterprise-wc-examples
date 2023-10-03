import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-button/ids-button';


const IdsButton = () => {
  const buttonRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const button = buttonRef.current;

    // Event handler to be used in attach and cleanup event listener
    const handleClick = e => {
      e.target.text = 'Clicked';
    };

    // Attach event listener
    button.addEventListener('click', handleClick);

    // Cleanup event listener on React component unmount
    return () => button.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-text font-size="12" type="h1">
          Buttons
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-button
            appearance="primary"
            onClick={e => {
              e.target.text = 'Clicked';
            }}
          >
            <span>React onClick synthetic event</span>
          </ids-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-button appearance="secondary" ref={buttonRef}>
            <span>Manually attached event listener</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsButton;
