import React from 'react';
import 'ids-enterprise-wc/components/ids-swipe-action/ids-swipe-action';


const IdsSwipeAction = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Reveal / One Action)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true" no-header="true">
            <div slot="card-content">
              <ids-swipe-action>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 23nd September
                      </ids-text>
                      <ids-text font-size="14">8:10AM-2:20PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-reveal-one"
                        menu="actions-reveal-one-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-reveal-one-menu"
                        target="actions-reveal-one"
                        trigger-type="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-reveal-one"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="xsmall"></ids-icon>
                  <span>Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Reveal / Two Actions)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true" no-header="true">
            <div slot="card-content">
              <ids-swipe-action>
                <ids-button
                  slot="action-left"
                  id="action-left-reveal-two"
                  type="swipe-action-left"
                >
                  <ids-icon slot="icon" icon="reply" size="xsmall"></ids-icon>
                  <span>Left Action</span>
                </ids-button>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 23nd September
                      </ids-text>
                      <ids-text font-size="14">8:10AM-2:20PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-reveal-two"
                        menu="actions-reveal-two-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-reveal-two-menu"
                        target="actions-reveal-two"
                        trigger-type="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-reveal-two"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="xsmall"></ids-icon>
                  <span>Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Continuous)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true" no-header="true">
            <div slot="card-content">
              <ids-swipe-action swipe-type="continuous">
                <ids-button
                  slot="action-left"
                  id="action-left-continuous"
                  type="swipe-action-left"
                >
                  <ids-icon slot="icon" icon="reply" size="xsmall"></ids-icon>
                  <span>Left Action</span>
                </ids-button>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 22nd September
                      </ids-text>
                      <ids-text font-size="14">8:40AM-2:00PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-continuous"
                        menu="actions-continuous-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-continuous-menu"
                        target="actions-continuous"
                        trigger-type="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-continuous"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="xsmall"></ids-icon>
                  <span>Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSwipeAction;
