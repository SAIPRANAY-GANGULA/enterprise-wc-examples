import React, { useRef } from 'react';
import IdsGrid, { IdsGridCell } from '../../components/ids-grid/IdsGrid';
import IdsTitle from '../../components/ids-title/IdsTitle';
import type IdsActionPanelType from 'ids-enterprise-wc/components/ids-action-panel/ids-action-panel';
import 'ids-enterprise-wc/components/ids-action-panel/ids-action-panel';
import 'ids-enterprise-wc/components/ids-dropdown/ids-dropdown';
import 'ids-enterprise-wc/components/ids-textarea/ids-textarea';

const IdsActionPanel = () => {
  const actionPanelRef = useRef<IdsActionPanelType>();

  return (
    <>
      <IdsTitle>Action Panel Example</IdsTitle>

      <ids-action-panel ref={actionPanelRef} fullsize="lg">
        <ids-toolbar slot="toolbar">
          <ids-toolbar-section type="title">
            <ids-text font-size="20" type="h2">
              Company Information
            </ids-text>
          </ids-toolbar-section>

          <ids-toolbar-section type="buttonset" align="end">
            <ids-button
              icon="save"
              no-padding
              onClick={() => {
                actionPanelRef.current?.hide();
              }}
            >
              <ids-text font-weight="bold">Save</ids-text>
            </ids-button>
            <ids-separator vertical="true"></ids-separator>
            <ids-button
              icon="close"
              no-padding
              onClick={() => {
                actionPanelRef.current?.hide();
              }}
            >
              <ids-text font-weight="bold">Close</ids-text>
            </ids-button>
          </ids-toolbar-section>
        </ids-toolbar>

        <IdsGrid cols="2" gap="md" minColWidth="150px" style={{ textAlign: 'left' }}>
          <IdsGridCell>
            <ids-dropdown id="cap-dd-company-name" label="Company Name" value="">
              <ids-list-box>
                <ids-list-box-option value="" selected>
                  None
                </ids-list-box-option>
                <ids-list-box-option value="jawbone">Jawbone, Inc.</ids-list-box-option>
                <ids-list-box-option value="infor">Infor</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-dropdown id="cap-dd-purchase-form" label="Purchase Form" value="3567">
              <ids-list-box>
                <ids-list-box-option value="">None</ids-list-box-option>
                <ids-list-box-option value="3567" selected>
                  3567
                </ids-list-box-option>
                <ids-list-box-option value="3568">3568</ids-list-box-option>
                <ids-list-box-option value="3569">3569</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-dropdown id="cap-dd-template" label="Template" value="1">
              <ids-list-box>
                <ids-list-box-option value="">None</ids-list-box-option>
                <ids-list-box-option value="1" selected>
                  Template #1
                </ids-list-box-option>
                <ids-list-box-option value="2">3568</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-textarea id="cap-textarea-notes" label="Notes"></ids-textarea>
          </IdsGridCell>
          <IdsGridCell>
            <ids-dropdown id="cap-dd-ship-terms" label="Ship Terms" value="">
              <ids-list-box>
                <ids-list-box-option value="" selected>
                  None
                </ids-list-box-option>
                <ids-list-box-option value="default">Default</ids-list-box-option>
                <ids-list-box-option value="alternate">Alternate</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-dropdown id="cap-dd-ship-via" label="Ship via" value="">
              <ids-list-box>
                <ids-list-box-option value="" selected>
                  None
                </ids-list-box-option>
                <ids-list-box-option value="default">USPS</ids-list-box-option>
                <ids-list-box-option value="alternate">Other</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-dropdown id="cap-dd-issue-method" label="Issue Method" value="email">
              <ids-list-box>
                <ids-list-box-option value="">None</ids-list-box-option>
                <ids-list-box-option value="phone">Telephone</ids-list-box-option>
                <ids-list-box-option value="email" selected>
                  Email
                </ids-list-box-option>
                <ids-list-box-option value="sms">SMS Message</ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>

            <ids-checkbox id="cap-check-freight" label="Freight" checked></ids-checkbox>
          </IdsGridCell>
        </IdsGrid>
      </ids-action-panel>

      <IdsGrid>
        <IdsGridCell>
          <ids-button
            appearance="secondary"
            onClick={() => {
              actionPanelRef.current?.show();
            }}
          >
            Open Action Panel
          </ids-button>
        </IdsGridCell>
      </IdsGrid>
    </>
  );
};

export default IdsActionPanel;
