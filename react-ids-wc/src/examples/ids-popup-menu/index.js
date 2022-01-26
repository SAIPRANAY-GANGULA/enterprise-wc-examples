import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-popup-menu/ids-popup-menu';

const IdsPopupMenu = () => {
  const popupRef = useRef();

  useEffect(() => {
    const popupEl = popupRef.current;

    // Sets popup align related to right click cursor position
    popupEl.popup.align = 'top, left';
  }, []);

  return (
    <>
      <ids-popup-menu ref={popupRef}>
        <ids-menu-group>
          <ids-menu-item>Item One</ids-menu-item>
          <ids-menu-item>Item Two</ids-menu-item>
          <ids-menu-item>Item Three</ids-menu-item>
          <ids-menu-item>Item Four</ids-menu-item>
          <ids-separator></ids-separator>
          <ids-menu-item>
            More Actions
            <ids-popup-menu>
              <ids-menu-group>
                <ids-menu-item>Sub-item One</ids-menu-item>
                <ids-menu-item>Sub-item Two</ids-menu-item>
                <ids-menu-item>Sub-item Three</ids-menu-item>
              </ids-menu-group>
            </ids-popup-menu>
          </ids-menu-item>
          <ids-menu-item>
            Even More Actions
            <ids-popup-menu>
              <ids-menu-group>
                <ids-menu-item icon="settings">
                  Change Settings
                  <ids-popup-menu>
                    <ids-menu-group>
                      <ids-menu-item>Setting One</ids-menu-item>
                      <ids-menu-item>Setting Two</ids-menu-item>
                      <ids-menu-item>Setting Three</ids-menu-item>
                      <ids-menu-item>
                        REAAAAALLLLY Long Setting Number Four
                      </ids-menu-item>
                    </ids-menu-group>
                  </ids-popup-menu>
                </ids-menu-item>
                <ids-menu-item icon="mail">Send Mail</ids-menu-item>
                <ids-menu-item icon="filter">Filter Content</ids-menu-item>
              </ids-menu-group>
            </ids-popup-menu>
          </ids-menu-item>
        </ids-menu-group>
      </ids-popup-menu>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Popup Menu
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text>Right click anywhere to open the Popupmenu</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsPopupMenu;
