import { ANIMATOR_URL } from "@/config";

export default function Page() {
  return (
    <main className="relative h-full w-full">
      <div className=" w-full h-full overflow-hidden rounded-lg">
        <iframe className="w-full h-full" src={ANIMATOR_URL} />
      </div>
    </main>
  );
}
