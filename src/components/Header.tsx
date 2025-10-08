import { Recycle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-eco">
              <Recycle className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold font-['Poppins'] bg-gradient-hero bg-clip-text text-transparent">
              ReUseNet
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </a>
            <a 
              href="#categories" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Categories
            </a>
            <a 
              href="#impact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Impact
            </a>
            <a 
              href="#rewards" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Rewards
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-medium">
              Hey, Abeer
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 shadow-eco font-semibold">
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a 
                href="#how-it-works" 
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </a>
              <a 
                href="#categories" 
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Categories
              </a>
              <a 
                href="#impact" 
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Impact
              </a>
              <a 
                href="#rewards" 
                className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Rewards
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-hero hover:opacity-90 shadow-eco">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
