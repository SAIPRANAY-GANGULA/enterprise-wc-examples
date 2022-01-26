import React from 'react';
import iconList from './icons-list';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/ids-text/ids-text';
import 'ids-enterprise-wc/ids-icon/ids-icon';

const getIcon = iconName => {
  return (
    <span className="ids-icon-container" key={iconName}>
      <ids-text font-size="10">{'icon-' + iconName}</ids-text>
      <br />
      <ids-icon icon={iconName} size="large"></ids-icon>
      <ids-icon icon={iconName}></ids-icon>
      <ids-icon icon={iconName} size="small"></ids-icon>
    </span>
  );
};

const IdsIcon = () => {
  return (
    <>
      <ids-layout-grid>
        <ids-text font-size="12">Icons</ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true" gap="md">
        {iconList.map(iconName => getIcon(iconName))}
      </ids-layout-grid>
    </>
  );
};

export default IdsIcon;
