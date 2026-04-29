import dynamic from "next/dynamic";

const LaunchpadClient = dynamic(() => import("./LaunchpadClient"), {
  ssr: false
});

export default function Page() {
  return <LaunchpadClient />;
}
