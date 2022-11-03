import React from 'react';
import 'ids-enterprise-wc/components/ids-lookup/ids-lookup';

const IdsLookup = () => {
  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12" type="h1">
          Lookup
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-lookup
            id="lookup-1"
            label="Normal Lookup (dirty-tracker)"
            title="Select an Item"
            field="description"
            value="102,103"
            dirty-tracker="true"
          ></ids-lookup>
          <ids-lookup
            id="lookup-2"
            readonly="true"
            label="Readonly Lookup"
            value="102"
          ></ids-lookup>
          <ids-lookup
            id="lookup-3"
            disabled="true"
            label="Disabled Lookup"
            value="103"
          ></ids-lookup>
          <ids-lookup
            id="lookup-4"
            label="Required Lookup"
            validate="required"
          ></ids-lookup>
          <ids-lookup id="lookup-5" label="Custom Lookup">
            <ids-modal
              slot="lookup-modal"
              id="custom-lookup-modal"
              aria-labelledby="custom-lookup-modal-title"
            >
              <ids-text
                slot="title"
                font-size="24"
                type="h2"
                id="lookup-modal-title"
              >
                Custom Lookup Modal
              </ids-text>
              <ids-modal-button
                slot="buttons"
                id="modal-cancel-btn"
                type="primary"
              >
                <span slot="text">Apply</span>
              </ids-modal-button>
            </ids-modal>
          </ids-lookup>
          <ids-lookup
            id="lookup-6"
            label="Autocomplete Lookup"
            title="Select an Item"
            autocomplete
            field="description"
          ></ids-lookup>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLookup;
