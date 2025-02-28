export function Footer() {
  return (
    <div className="bg-brand-black-200 py-14 text-brand-white-700 font-matter">
      <div className="container flex flex-col md:flex-row justify-between gap-8 flex-wrap">
        <div className="flex flex-col gap-4">
          <img
            src="/img/logo-footer.png"
            alt="WootzApp Logo"
            className="h-14 w-52 max-md:h-10 max-md:w-44"
          />
          <p className="tracking-wide ~text-xs/base">
            {`© ${new Date().getFullYear()} WootzApp Inc. All Rights Reserved`}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="font-medium ~text-base/2xl">Contact</h3>
          <p className="~text-xs/base">
            For technical documentation, partnership inquiries, or investor
            information please reach out
          </p>
          <a
            href="mailto:founders@wootzapp.com"
            className="flex gap-2 text-brand-orange-200 hover:underline ~text-xs/base items-center"
          >
            <img src="img/sms.png" alt="Email Icon" className="w-6 h-6" />
            founders@wootzapp.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium ~text-base/2xl">Necessary Links</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-brand-orange-200 ~text-xs/base">
              Technical Docs
            </a>
            <a href="#" className="hover:text-brand-orange-200 ~text-xs/base">
              API & SDK Info
            </a>
            <a href="#" className="hover:text-brand-orange-200 ~text-xs/base">
              Press & Partnerships
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
