/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DemandsListQueryVariables = {};
export type DemandsListQueryResponse = {
    readonly demands: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly createdAt: unknown;
            readonly " $fragmentRefs": FragmentRefs<"DemandCard_demand">;
        } | null> | null;
    } | null;
};
export type DemandsListQuery = {
    readonly response: DemandsListQueryResponse;
    readonly variables: DemandsListQueryVariables;
};



/*
query DemandsListQuery {
  demands {
    nodes {
      id
      createdAt
      ...DemandCard_demand
    }
  }
}

fragment DemandCard_demand on Demand {
  id
  createdAt
  user {
    ...UserCard_user
    id
  }
  product {
    ...ProductCard_product
    id
  }
}

fragment ProductCard_product on Product {
  id
  title
}

fragment UserCard_user on User {
  id
  email
  firstName
  surname
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DemandsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DemandConnection",
        "kind": "LinkedField",
        "name": "demands",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Demand",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DemandCard_demand"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DemandsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DemandConnection",
        "kind": "LinkedField",
        "name": "demands",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Demand",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "surname",
                    "storageKey": null
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DemandsListQuery",
    "operationKind": "query",
    "text": "query DemandsListQuery {\n  demands {\n    nodes {\n      id\n      createdAt\n      ...DemandCard_demand\n    }\n  }\n}\n\nfragment DemandCard_demand on Demand {\n  id\n  createdAt\n  user {\n    ...UserCard_user\n    id\n  }\n  product {\n    ...ProductCard_product\n    id\n  }\n}\n\nfragment ProductCard_product on Product {\n  id\n  title\n}\n\nfragment UserCard_user on User {\n  id\n  email\n  firstName\n  surname\n}\n"
  }
};
})();
(node as any).hash = '492f1d46a612f0711e6d0bcbef31d152';
export default node;
