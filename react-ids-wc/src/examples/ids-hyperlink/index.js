import React from 'react';
import 'ids-enterprise-wc/components/ids-hyperlink/ids-hyperlink';


const IdsHyperlink = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Hyperlink
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-hyperlink href="http://www.example.com" target="_blank">
            Normal Link
          </ids-hyperlink>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Hyperlink (disabled)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-hyperlink
            href="http://www.example.com"
            disabled="true"
            target="_blank"
          >
            Disabled Link
          </ids-hyperlink>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Hyperlink with Multiple Text Elements
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-hyperlink
            href="http://www.example.com"
            target="_blank"
            text-decoration="none"
          >
            <ids-text font-size="20" color="unset">
              Part One
            </ids-text>
            <ids-text font-size="14" color="unset">
              Part Two
            </ids-text>
          </ids-hyperlink>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsHyperlink;
