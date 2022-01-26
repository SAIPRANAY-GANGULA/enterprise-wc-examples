import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-card/ids-card';
import 'ids-enterprise-wc/ids-list-view/ids-list-view';

const IdsListView = () => {
  const listViewRef = useRef();

  useEffect(async () => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = listViewRef.current;

    // Do an ajax request
    const response = await fetch('/data/products.json');
    const data = await response.json();

    // Set the default template
    element.defaultTemplate = [
      '<ids-text font-size="16" type="h2">${productName}</ids-text>',
      '<ids-text font-size="12" type="span">Count: ${units}</ids-text>',
      '<ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>'
    ].join('\n');

    // Set data
    element.data = data;
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          List View
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2">
        <ids-layout-grid-cell col-span="1">
          <ids-card>
            <div slot="card-header">
              <ids-text font-size="20" type="h2">
                Card Title One
              </ids-text>
            </div>
            <div slot="card-content">
              <ids-list-view
                ref={listViewRef}
                virtual-scroll="true"
              ></ids-list-view>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsListView;
