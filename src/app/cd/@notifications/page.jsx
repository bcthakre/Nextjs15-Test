import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications Header at Complex Dashboard Level</div>
      <Link href="/cd/archived">Archived</Link>
    </Card>
  );
}
