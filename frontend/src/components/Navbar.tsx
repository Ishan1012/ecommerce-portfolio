import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const { cart } = useCart();
  const hideNav = location.pathname === "/catalogue";
  const hideCart = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          Apex<span className="text-accent">Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {!hideNav && navLinks.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            hideCart ? (
              <Link to="/catalogue" className="relative">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Catalogue</Button>
              </Link>
            ) : (
              <>
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-accent/70 hover:text-foreground">
                    <ShoppingCart size={18} />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-red-500 hover:text-foreground" onClick={handleLogout}>Log out</Button>
              </>
            )
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">Log in</Button>
              </Link>
              <a href="/signup">
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </a>
            </>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {!isLoggedIn && navLinks.map((l) => (
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            )
          ))}
          <div className="flex gap-2 pt-2">
            {isLoggedIn ? (
              <>
                <Link to="/cart" onClick={() => setOpen(false)} className="relative">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ShoppingCart size={16} />
                    Cart
                    {cart.length > 0 && (
                      <span className="bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>Log out</Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}><Button variant="outline" size="sm">Log in</Button></Link>
                <Link to="/signup" onClick={() => setOpen(false)}><Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button></Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
