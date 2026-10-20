import type { Metadata } from "next";
import { ResumeRouteModal } from "@/components/ui/resumeModal";

export const metadata: Metadata = {
  title: "Resume — Matt Smith",
  description: "Matt Smith software engineer resume.",
};

export default function ResumePage() {
  return <ResumeRouteModal />;
}
