import React from 'react';
import 'ids-enterprise-wc/components/ids-upload/ids-upload';


const IdsUpload = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Ids Upload
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" gap="md">
        <ids-layout-grid-cell>
          <ids-upload label="Single File"></ids-upload>
          <ids-upload label="Multiple Files" multiple="true"></ids-upload>
          <ids-upload
            label="Multiple Files Accept (.cvs,.xls,.xlsx)"
            multiple="true"
            accept=".cvs,.xls,.xlsx"
          ></ids-upload>
          <ids-upload label="Readonly" readonly="true"></ids-upload>
          <ids-upload
            label="Disabled"
            disabled="true"
            value="Readme.txt"
          ></ids-upload>
          <ids-upload label="Dirty Tracker" dirty-tracker="true"></ids-upload>
          <ids-upload label="Required" validate="required"></ids-upload>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsUpload;
