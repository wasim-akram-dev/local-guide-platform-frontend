export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import UserManagementTable from "./UserManagementTable";

export default function UserManagementPage() {
  return <UserManagementTable roleFilter="ALL" />;
}
