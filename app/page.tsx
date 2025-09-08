import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Calendar, Phone, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background sin-city-pattern">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-gray-800 rounded border border-gray-700">
              <div className="bg-primary text-white p-3 flex items-center space-x-2">
                <Wrench className="w-5 h-5" />
                <span className="font-bold">Mechanical Problems</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded border border-gray-700">
              <div className="bg-primary text-white p-3 flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span className="font-bold">Electrical Problems</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded border border-gray-700">
              <div className="bg-primary text-white p-3 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">Monthly Treatment</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded border border-gray-700">
              <div className="bg-primary text-white p-3 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-bold">Roadside Assistant</span>
              </div>
            </div>

            <div className="text-white text-sm mt-4">
              <p>Coming Soon!! Emergency Roadside Assistants</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="bg-card border border-border rounded p-6">
              <h1 className="text-primary text-2xl font-bold mb-4">Welcome!</h1>
              <p className="text-foreground mb-4">
                We will do what it takes to get your car the treatment it deserves. So if you feel like an overhaul is
                due, or have experienced an issue (or issues - we don't judge) with your vehicle, don't hesitate and
                contact us. You can email us or just simply fill out the booking form on our contact-page.
                Alternatively, if you are in a hurry, give us a call on (702) 371-4213 to arrange an appointment (also
                available at your preferred location, ie. your place of work - see below)
              </p>

              <div className="bg-primary/10 border border-primary rounded p-4 mb-4">
                <h3 className="text-primary font-bold mb-2">We are offering a mobile service!</h3>
                <div className="text-foreground">
                  <p>
                    <strong>Pricing:</strong>
                  </p>
                  <p>Call-out charge: $165</p>
                  <p>Labor: $120/hr</p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary rounded p-4">
                <h3 className="text-primary font-bold mb-2">Locked your key inside your vehicle?</h3>
                <p className="text-foreground">Don't worry! We can unlock your vehicle without doing any damage!</p>
                <p className="text-foreground">Call us on 702-371-4213</p>
                <p className="text-foreground">Price: $50</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-primary text-xl font-bold mb-4">Location</h3>
                <div className="text-foreground space-y-2">
                  <p>
                    <strong>MONDAY - SATURDAY: 9:00 AM - 5:00 PM</strong>
                  </p>
                  <p>Sun. & Holidays: Closed</p>
                  <p className="mt-4">5315 Sun Meadow Ct.</p>
                  <p>North Las Vegas, Nevada 89031</p>
                </div>

                <div className="mt-4 bg-gray-200 h-32 rounded flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gray-500" />
                </div>
              </div>

              <div>
                <h3 className="text-primary text-xl font-bold mb-4">About Us</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  We have been working on cars for over 15 years and were able to make a name for ourselves through
                  outstanding service and top customer satisfaction. We take pride in our work and you will feel right
                  at home with us. We are a family owned workshop and are always looking for new ways to improve the
                  customer experience. We are running various offers for first responders and Military Personnel. Due to
                  the current pandemic, we are also offering discounts to front line workers so they can stay on the
                  road and help us flatten the curve!
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/90">READ MORE</Button>
              </div>

              <div>
                <h3 className="text-primary text-xl font-bold mb-4">Our Services</h3>
                <div className="text-foreground text-sm space-y-1">
                  <p>- Fault Diagnostics</p>
                  <p>- Tire Change</p>
                  <p>- Drivability Problems</p>
                  <p>- Battery Change</p>
                  <p>- Oil Changes</p>
                  <p>- Brake repairs</p>
                  <p>- Warranty Checks</p>
                </div>
                <Button className="mt-4 bg-primary hover:bg-primary/90">READ MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
