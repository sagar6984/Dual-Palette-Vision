import { Button } from "../components/ui/button";
import logo from "../Assets/DualPaletteLogo .svg"
import polygon from "../Assets/Polygon.png"
import { useState } from "react";
import Portfolio1 from "../Assets/MASTER BEDROOM-4.2.png"
import Portfolio2 from "../Assets/DRAWING & DINING ROOM-1.2.png"
import Portfolio3 from "../Assets/DRAWING & DINING ROOM-1.4.png"
import Portfolio5 from "../Assets/O-2.11.png"
import onlyLogo from "../Assets/logo-01.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Home,
  Palette,
  Star,
  Users,
} from "lucide-react";

export default function Index() {
  // G Sheet Set up below
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdr0AByBQl8BJvuE604pj5CYg_MlMrv2TNVHofOR4YBypz2yQ/formResponse";

    const formData = new FormData();
    formData.append("entry.1482257781", fullName);   // Replace with your actual entry ID
    formData.append("entry.569042745", phone);      // Replace with your actual entry ID
    formData.append("entry.735249132", project);    // Replace with your actual entry ID

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("✅ Message sent successfully!");
      setFullName("");
      setPhone("");
      setProject("");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("⚠️ Failed to send.");
    }
  };

  //G Sheet set up ends here
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">

              <img src={logo} alt="" className="h-20 w-auto" />

            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-accent transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-accent transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#contact">Get Quote</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${polygon})`,
          backgroundColor: "#24423E",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          margin: "0 auto",
        }}
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 ">
              <div className="space-y-4 relative z-10 max-w-xl text-white bg-black/30 sm:bg-transparent p-4 sm:p-0 rounded-md">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Translating Your <span className="text-accent block">Ideas</span>  
                  In<span className="text-accent">to</span>
                  <span className="text-accent block">
                    Reality
                  </span>
                </h1>
                <p className="text-lg text-white/90 max-w-lg">
                  Professional interior design studio creating bespoke spaces
                  that reflect your personality and enhance your lifestyle.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {/* <Button variant="outline" size="lg">
                  View Portfolio
                </Button> */}
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const section = document.getElementById('portfolio');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Portfolio
                </Button>

              </div>
            </div>
          </div>
        </div>

        <img
          src={polygon}
          alt="Polygon"
          className="absolute top-auto bottom-[100px] sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 right-[-140px] sm:right-20 w-[360px] sm:w-[300px] lg:w-[500px] z-0"

        />


      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive interior design
              services tailored to your unique vision and lifestyle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Residential Design</CardTitle>
                <CardDescription>
                  Complete home makeovers and room-specific designs that reflect
                  your personal style.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Living & dining rooms
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Bedrooms & bathrooms
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Kitchen design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Commercial Design</CardTitle>
                <CardDescription>
                  Professional spaces that enhance productivity and create
                  lasting impressions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Office spaces
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Retail environments
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Hospitality venues
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Design Consultation</CardTitle>
                <CardDescription>
                  Expert guidance and personalized recommendations for your
                  design journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Color & material selection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Space planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Style direction
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What we offer
            </h2>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#contact">GET FREE QUOTE</a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Our services
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Architectural Planning and Design
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Residential and Commercial Planning and Approvals
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Modular Kitchen
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Modular Wardrobe
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Furnitures
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Lighnting and Ceiling Design
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Civil, Electrical and Plumbing
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Painting
                </li>
              </ul>
            </Card>

            <Card className="border-0 shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Warranty
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    FLAT 10-year warranty*
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Stay worry-free with our warranty policy on modular
                    products.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Up to 1-year on-site service warranty*
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Warranty on on-site services such as painting, electrical,
                    plumbing and more.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest projects showcasing innovative design
              solutions and exceptional craftsmanship.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={Portfolio1}
                  alt="Modern design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Modern Design</h3>
                  <p className="text-sm">
                    Contemporary design with clean lines
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={Portfolio2}
                  alt="Minimalist Living"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Minimalist Living</h3>
                  <p className="text-sm">Clean and serene space</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={Portfolio3}
                  alt="Dining room design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Elegant Dining</h3>
                  <p className="text-sm">Classic meets contemporary</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
                  alt="Office space design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Modern Office</h3>
                  <p className="text-sm">Productive workspace design</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={Portfolio5}
                  alt="Elegant Kitchen Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Kitchen Design</h3>
                  <p className="text-sm">Clean and serene cooking</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/5644367/pexels-photo-5644367.jpeg"
                  alt="Industrial living room"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">Industrial design</h3>
                  <p className="text-sm">Urban loft aesthetic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={Portfolio1}
                    alt="Modern design"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Modern Design</h3>
                    <p className="text-sm">
                      Contemporary design with clean lines
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={Portfolio2}
                    alt="Minimalist Living"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Minimalist Living</h3>
                    <p className="text-sm">Clean and serene space</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={Portfolio3}
                    alt="Dining room design"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Elegant Dining</h3>
                    <p className="text-sm">Classic meets contemporary</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
                    alt="Office space design"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Modern Office</h3>
                    <p className="text-sm">Productive workspace design</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={Portfolio5}
                    alt="Kitchen Design"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Kitchen Design</h3>
                    <p className="text-sm">Clean and serene cooking</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer flex-none w-80 snap-start">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/5644367/pexels-photo-5644367.jpeg"
                    alt="Industrial living room"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Industrial Design</h3>
                    <p className="text-sm">Urban loft aesthetic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Crafting Exceptional Spaces
              </h2>
              <p className="text-lg text-muted-foreground">
                Dual Palette Vision Pvt. Ltd. is a premium architecture and
                 interior design firm offering end-to-end solutions, from concept
                  to execution. We create thoughtful, functional, and elegant 
                  spaces that reflect your lifestyle and aspirations. With a blend
                   of creativity, precision, and care, we turn your ideas into 
                   timeless living experiences.
              </p>
              <p className="text-muted-foreground">
                We believe that great design is about more than aesthetics—it's
                about creating environments that enhance your daily life,
                reflect your personality, and stand the test of time.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium">
                    Guaranteed Quality
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2317972/pexels-photo-2317972.jpeg"
                alt="Our design team"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our design
              experts for a consultation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    WhatsApp Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    About My Project{" "}
                    <span className="text-muted-foreground">(Optional)</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="h-24"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </CardContent> */}
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">WhatsApp Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    About My Project <span className="text-muted-foreground">(Optional)</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="h-24"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
                {status && <p className="text-sm text-muted-foreground">{status}</p>}
              </CardContent>

            </Card>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 886 999 4910</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      dualpalettevision24@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Centre Point Complex, Emaar Gomti Greens
                      <br />
                      1st floor/05, Arjunganj
                      <br />
                      Lucknow, Uttar Pradesh 226002
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground">
                      Tuesday - Sunday
                    </span>
                    <span className="text-foreground">10:00 AM - 7:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-foreground">Monday</span>
                    <span className="text-foreground">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={onlyLogo} alt="" className="h-10 w-auto" />
                <span className="text-lg font-bold">Dual Palette Vision</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Creating extraordinary spaces that reflect your unique style and
                enhance your lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Residential Design</li>
                <li>Commercial Design</li>
                <li>Design Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>About Us</li>
                <li>Portfolio</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+91 8869994910</li>
                <li>dualpalettevision24@gmail.com</li>
                <li>Centre Point Complex, Emaar Gomti Greens</li>
                      
                <li>1st floor/05, Arjunganj</li>
                <li>Lucknow, Uttar Pradesh 226002</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Dual Palette Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
