import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { 
  MobileIcon, 
  EnvelopeClosedIcon, 
  ClockIcon,
  ChatBubbleIcon 
} from "@radix-ui/react-icons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can integrate with your backend or email service
  };

  return (
    <section
      id="contact"
      className="container py-24 sm:py-32"
    >
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Touch
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your medical store? Contact us for a free demo and see how MediNexus can streamline your operations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MobileIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a 
                    href="tel:+919313316338"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 93133 16338
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <EnvelopeClosedIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a 
                    href="mailto:contact@medinexus.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@medinexus.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ClockIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ChatBubbleIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Response Time</h4>
                  <p className="text-muted-foreground">We typically respond within 2-4 hours</p>
                  <p className="text-muted-foreground">For urgent inquiries, please call directly</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Ready for a Demo?</CardTitle>
              <CardDescription>
                See MediNexus in action with a personalized demo tailored to your medical store needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                Schedule Free Demo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 2 hours during business hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="storeName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Medical Store Name</label>
                <Input
                  id="storeName"
                  name="storeName"
                  type="text"
                  placeholder="Your medical store name"
                  value={formData.storeName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements, current challenges, or any specific questions you have..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};