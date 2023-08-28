import React from 'react';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-layout-grid/ids-layout-grid-cell';


const IdsLayoutGrid = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true" gap="md">
        <ids-text font-size="12" type="h1">
          Layout Grid - 12 column fluid grid
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid>
        <ids-layout-grid-cell col-span fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="3" fill="true">
          <ids-text font-size="12">3 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="3" fill="true">
          <ids-text font-size="12">3 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="3" fill="true">
          <ids-text font-size="12">3 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="3" fill="true">
          <ids-text font-size="12">3 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="4" fill="true">
          <ids-text font-size="12">4 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="4" fill="true">
          <ids-text font-size="12">4 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="4" fill="true">
          <ids-text font-size="12">4 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="6" fill="true">
          <ids-text font-size="12">6 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="6" fill="true">
          <ids-text font-size="12">6 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="7" fill="true">
          <ids-text font-size="12">7 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="5" fill="true">
          <ids-text font-size="12">5 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="8" fill="true">
          <ids-text font-size="12">8 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="4" fill="true">
          <ids-text font-size="12">4 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="9" fill="true">
          <ids-text font-size="12">9 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="3" fill="true">
          <ids-text font-size="12">3 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="10" fill="true">
          <ids-text font-size="12">10 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="2" fill="true">
          <ids-text font-size="12">2 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="11" fill="true">
          <ids-text font-size="12">11 Cols</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="12" fill="true">
          <ids-text font-size="12">12 Cols</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" gap="md">
        <ids-text font-size="12" type="h1">
          Layout Grid - 12 column fluid grid w/breakpoints
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell
          col-start="2"
          col-span="12"
          col-span-md="6"
          fill="true"
        >
          <ids-text font-size="12">col-span="12" col-span-md="6"</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="12" col-span-md="6" fill="true">
          <ids-text font-size="12">col-span="12" col-span-md="6"</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell col-span="12" col-span-md="8" fill="true">
          <ids-text font-size="12">col-span="12" col-span-md="8"</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="12" col-span-md="4" fill="true">
          <ids-text font-size="12">col-span="12" col-span-md="4"</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-layout-grid-cell
          col-span="12"
          col-span-sm="4"
          col-span-lg="6"
          fill="true"
        >
          <ids-text font-size="12">
            col-span="12" col-span-sm="4" col-span-lg="8"
          </ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell
          col-span="12"
          col-span-sm="4"
          col-span-lg="3"
          fill="true"
        >
          <ids-text font-size="12">
            col-span="12" col-span-sm="4" col-span-lg="3"
          </ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell
          col-span="12"
          col-span-sm="4"
          col-span-lg="3"
          fill="true"
        >
          <ids-text font-size="12">
            col-span="12" col-span-sm="4" col-span-lg="3"
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" gap="md">
        <ids-text font-size="12" type="h1">
          Layout Grid XL - 16 column fluid grid
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="fluid-grid-xl">
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" fill="true">
          <ids-text font-size="12">1 Col</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="fluid-grid-xl">
        <ids-layout-grid-cell
          col-span="4"
          col-span-xs="4"
          col-span-sm="8"
          col-span-md="12"
          col-span-lg="12"
          col-span-xl="16"
          fill="true"
        >
          <ids-text font-size="12">16 Col</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" gap="md">
        <ids-text font-size="12" type="h1">
          Layout Grid
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell fill="true" col-span="2" row-span="3">
          <ids-text font-size="12">Grid Cell 1 </ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 2</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 3</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 4</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 5</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 6</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 7</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 8</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 9</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 10</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell 11</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" gap="md">
        <ids-text font-size="12" type="h1">
          Layout Grid - min-Col-Width (200px)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true" min-col-width="200px" gap="md">
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLayoutGrid;
