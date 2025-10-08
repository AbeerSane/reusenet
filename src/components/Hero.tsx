import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">SDG 12 – Responsible Consumption</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-['Poppins'] leading-tight">
              Turning <span className="bg-gradient-eco bg-clip-text text-transparent">Waste</span> into{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">Worth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Join the circular economy revolution. List reusable items, connect with recyclers, 
              and track your environmental impact — all in one seamless platform.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold font-['Poppins'] text-primary">2.5M+</p>
                </div>
                <p className="text-sm text-muted-foreground">Items Reused</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <p className="text-3xl font-bold font-['Poppins'] text-accent">500K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold font-['Poppins'] text-primary">1.2M</p>
                <p className="text-sm text-muted-foreground">CO₂ Tons Saved</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 shadow-eco text-lg px-8 font-semibold group"
              >
                Start Listing Items
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-primary/5 font-semibold"
              >
                Explore Marketplace
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-eco opacity-20 blur-3xl rounded-full animate-float" />
            <img
              src={heroImage}
              alt="People recycling and reusing items in a sustainable environment"
              className="relative rounded-3xl shadow-eco-card w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
