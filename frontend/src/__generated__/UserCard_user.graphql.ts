/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserCard_user = {
    readonly id: string;
    readonly email: string | null;
    readonly firstName: string | null;
    readonly surname: string | null;
    readonly " $refType": "UserCard_user";
};
export type UserCard_user$data = UserCard_user;
export type UserCard_user$key = {
    readonly " $data"?: UserCard_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserCard_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserCard_user",
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
  "type": "User"
};
(node as any).hash = '30496bf69cb341d8ad51298f94193188';
export default node;
