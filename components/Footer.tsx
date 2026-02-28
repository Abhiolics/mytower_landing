import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_0c055e08-1f10-4902-90ec-7a6b67332bd2/artifacts/9amdv5ut_image.png"
                alt="MyTower"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-xl font-bold text-[#163268]">
                MyTower
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Enterprise-grade society management solution for modern residential communities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/modules">Modules</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/cookies-policy">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyTower. All rights reserved.
        </div>
      </div>
    </footer>
  );
}