import React, { useRef } from 'react';
import 'ids-enterprise-wc/components/ids-toast/ids-toast';


const IdsToast = () => {
  const toastContainerRef = useRef();

  const handleToastAdd = () => {
    let toast = toastContainerRef.current.querySelector('ids-toast');
    if (!toast) {
      toast = document.createElement('ids-toast');
      toastContainerRef.current.appendChild(toast);
    }
    toast.show({
      title: 'Application Offline',
      message: 'This is a Toast message'
    });
  };

  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Toast
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-button onClick={handleToastAdd} appearance="secondary">
            <span>Toast Message</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <div ref={toastContainerRef} />
    </>
  );
};

export default IdsToast;
