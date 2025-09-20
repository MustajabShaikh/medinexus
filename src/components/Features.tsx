import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdvancedAnalyticsDashboardImg from "../assets/features_images/AdvancedAnalyticsDashboardImg.jpg";
import DigitalPrescriptionSystemImg from "../assets/features_images/DigitalPrescriptionSystemImg.jpg";
import SmartInventoryManagementImg from "../assets/features_images/SmartInventoryManagementImg.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Smart Inventory Management",
    description:
      "Real-time stock tracking with automated low-stock alerts, expiry date monitoring, and intelligent reorder suggestions to prevent stockouts and reduce wastage.",
    image: SmartInventoryManagementImg,
  },
  {
    title: "Digital Prescription System",
    description:
      "Seamlessly manage patient prescriptions with digital storage, doctor verification, and automated dosage calculations for improved patient safety and compliance.",
    image: DigitalPrescriptionSystemImg,
  },
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Get actionable insights with sales trends, profit analysis, customer behavior patterns, and automated business reports to make data-driven decisions.",
    image: AdvancedAnalyticsDashboardImg,
  },
];

const featureList: string[] = [
  "GST Compliant Billing",
  "Multi-location Support",
  "Customer Management",
  "Expiry Tracking",
  "Barcode Scanning",
  "Insurance Claims",
  "24/7 Cloud Backup",
  "Mobile App Access",
  "Prescription Alerts",
  "Loyalty Programs",
  "Doctor Integration",
  "Regulatory Compliance",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Powerful{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Medical Store
        </span>{" "}
        Features
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};