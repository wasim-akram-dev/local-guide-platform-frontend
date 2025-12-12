export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import UserManagementTable from "../UserManagementTable";

export default function AdminManagementPage() {
  return <UserManagementTable roleFilter="ADMIN" />;
}
