import React from 'react';
import 'ids-enterprise-wc/components/ids-counts/ids-counts';


const IdsCounts = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Counts
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Active <br /> Opportunities
            </ids-text>
          </ids-counts>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-counts color="base" href="#">
            <ids-text count-text>
              Open <br /> Incidents
            </ids-text>
            <ids-text count-value>2</ids-text>
          </ids-counts>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-counts color="base" href="#">
            <ids-text count-text>
              Escalated <br /> Incidents
            </ids-text>
            <ids-text count-value>4</ids-text>
          </ids-counts>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Open <br /> Projects
            </ids-text>
          </ids-counts>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-counts color="base" href="#">
            <ids-text count-value>7</ids-text>
            <ids-text count-text>
              Active <br /> Contacts
            </ids-text>
          </ids-counts>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCounts;
