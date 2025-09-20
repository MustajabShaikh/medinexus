import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            MediNexus
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Empowering medical stores with smart software solutions for better patient care and business growth.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#software"
              className="opacity-60 hover:opacity-100"
            >
              Software
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact Info</h3>
          <div className="text-muted-foreground">
            <a
              href="tel:+919313316338"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="font-medium">Phone:</span> +91 93133 16338
            </a>
          </div>

          <div className="text-muted-foreground">
            <a
              href="mailto:hinsubadal@gmail.com"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="font-medium">Email:</span> hinsubadal@gmail.com
            </a>
          </div>

          {/* <div className="text-muted-foreground">
            <p className="opacity-60 hover:opacity-100 transition-opacity">
              <span className="font-medium">Support:</span> Mon-Sat, 9AM-6PM
            </p>
          </div> */}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 MediNexus. All rights reserved.{" "}
          <span className="text-muted-foreground">
            Built for medical stores across India.
          </span>
        </h3>
      </section>
    </footer>
  );
};