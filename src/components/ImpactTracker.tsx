import { Leaf, Award, Users, TrendingUp, Car, TreeDeciduous, Zap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ImpactTracker = () => {
  return (
    <section id="impact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Your Impact Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Real metrics showing how your actions create change
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="p-5 border-l-4 border-primary">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">CO₂ Prevented</p>
                <p className="text-2xl font-bold text-primary">248 kg</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Car className="w-3 h-3" /> 
                  Same as not driving 1,240 km
                </p>
              </div>
              <Leaf className="w-8 h-8 text-primary/30" />
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Items Reused</p>
                <p className="text-2xl font-bold text-accent">34</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <TreeDeciduous className="w-3 h-3" /> 
                  Saved 3.4 trees
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent/30" />
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-primary">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Green Points</p>
                <p className="text-2xl font-bold text-primary">1,245</p>
                <p className="text-xs text-muted-foreground mt-1">+120 this week</p>
              </div>
              <Award className="w-8 h-8 text-primary/30" />
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Community Rank</p>
                <p className="text-2xl font-bold text-accent">#12</p>
                <p className="text-xs text-muted-foreground mt-1">In your area</p>
              </div>
              <Users className="w-8 h-8 text-accent/30" />
            </div>
          </Card>
        </div>

        {/* Scientific Equivalents */}
        <Card className="p-6 mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-lg font-bold mb-4">What Your Impact Means</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">1 Laptop Reused</p>
                <p className="text-xs text-muted-foreground">= Not driving 200 km</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TreeDeciduous className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm">10 Books Donated</p>
                <p className="text-xs text-muted-foreground">= 1 tree saved</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">1 Phone Recycled</p>
                <p className="text-xs text-muted-foreground">= 50 kg CO₂ prevented</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Community Leaderboard & Weekly Challenge */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Leaderboard */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Area Leaderboard</h3>
              <Trophy className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-3">
              {[
                { name: "Green Gardens", points: 2840, rank: 1 },
                { name: "Eco Valley", points: 2620, rank: 2 },
                { name: "Your Neighborhood", points: 2145, rank: 3, isYou: true },
                { name: "Riverside", points: 1890, rank: 4 },
                { name: "Hillside", points: 1654, rank: 5 },
              ].map((area) => (
                <div
                  key={area.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    area.isYou ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                  }`}
                >
                  <span className={`text-sm font-bold w-6 ${area.rank <= 3 ? "text-accent" : "text-muted-foreground"}`}>
                    #{area.rank}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{area.name}</p>
                    <p className="text-xs text-muted-foreground">{area.points.toLocaleString()} points</p>
                  </div>
                  {area.isYou && (
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">You</span>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Challenge */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Weekly Challenge</h3>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">List 5 Items This Week</p>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>3 of 5 items</span>
                <span>+250 bonus points</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>List 1 electronic item</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Complete 2 exchanges</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full border-2 border-muted"></div>
                <span>Earn a review</span>
              </div>
            </div>
          </Card>
        </div>

        {/* vs City Average */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Your Impact</p>
              <p className="text-3xl font-bold text-primary">248 kg</p>
              <p className="text-xs text-muted-foreground">CO₂ saved</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-bold text-primary">+82%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">above city average</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">City Average</p>
              <p className="text-3xl font-bold text-muted-foreground">136 kg</p>
              <p className="text-xs text-muted-foreground">CO₂ saved</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ImpactTracker;
