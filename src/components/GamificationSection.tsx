import { Trophy, Gift, Star, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const badges = [
  { name: "First Step", icon: Star, earned: true, color: "bg-yellow-500" },
  { name: "Eco Warrior", icon: Trophy, earned: true, color: "bg-primary" },
  { name: "Community Hero", icon: Zap, earned: true, color: "bg-accent" },
  { name: "Reuse Master", icon: Gift, earned: false, color: "bg-gray-400" },
];

const rewards = [
  { points: 500, reward: "5% off next purchase", available: true },
  { points: 1000, reward: "Free eco-friendly tote bag", available: true },
  { points: 2000, reward: "10% off premium listing", available: false },
  { points: 5000, reward: "Featured profile badge", available: false },
];

const GamificationSection = () => {
  return (
    <section id="rewards" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Rewards & Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Earn points for every sustainable action
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Badges */}
          <Card className="p-8 bg-gradient-card border-2 border-primary/20 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold font-['Poppins']">Achievement Badges</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    badge.earned
                      ? "border-primary/30 bg-primary/5 hover:shadow-eco-card"
                      : "border-gray-300 bg-gray-50 opacity-60"
                  }`}
                >
                  <div
                    className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mb-3 mx-auto ${
                      badge.earned ? "shadow-lg" : ""
                    }`}
                  >
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center font-semibold text-sm">{badge.name}</p>
                  {badge.earned && (
                    <Badge className="mt-2 mx-auto block w-fit bg-primary/10 text-primary border-primary/20">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Rewards */}
          <Card className="p-8 bg-gradient-card border-2 border-accent/20 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold font-['Poppins']">Redeem Rewards</h3>
            </div>

            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                    reward.available
                      ? "border-accent/30 bg-accent/5 hover:shadow-eco-card cursor-pointer"
                      : "border-gray-300 bg-gray-50 opacity-60"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{reward.reward}</p>
                    <p className="text-sm text-muted-foreground">{reward.points} Green Points</p>
                  </div>
                  {reward.available ? (
                    <Badge className="bg-gradient-hero text-white shadow-eco">
                      Redeem
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">
                      Locked
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Points Banner */}
        <Card className="p-8 lg:p-12 bg-gradient-hero border-0 shadow-eco animate-scale-in">
          <div className="text-center text-white space-y-4">
            <Zap className="w-16 h-16 mx-auto mb-4 animate-float" />
            <h3 className="text-3xl lg:text-4xl font-bold font-['Poppins']">
              You have 1,245 Green Points!
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              List more items, connect with collectors, and complete exchanges to earn more points
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge className="px-4 py-2 bg-white/20 text-white border-white/30 text-base">
                +50 points per listing
              </Badge>
              <Badge className="px-4 py-2 bg-white/20 text-white border-white/30 text-base">
                +100 points per exchange
              </Badge>
              <Badge className="px-4 py-2 bg-white/20 text-white border-white/30 text-base">
                +25 bonus for reviews
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GamificationSection;
