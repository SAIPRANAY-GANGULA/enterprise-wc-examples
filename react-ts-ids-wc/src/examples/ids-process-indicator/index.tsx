import React from 'react';
import IdsTitle from '../../components/ids-title/IdsTitle';
import 'ids-enterprise-wc/components/ids-process-indicator/ids-process-indicator';

const IdsProcessIndicator = () => {
  return (
    <>
      <IdsTitle>Process Indicator Example</IdsTitle>

      <ids-layout-grid cols="1" gap="xl">
        <ids-layout-grid-cell>
          <ids-process-indicator>
            <ids-process-indicator-step label="Process Started" status="done">
              <ids-text slot="detail">Unreleased</ids-text>
              <div slot="detail">
                <ids-alert icon="success" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Winnie Holmes</span>
                </ids-hyperlink>
              </div>
              <ids-text slot="detail" font-size="14">
                January 2, 2021 06:42 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step label="1st Level" status="done">
              <ids-text slot="detail">Unreleased</ids-text>
              <div slot="detail">
                <ids-alert icon="success" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Hogne Thor</span>
                </ids-hyperlink>
              </div>
              <div slot="detail">
                <ids-alert icon="empty-circle" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Merideth Cantor III</span>
                </ids-hyperlink>
              </div>
              <ids-text slot="detail" font-size="14">
                January 12, 2021 06:42 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step label="2nd Level" status="done">
              <ids-text slot="detail">Unreleased</ids-text>
              <div slot="detail">
                <ids-alert icon="success" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Melissa Nash</span>
                </ids-hyperlink>
              </div>
              <ids-text slot="detail" font-size="14">
                January 22, 2021 02:42 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step
              label="3rd Level - Multiple Approvers"
              status="started"
            >
              <ids-text slot="detail">Unreleased</ids-text>
              <div slot="detail">
                <ids-alert icon="success" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Garret Rounds</span>
                </ids-hyperlink>
              </div>
              <div slot="detail">
                <ids-alert icon="empty-circle" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>Evelyn Lewis</span>
                </ids-hyperlink>
              </div>
              <ids-text slot="detail" font-size="14">
                Feb 2, 2021 21:12 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step label="4th Level" status="cancelled">
              <ids-text slot="detail">Status</ids-text>
              <div slot="detail">
                <ids-alert icon="rejected-outline" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>John Jones</span>
                </ids-hyperlink>
              </div>
              <div slot="detail">
                <ids-alert icon="empty-circle" size="small"></ids-alert>
                <ids-hyperlink href="#">
                  <span>James Martin</span>
                </ids-hyperlink>
              </div>
              <ids-text slot="detail" font-size="14">
                Feb 12, 2021 14:12 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step label="5th Level">
              <ids-text slot="detail">Status</ids-text>
              <ids-hyperlink slot="detail" href="#">
                <span>James Martin</span>
              </ids-hyperlink>
              <ids-hyperlink slot="detail" href="#">
                <span>Michelle Ono</span>
              </ids-hyperlink>
              <ids-hyperlink slot="detail" href="#">
                <span>Franklin Marpalla</span>
              </ids-hyperlink>
              <ids-text slot="detail" font-size="14">
                Feb 22, 2021 21:42 AM
              </ids-text>
            </ids-process-indicator-step>
            <ids-process-indicator-step label="Final Level">
              <ids-text slot="detail">Status</ids-text>
              <span>Fred Walsh</span>
              <ids-hyperlink slot="detail" href="#">
                <span>Eddie Clark</span>
              </ids-hyperlink>
              <ids-hyperlink slot="detail" href="#">
                <span>Rena Roberson</span>
              </ids-hyperlink>
              <ids-text slot="detail" font-size="14">
                Mar 2, 2021 01:42 AM
              </ids-text>
            </ids-process-indicator-step>
          </ids-process-indicator>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsProcessIndicator;
