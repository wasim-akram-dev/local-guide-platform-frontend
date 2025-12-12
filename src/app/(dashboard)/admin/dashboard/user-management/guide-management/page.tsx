export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import UserManagementTable from "../UserManagementTable";

export default function GuideManagementPage() {
  return <UserManagementTable roleFilter="GUIDE" />;
}
