import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background sin-city-pattern">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b-2 border-primary pb-2 mb-8">
          <h1 className="text-primary text-3xl font-bold">MAINTENANCE</h1>
        </div>

        <div className="relative h-64 mb-8 rounded overflow-hidden">
          <Image src="/mechanic-hands-working-on-car-engine-parts.jpg" alt="Mechanic working on car engine" fill className="object-cover" />
        </div>

        <p className="text-foreground mb-8 leading-relaxed">
          Regular maintenance of your vehicle is key to a long life and helps prevent more costly repairs. Nevertheless,
          it is something most people prefer to put on the long finger. Don't be like that. Just give us a call or book
          an appointment, and we'll give you an indication of the cost involved.
        </p>

        <Button className="mb-8 bg-primary hover:bg-primary/90">BOOK NOW</Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-primary text-xl font-bold mb-4">FINE TUNING</h2>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              To add another premium service we are now providing Customized Remapping. What this means is we can
              improve your vehicles performance by upgrading the engine software to a more advanced level. The maps can
              be updated. The engines are have been extensively tried and tested.
            </p>
            <p className="text-foreground text-sm leading-relaxed">
              We can also remove DPF and remove speed limiters and make map corrections. All our custom tunes are
              developed specifically for your requirements and can be set back to your original settings if anything was
              ever charged with the press of a button. For more information on this great service please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-primary text-xl font-bold mb-4">CAR SERVICING</h2>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              Car service is a process of repairing or replacing some parts of car to keep it well functioning over
              years.
            </p>
            <p className="text-foreground text-sm leading-relaxed">
              There are some basic things which you should know like servicing of car should be done when limit of
              service miles of your car are due or duration time has lapsed (usually coming service is nearby(usually
              shown on instrument cluster) a mechanic will tell you these two comes first so you have to service your
              car.
            </p>
            <p className="text-foreground text-sm leading-relaxed mt-4">We are offering a mobile service!</p>
            <p className="text-foreground text-sm">
              <strong>Pricing:</strong>
              <br />
              Service Call: $165
              <br />
              Labor: $120/hr
            </p>
          </div>

          <div>
            <h2 className="text-primary text-xl font-bold mb-4">SUSPENSION</h2>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              Your car's suspension system is responsible for smoothing out the ride and keeping the car in control.
              Specifically, the suspension system maximizes the friction between the tires and the road to provide
              steering stability and good handling. The suspension system also provides comfort for passengers to
              limiting the impact of particular road conditions not only on the car, but the passengers riding inside.
            </p>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              The suspension system also provides comfort for passengers to limiting the impact of particular road
              conditions not only on the car, but the passengers riding inside.
            </p>
            <p className="text-foreground text-sm leading-relaxed">
              The suspension system is made up of several components, including the chassis, which holds the cab of the
              car. The springs support the vehicle weight and absorb and reduce excess energy from road shocks, along
              with the shock absorbers and struts. Finally, the anti-sway bar shifts the movement of the wheels and
              stabilizes the car.
            </p>
            <p className="text-foreground text-sm leading-relaxed mt-4">
              Your car's suspension system must be in good condition. Worn suspension components may reduce the
              stability of the vehicle and reduce driver control, as well as accelerate wear on other suspension system
              components. Replacing worn or inadequate shocks and struts will help maintain good ride control as your
              vehicle accumulates miles.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary rounded p-4 mb-8">
          <h3 className="text-primary text-xl font-bold mb-4 text-center">INTERVALS / CHECKUP</h3>
          <p className="text-foreground text-center mb-6">
            Most vehicle manufacturers recommend the following - Are you in compliance?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-primary font-bold mb-4">10,000 Mile Checkup</h4>
              <ul className="text-foreground text-sm space-y-1">
                <li>COOLANT FLUSH</li>
                <li>REPLACE AIR FILTER</li>
                <li>BRAKE INSPECTION</li>
                <li>INSPECT TRANSMISSION FLUID</li>
                <li>INSPECT BELTS AND HOSES</li>
                <li>INSPECT DIFFERENTIAL FLUID</li>
                <li>TIRE ROTATION</li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-bold mb-4">60,000 Mile Checkup</h4>
              <ul className="text-foreground text-sm space-y-1">
                <li>COOLANT FLUSH</li>
                <li>TRANSMISSION FLUSH</li>
                <li>FUEL INJECTOR SERVICE</li>
                <li>FUEL FILTER</li>
                <li>TUNE UP</li>
                <li>REPLACE SPARK PLUGS AND INSPECT WIRES, DISTRIBUTOR CAP & ROTOR</li>
                <li>AIR FILTER</li>
                <li>BRAKE INSPECTION</li>
                <li>INSPECT BELTS AND HOSES</li>
                <li>INSPECT DIFFERENTIAL FLUID</li>
                <li>TIRE ROTATION</li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-bold mb-4">90,000 Mile Checkup</h4>
              <ul className="text-foreground text-sm space-y-1">
                <li>COOLANT FLUSH</li>
                <li>TRANSMISSION FLUSH</li>
                <li>FUEL INJECTOR SERVICE</li>
                <li>FUEL FILTER</li>
                <li>TUNE UP</li>
                <li>REPLACE SPARK PLUGS AND INSPECT WIRES, DISTRIBUTOR CAP & ROTOR</li>
                <li>AIR FILTER</li>
                <li>A/C CHECK</li>
                <li>BRAKE INSPECTION</li>
                <li>INSPECT BELTS AND HOSES</li>
                <li>INSPECT DIFFERENTIAL FLUID</li>
                <li>TIRE ROTATION / ALIGNMENT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
