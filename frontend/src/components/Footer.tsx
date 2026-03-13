const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="font-heading text-lg font-bold text-foreground">
        Apex<span className="text-accent">Studio</span>
      </a>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#services" className="hover:text-accent transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </div>
      <div className="flex gap-4 text-sm text-muted-foreground">
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
        <a href="#" className="hover:text-accent transition-colors">Terms</a>
      </div>
    </div>
    <div className="container mt-8">
      <p className="text-xs text-muted-foreground text-center">© 2026 ApexStudio. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
