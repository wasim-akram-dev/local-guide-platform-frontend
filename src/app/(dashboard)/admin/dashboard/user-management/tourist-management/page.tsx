export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import UserManagementTable from "../UserManagementTable";

export default function TouristManagementPage() {
  return <UserManagementTable roleFilter="TOURIST" />;
}
