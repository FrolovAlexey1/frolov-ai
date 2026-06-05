"use client";

import ScrollProgress from "./components/ScrollProgress";
import DesktopExperience from "./components/DesktopExperience";
import MobileExperience from "./components/MobileExperience";
import useIsMobile from "./components/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <ScrollProgress />
      {/* SSR renders the desktop tree by default (isMobile === null); the client
          swaps to the mobile tree on phones. The scrubbing backdrop only ever
          mounts on desktop, where it is reliable. */}
      {isMobile ? <MobileExperience /> : <DesktopExperience />}
    </>
  );
}
