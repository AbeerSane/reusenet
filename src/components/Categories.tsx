import { Monitor, Package, BookOpen, Sofa, Shirt, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: Monitor,
    name: "E-Waste",
    description: "Electronics, gadgets, appliances",
    items: "45K+ Items",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    name: "Plastic & Packaging",
    description: "Bottles, containers, wrappers",
    items: "120K+ Items",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    name: "Books & Paper",
    description: "Textbooks, magazines, cardboard",
    items: "80K+ Items",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sofa,
    name: "Furniture",
    description: "Chairs, tables, home decor",
    items: "25K+ Items",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shirt,
    name: "Textiles",
    description: "Clothes, fabrics, accessories",
    items: "90K+ Items",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    name: "Other Items",
    description: "Miscellaneous reusables",
    items: "60K+ Items",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">
            Browse by <span className="bg-gradient-eco bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From electronics to furniture, find exactly what you're looking for or list what you have
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="relative p-8 bg-gradient-card border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-eco-card group cursor-pointer overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold font-['Poppins'] mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <p className="text-sm font-semibold text-primary">{category.items}</p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:translate-x-1 transition-all">
                <svg
                  className="w-4 h-4 text-primary group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
