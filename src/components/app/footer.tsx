import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

// JSON object containing footer links
const footerLinks = {
  necessary: [
    {
      label: "Technical Docs",
      href: "/docs/intro",
    },
    {
      label: "API & SDK Info",
      href: "#",
    },
    {
      label: "Press & Partnerships",
      href: "#",
    },
  ],
};

export function Footer() {
  return (
    <div className="bg-brand-black-200 py-14 text-brand-white-700 font-matter relative">
      <img
        src={useBaseUrl("img/footer-img.png")}
        className="absolute -top-24 sm:-top-44 right-0 w-44 sm:w-auto"
        alt="Footer decoration"
      />

      <div className="container-custom flex flex-col md:flex-row justify-between gap-8 flex-wrap">
        <div className="flex flex-col gap-4">
          <img
            src={useBaseUrl("img/logo-footer.png")}
            alt="WootzApp Logo"
            className="h-10 w-44 md:h-14 md:w-60"
          />
          <p className="tracking-wide ~text-xs/base">
            {`© ${new Date().getFullYear()} WootzApp Inc. All Rights Reserved`}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="font-medium ~text-base/2xl">Contact</h3>
          <p className="~text-xs/base font-normal tracking-wide">
            For technical documentation, partnership inquiries, or investor
            information please reach out
          </p>
          <a
            href="mailto:founders@wootzapp.com"
            className="flex gap-2 text-brand-orange-200 hover:underline ~text-xs/base items-center"
          >
            <img
              src={useBaseUrl("img/sms.png")}
              alt="Email Icon"
              className="w-6 h-6"
            />
            founders@wootzapp.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium ~text-base/2xl">Necessary Links</h3>
          <div className="flex flex-col gap-2">
            {footerLinks.necessary.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-brand-orange-200 ~text-xs/base font-normal tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
