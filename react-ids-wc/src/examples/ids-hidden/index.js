import React from 'react';
import 'ids-enterprise-wc/components/ids-hidden/ids-hidden';

const IdsHidden = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Hidden
        </ids-text>
      </ids-layout-grid>

      <ids-hidden hide-up="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title One
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>

      <ids-hidden hide-down="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title Two
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>
    </>
  );
};

export default IdsHidden;
