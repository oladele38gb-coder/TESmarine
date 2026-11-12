import type { MetadataRoute } from "next";
import { careersEnabled } from "@/content/careers";
import { fleet } from "@/content/fleet";
import { services } from "@/content/services";
import { company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/fleet", "/projects", "/hse", ...(careersEnabled ? ["/careers"] : []), "/contact", "/corporate-policy", "/terms-of-service"];
  return [
    ...pages.map((p) => ({ url: `${company.url}${p}` })),
    ...services.map((s) => ({ url: `${company.url}/services/${s.slug}` })),
    ...fleet.map((v) => ({ url: `${company.url}/fleet/${v.slug}` })),
  ];
}
