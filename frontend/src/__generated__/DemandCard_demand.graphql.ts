/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DemandCard_demand = {
    readonly id: string;
    readonly createdAt: unknown;
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserCard_user">;
    } | null;
    readonly product: {
        readonly " $fragmentRefs": FragmentRefs<"ProductCard_product">;
    } | null;
    readonly " $refType": "DemandCard_demand";
};
export type DemandCard_demand$data = DemandCard_demand;
export type DemandCard_demand$key = {
    readonly " $data"?: DemandCard_demand$data;
    readonly " $fragmentRefs": FragmentRefs<"DemandCard_demand">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DemandCard_demand",
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
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserCard_user"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Product",
      "kind": "LinkedField",
      "name": "product",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ProductCard_product"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Demand"
};
(node as any).hash = '249e2a676447b5063d80e898af46cf97';
export default node;
