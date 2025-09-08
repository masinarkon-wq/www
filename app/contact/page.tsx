"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get in touch with our team for all your automotive repair needs. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general-repair">General Repair</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="electrical">Electrical Issues</SelectItem>
                        <SelectItem value="engine">Engine Problems</SelectItem>
                        <SelectItem value="brakes">Brake Service</SelectItem>
                        <SelectItem value="transmission">Transmission</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your vehicle's issue or service needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Contact us directly using the information below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        5315 Sun Meadow Ct.
                        <br />
                        North Las Vegas, Nevada 89031
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href="tel:7023714213" className="text-muted-foreground hover:text-primary transition-colors">
                        (702) 371-4213
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:sincityautorepairlv@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sincityautorepairlv@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 9:00am - 5:00pm</p>
                        <p>Sunday & Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-border bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl text-accent-foreground">Emergency Service</CardTitle>
                  <CardDescription>
                    Need immediate assistance? We offer 24/7 emergency roadside service.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="tel:7023714213" className="flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Call Emergency Line</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Located in North Las Vegas, we're easily accessible from anywhere in the Las Vegas valley.
            </p>
          </div>

          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <p className="text-muted-foreground">Interactive map would be embedded here</p>
              <p className="text-sm text-muted-foreground">5315 Sun Meadow Ct, North Las Vegas, NV 89031</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
