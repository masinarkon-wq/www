import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-background sin-city-pattern">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-primary text-3xl font-bold mb-8 border-b border-primary pb-2">OFFERS</h1>

        <div className="space-y-6">
          <Card className="bg-card border border-primary">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/medical-professional-with-stethoscope.jpg"
                  alt="First responders"
                  className="w-40 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-primary text-xl font-bold mb-2">20% OFF ALL FOR FIRST RESPONDERS</h2>
                  <p className="text-foreground">
                    We would like to thank all first responders and frontline workers for their assistance in the
                    ongoing pandemic. Therefore, we are offering them 20% off any and all services. Simply present your
                    Medical Services ID.
                  </p>
                </div>
                <div className="text-yellow-400 text-4xl font-bold transform -rotate-12">NEW!</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/military-service-badges-and-emblems.jpg"
                  alt="Military services"
                  className="w-40 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-primary text-xl font-bold mb-2">10% DISCOUNT FOR VETS & ACTIVE DUTY</h2>
                  <p className="text-foreground">
                    Any person who has served in or is currently a member of the US Armed Forces is eligible for a 10%
                    discount. Applicable to any of our services. Please present your Armed Forces ID to our staff.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/thin-blue-line-american-flag.jpg"
                  alt="Law enforcement"
                  className="w-40 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-primary text-xl font-bold mb-2">LEO GET 10% OFF ALL SERVICES</h2>
                  <p className="text-foreground">
                    Any person currently employed by any Law Enforcement Agency is eligible for 10% off all services, no
                    matter how big of a job it is. Simply present your LEO ID to our staff.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/social-media-app-icons-on-phone-screen.jpg"
                  alt="Social media referral"
                  className="w-40 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-primary text-xl font-bold mb-2">REFER US AND GET $10 OFF</h2>
                  <p className="text-foreground">
                    Spread the word and get $10 off if your referral spends $100 or more in services. So if ten of your
                    friends spend $100 or more, you will get $100 in credit - this goes a long way!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="/loyalty-program-card-with-text.jpg"
                  alt="Loyalty program"
                  className="w-40 h-30 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-primary text-xl font-bold mb-2">REFER US AND GET $10 OFF</h2>
                  <p className="text-foreground">
                    Spread the word and get $10 off if your referral spends $100 or more in services. So if ten of your
                    friends spend $100 or more, you will get $100 in credit - this goes a long way!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
