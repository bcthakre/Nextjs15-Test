import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Notifications in the archive</div>
      <Link href="/cd">Back to Complex Dashboard</Link>
    </Card>
  );
}
