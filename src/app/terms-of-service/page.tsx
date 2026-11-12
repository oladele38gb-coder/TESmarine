import type { Metadata } from "next";
import { DocumentPage } from "@/components/layout/DocumentPage";
import { legalLastUpdated, privacyNotice, termsOfUse } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of service and privacy",
  description: "Terms of use for the TES Marine & Energy website, and how we handle personal data sent to us.",
};

export default function Page() {
  return (
    <DocumentPage
      eyebrow="Legal"
      title="Terms of service and privacy"
      intro={<p>The terms for using this website, and how we handle personal data you send us.</p>}
      meta={`Last updated ${legalLastUpdated}`}
      groups={[
        { heading: "Terms of use", sections: termsOfUse },
        { heading: "Privacy", sections: privacyNotice },
      ]}
    />
  );
}
