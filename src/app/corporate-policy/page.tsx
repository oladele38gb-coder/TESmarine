import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/layout/DocumentPage";
import { corporatePolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Corporate policy",
  description:
    "TES Marine & Energy's health, safety, environment and quality policy, ISO 9001:2015 quality management and Nigerian content commitments.",
};

export default function Page() {
  return (
    <DocumentPage
      eyebrow="Corporate policy"
      title="How we run our business"
      intro={
        <p>
          The policies that govern how we work, starting with our HSEQ policy. For our safety record, certificates and
          permits, see{" "}
          <Link href="/hse" className="text-blue underline hover:text-indigo">
            HSE &amp; sustainability
          </Link>
          .
        </p>
      }
      groups={[{ sections: corporatePolicy }]}
    />
  );
}
