/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProductCard_product = {
    readonly id: string;
    readonly title: string | null;
    readonly " $refType": "ProductCard_product";
};
export type ProductCard_product$data = ProductCard_product;
export type ProductCard_product$key = {
    readonly " $data"?: ProductCard_product$data;
    readonly " $fragmentRefs": FragmentRefs<"ProductCard_product">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductCard_product",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Product"
};
(node as any).hash = '2ab261f2c1bfb029ff646620e6ff145f';
export default node;
