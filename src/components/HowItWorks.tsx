import { Upload, Users, Sparkles, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "List Your Items",
    description: "Upload photos, add descriptions, and categorize your reusable waste in seconds",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Connect Locally",
    description: "Discover nearby collectors, NGOs, recyclers, or buyers interested in your items",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Complete Exchange",
    description: "Arrange pickup or drop-off and complete the exchange safely and conveniently",
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/10",
  },
  {
    icon: TrendingUp,
    title: "Track Impact",
    description: "Monitor your eco-score, CO₂ saved, and earn Green Points for every transaction",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">
            How <span className="bg-gradient-eco bg-clip-text text-transparent">ReUseNet</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to transform your waste into value and create positive environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 bg-gradient-card border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-eco-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-eco text-white font-bold text-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-['Poppins'] mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
