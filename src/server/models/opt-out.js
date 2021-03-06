import thinky from "./thinky";
const type = thinky.type;
import { optionalString, requiredString, timestamp } from "./custom-types";

import Organization from "./organization";
import Assignment from "./assignment";

const OptOut = thinky.createModel(
  "opt_out",
  type
    .object()
    .schema({
      id: type.string(),
      cell: requiredString(),
      assignment_id: type.string(),
      organization_id: requiredString(),
      reason_code: optionalString(),
      created_at: timestamp()
    })
    .allowExtra(false),
  { noAutoCreation: true, dependencies: [Organization, Assignment] }
);

export default OptOut;
