import { certificationsDetailed, hsePolicy } from "@/content/compliance";
import { careersEmail, careersEnabled } from "@/content/careers";
import { company } from "@/content/site";

/**
 * Corporate policy and Terms/Privacy content.
 * - Corporate policy: built only from TES documents (HSE policy TES-POL-01.001, ISO 9001 certificate,
 *   NCDMB certificate, permits). Add further policies (anti-bribery, code of conduct, whistleblowing…)
 *   as TES supplies their text.
 * - Terms and privacy: a DRAFT written for this site's actual behaviour. It must be reviewed by TES's
 *   lawyer before launch. Update `legalLastUpdated` whenever the text changes.
 */

export type Block = string | { list: string[] } | { signed: string };
export type DocSection = { id: string; title: string; blocks: Block[] };

const iso = certificationsDetailed.find((c) => c.name === "ISO 9001:2015");

export const corporatePolicy: DocSection[] = [
  {
    id: "hse-policy",
    title: "Health, safety, environment and quality (HSEQ) policy",
    blocks: [
      hsePolicy.statement,
      "We consider the management of HSEQ an integral part of our business, built on a philosophy of accident prevention. We will develop a culture of excellence in HSEQ performance through the active participation of management, employees, customers and contractors.",
      `${company.legalName} shall ensure:`,
      { list: hsePolicy.ensure },
      "We will pursue this policy at every level of the company through:",
      { list: hsePolicy.through },
      hsePolicy.closing,
      { signed: `${hsePolicy.signedBy}, ${hsePolicy.date}. Policy reference TES-POL-01.001.` },
    ],
  },
  {
    id: "quality",
    title: "Quality management",
    blocks: [
      `Our management system is certified to ISO 9001:2015 by ${iso?.issuer ?? "Bureau Veritas Certification"}, valid to ${iso?.validUntil ?? "August 2027"}.`,
      `The certified scope covers ${iso?.detail.replace(/^Quality management system for /, "").replace(/\.$/, "") ?? "time charter and vessel hire, manpower and inspection services, equipment supply and maintenance"}.`,
      "Quality management auditing, competency development and continuous improvement are part of our HSEQ policy above.",
    ],
  },
  {
    id: "nigerian-content",
    title: "Nigerian content",
    blocks: [
      "We are a Nigerian company operating a Nigerian-flagged, Lagos-registered fleet that we own outright.",
      "TES Crystal holds a Nigerian Content Development and Monitoring Board (NCDMB) Marine Vessel Certificate, Category A.",
      "We hold an NUPRC permit to supply Nigerian professionals to the oil and gas industry.",
    ],
  },
  {
    id: "other-policies",
    title: "Other policies",
    blocks: [
      `Clients and partners who need copies of other company policies or certificates for prequalification can request them from ${company.email}.`,
    ],
  },
];

export const legalLastUpdated = "November 2026";

export const termsOfUse: DocSection[] = [
  {
    id: "about",
    title: "About these terms",
    blocks: [
      `This website (${company.url.replace("https://", "")}) is operated by ${company.legalName} ("TES", "we", "us"), ${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}.`,
      "By using this website you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    id: "information",
    title: "Information on this website",
    blocks: [
      "The content on this website is general information about TES and our services. It is not an offer, a quotation or professional advice.",
      "Vessel specifications, project descriptions, certifications and permits are provided in good faith and may change. Please confirm any detail that matters to your scope with us before relying on it. Any work we carry out is governed by a separate written contract.",
      "Sending an enquiry through this website does not create a contract or any obligation on either side.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    blocks: [
      "The text, photographs, graphics and the TES name and logo on this website belong to TES or are used with permission. You may view and print pages for your own reference, but you may not copy, republish or use them commercially without our written permission.",
      "Client and partner names and logos belong to their respective owners and are shown to identify organisations we have worked with.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Using the website",
    blocks: [
      "Please do not misuse the website: for example, by attempting to gain unauthorised access, introducing malicious code, or using the contact form to send spam or unlawful content.",
    ],
  },
  {
    id: "links",
    title: "Links to other websites",
    blocks: [
      "This website links to and embeds some third-party services, such as Google Maps. We are not responsible for the content or practices of other websites.",
    ],
  },
  {
    id: "liability",
    title: "Liability",
    blocks: [
      "We work to keep this website accurate and available, but we cannot guarantee it will always be complete, current or uninterrupted. To the extent permitted by law, TES is not liable for any loss arising from your use of, or reliance on, this website.",
      "Nothing in these terms limits any liability that cannot be limited under Nigerian law.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    blocks: [
      "These terms are governed by the laws of the Federal Republic of Nigeria, and the Nigerian courts have jurisdiction over any dispute arising from them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    blocks: ["We may update these terms from time to time. The date at the top of this page shows when they last changed."],
  },
];

export const privacyNotice: DocSection[] = [
  {
    id: "privacy",
    title: "Privacy notice",
    blocks: [
      `${company.legalName} is the data controller for personal data collected through this website. We process personal data in line with the Nigeria Data Protection Act 2023.`,
    ],
  },
  {
    id: "privacy-what",
    title: "What we collect and why",
    blocks: [
      {
        list: [
          "Enquiries: when you use our contact form, we collect your name, email address, and optionally your company, phone number and the service you’re interested in, plus your message. We use these only to respond to your enquiry and discuss any resulting work.",
          ...(careersEnabled
            ? [`Job applications: if you email your CV to ${careersEmail}, we use it only to consider you for roles at TES.`]
            : []),
          "Technical data: like most websites, our hosting provider automatically records basic technical information (such as IP address and browser type) to keep the site secure and working, and to prevent spam.",
        ],
      },
      "We do not sell your personal data, and we do not use it for advertising.",
    ],
  },
  {
    id: "privacy-sharing",
    title: "Who we share it with",
    blocks: [
      "Enquiries are delivered to our team by email through an email service provider, and the website is run by a hosting provider. They process data on our behalf and only for these purposes.",
      "We may also disclose personal data where the law requires us to.",
    ],
  },
  {
    id: "privacy-cookies",
    title: "Cookies",
    blocks: [
      "This website does not use cookies for analytics, tracking or advertising. The map on our Contact page is provided by Google and may set its own cookies when it loads. Google’s privacy policy applies to that map.",
    ],
  },
  {
    id: "privacy-retention",
    title: "How long we keep it",
    blocks: [
      "We keep enquiries and applications only as long as we need them for the purpose they were sent for, or as required by law, and then delete them.",
    ],
  },
  {
    id: "privacy-rights",
    title: "Your rights",
    blocks: [
      "Under the Nigeria Data Protection Act 2023 you can ask us to:",
      {
        list: [
          "tell you what personal data we hold about you and give you a copy",
          "correct data that is wrong or incomplete",
          "delete your data, or restrict how we use it",
          "stop processing your data, or withdraw any consent you have given",
          "send your data to you or another organisation in a portable format",
        ],
      },
      `To make a request, email ${company.email}. You also have the right to complain to the Nigeria Data Protection Commission (NDPC).`,
    ],
  },
];
