import Link from "next/link";
import { redirect } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home({ searchParams }: { searchParams: any }) {
  return (
    <div>
      <p>Current Search Params:</p>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      <hr />
      <form
        action={async () => {
          "use server";
          redirect("/?foo=bar"); // <- This works in 14.1, not 14.1.1
        }}
      >
        <button>Add some search params</button>
      </form>

      {/* Clearing search params with Link doesn't work too in 14.1.1 */}
      <Link href="/">Clear search params</Link>
    </div>
  );
}
