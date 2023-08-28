import React, { useEffect, useRef } from 'react';
import 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';

import { getGridColumns } from './columns';

const IdsDataGrid = () => {
  const dataGridRef = useRef();
  // TODO: Update grid data from the state
  // const [gridData, setGridData] = useState();

  useEffect(() => {
    async function fetchData() {
      // Do an ajax request
      const response = await fetch('/data/books.json');
      const data = await response.json();

      // Set columns
      dataGridRef.current.columns = getGridColumns(dataGridRef.current.formatters);

      // Set data
      dataGridRef.current.data = data;
    }
    fetchData();
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Data Grid
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-data-grid ref={dataGridRef} row-selection="multiple" label="Books" row-height="md"></ids-data-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsDataGrid;
