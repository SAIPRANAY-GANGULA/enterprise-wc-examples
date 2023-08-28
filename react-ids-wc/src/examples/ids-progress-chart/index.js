import React from 'react';
import 'ids-enterprise-wc/components/ids-progress-chart/ids-progress-chart';


const IdsProgressChart = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Progress Chart
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-progress-chart
            label-progress="90%"
            progress="90"
            label="dark"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="error"
            label="error"
            color="error"
            label-progress="33%"
            progress="33"
          ></ids-progress-chart>
          <ids-progress-chart
            color="success"
            label-progress="10 min"
            progress="10"
            label-total="1 hr"
            total="60"
            label="good"
          ></ids-progress-chart>
          <ids-progress-chart
            color="base"
            label-progress="10 cm"
            progress="10"
            label-total="25 cm"
            total="25"
            label="primary"
          ></ids-progress-chart>
          <ids-progress-chart
            color="#D66221"
            progress="10"
            label-total="100"
            total="100"
            label="#D66221"
          ></ids-progress-chart>
          <ids-progress-chart label="empty"></ids-progress-chart>
          <ids-progress-chart
            icon="error"
            color="warning"
            progress="10"
            label-total="100"
            total="100"
            label="alert"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="alert"
            color="caution"
            progress="10"
            label-total="100"
            total="100"
            label="alert-yellow"
          ></ids-progress-chart>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-progress-chart
            size="small"
            progress="10"
            total="100"
            label="dark"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="error"
            size="small"
            color="error"
            progress="10"
            total="100"
            label="error"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="success"
            progress="10"
            total="100"
            label="good"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="base"
            progress="10"
            total="100"
            label="primary"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="#D66221"
            progress="10"
            total="100"
            label="#D66221"
          ></ids-progress-chart>
          <ids-progress-chart size="small" label="empty"></ids-progress-chart>
          <ids-progress-chart
            icon="alert"
            size="small"
            color="warning"
            progress="10"
            total="100"
            label="alert"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="alert"
            size="small"
            color="caution"
            progress="10"
            total="100"
            label="alert-yellow"
          ></ids-progress-chart>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-progress-chart
            size="small"
            label-progress="13h"
            progress="13"
            label-total="13h"
            total="13"
            label="dark"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="error"
            size="small"
            color="error"
            label-progress="13h"
            progress="13"
            label-total="26h"
            total="26"
            label="error"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="success"
            label-progress="13h"
            progress="13"
            label-total="5h"
            total="5"
            label="good"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="base"
            label-progress="13h"
            progress="13"
            label-total="14h"
            total="14"
            label="primary"
          ></ids-progress-chart>
          <ids-progress-chart
            size="small"
            color="#D66221"
            label-progress="13h"
            progress="13"
            label-total="15h"
            total="15"
            label="#D66221"
          ></ids-progress-chart>
          <ids-progress-chart size="small" label="empty"></ids-progress-chart>
          <ids-progress-chart
            icon="alert"
            size="small"
            color="warning"
            label-progress="13h"
            progress="13"
            label-total="16h"
            total="16"
            label="alert"
          ></ids-progress-chart>
          <ids-progress-chart
            icon="alert"
            size="small"
            color="caution"
            label-progress="13h"
            progress="13"
            label-total="20h"
            total="20"
            label="alert-yellow"
          ></ids-progress-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsProgressChart;
