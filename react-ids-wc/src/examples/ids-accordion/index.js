import React, { useRef, useEffect, useState } from 'react';

import 'ids-enterprise-wc/components/ids-accordion/ids-accordion';

const IdsAccordion = () => {
  const accordionRef = useRef()
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const accordion = accordionRef.current

    accordion.panels.forEach(el => {
      el.expanded = expanded
    })
  }, [expanded])

  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Accordion
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="2" gap="md">
        <ids-layout-grid-cell>
          <ids-accordion ref={accordionRef}>
            {['Warehouse Location', 'Sort By', 'Brand Name', 'Material'].map(item => (
              <ids-accordion-panel key={item}>
                <ids-accordion-header slot="header">
                  <ids-text font-size="16">{item}</ids-text>
                </ids-accordion-header>
                <ids-text slot="content">
                  Remix, optimize, "B2B, iterate?" Best-of-breed efficient
                  beta-test; social cutting-edge: rich magnetic tagclouds
                  front-end infomediaries viral authentic incentivize sexy
                  extensible functionalities incentivize. Generate killer
                  authentic grow vertical blogospheres, functionalities ecologies
                  harness, "tag solutions synergies exploit data-driven B2C
                  open-source e-markets optimize create, enhance convergence
                  create." Out-of-the-box strategize best-of-breed back-end,
                  deploy design markets metrics. Content web services enhance
                  leading-edge Cluetrain, deliverables dot-com scalable.
                  User-centric morph, back-end, synthesize mesh, frictionless,
                  exploit next-generation tag portals, e-commerce channels;
                  integrate; recontextualize distributed revolutionize innovative
                  eyeballs.
                </ids-text>
              </ids-accordion-panel>
            ))}
          </ids-accordion>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-button
            appearance="primary"
            onClick={() => setExpanded(!expanded)}
          >
            <span>{!expanded ? 'Expand All' : 'Collapse All'}</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAccordion;
