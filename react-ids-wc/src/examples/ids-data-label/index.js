import React from 'react';
import 'ids-enterprise-wc/components/ids-data-label/ids-data-label';

const IdsDataLabel = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Data Label
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" gap="md">
        <ids-data-label label="Shipping to" label-position="left">
          Los Angeles, California 90001 USA
        </ids-data-label>
        <ids-data-label label="Shipping to">
          Los Angeles, California 90001 USA
        </ids-data-label>
      </ids-layout-grid>
    </>
  );
};

export default IdsDataLabel;
