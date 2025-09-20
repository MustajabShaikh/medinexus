import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 999,
    description:
      "Perfect for small medical stores just getting started with digital management.",
    buttonText: "Get Started",
    benefitList: [
      "Single store location",
      "Basic inventory management",
      "Up to 1,000 products",
      "Email support",
      "Basic sales & stock reports",
      "Patient prescription tracking",
      "GST-ready billing system",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 2499,
    description:
      "Ideal for growing medical stores with advanced features and priority support.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Up to 3 store locations",
      "Advanced inventory alerts",
      "Unlimited products",
      "Priority phone & email support",
      "Detailed analytics & reports",
      "Prescription management system",
      "Customer loyalty program",
      "GST compliance & billing",
      "Backup & data security",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 4999,
    description:
      "Complete solution for large pharmacy chains with custom integrations and dedicated support.",
    buttonText: "Contact Sales",
    benefitList: [
      "Unlimited store locations",
      "Multi-location inventory sync",
      "Custom integrations & API access",
      "24/7 dedicated support manager",
      "Advanced business intelligence",
      "Multi-doctor prescription system",
      "Franchise management tools",
      "Custom compliance reports",
      "On-premise deployment option",
      "Staff training & onboarding",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Choose Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Perfect{" "}
        </span>
        Plan
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Affordable pricing plans designed for medical stores of all sizes. Choose the right plan and grow your business.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary/50"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">
                  ₹{pricing.price.toLocaleString('en-IN')}
                </span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button 
                className="w-full" 
                variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <h3 className="ml-2 text-sm">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};