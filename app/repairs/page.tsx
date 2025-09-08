import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RepairsPage() {
  return (
    <div className="min-h-screen bg-background sin-city-pattern">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b-2 border-primary pb-2 mb-8">
          <h1 className="text-primary text-3xl font-bold">MOST COMMON PROBLEMS AND REPAIRS</h1>
        </div>

        <p className="text-foreground mb-8 leading-relaxed">
          Below, you can find a number of issues we can diagnose and most often fix. If further inspection is necessary,
          we will let you know what the further steps would be and the associated cost. In some cases, repairs might
          take a few days. Our specialists will be able to give you an idea on the timeframe and cost involved.
        </p>

        <div className="space-y-6">
          <div className="bg-card border-2 border-primary rounded p-6">
            <div className="flex items-start space-x-6">
              <div className="text-primary text-6xl font-bold">01</div>
              <div>
                <h2 className="text-primary text-2xl font-bold mb-3">MECHANICAL PROBLEMS</h2>
                <p className="text-foreground leading-relaxed">
                  Some issues are of a mechanical matter. These are usually due to erosion, wear and tear or impact
                  (such as a slight bump or if you hit a pothole. This can include misalignment of the wheels, axle
                  damage, a bent drive shaft etc. Most of those issues can be fixed without much hassle, however, some
                  need more extensive work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded p-6">
            <div className="flex items-start space-x-6">
              <div className="text-primary text-6xl font-bold">02</div>
              <div>
                <h2 className="text-primary text-2xl font-bold mb-3">ELECTRICAL PROBLEMS</h2>
                <p className="text-foreground leading-relaxed">
                  Electrical problems can include anything from a faulty or flat battery to incorrect wiring. A lot of
                  those issues are seen on pre-owned cars, especially when the previous owner did some DIY to fix an
                  existing issue. More often than not, this can lead to further damage or issues down the line. The
                  majority of those issues are rectified easily. We will try to get you back on the road in no time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded p-6">
            <div className="flex items-start space-x-6">
              <div className="text-primary text-6xl font-bold">03</div>
              <div>
                <h2 className="text-primary text-2xl font-bold mb-3">ENGINE REPAIRS</h2>
                <p className="text-foreground leading-relaxed">
                  The engine is a sensitive piece of machinery, powering your vehicle to get you from Point A to Point
                  B. Modern engines are also referred to as internal combustion engines; they work by heating and
                  combusting fuel inside to move your vehicle by powering pistons. The main outer portion of the engine
                  is called the engine block. It is a large structure with large cylinders where the pistons can move
                  inside as the engine is powered.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded p-6">
            <div className="flex items-start space-x-6">
              <div className="text-primary text-6xl font-bold">04</div>
              <div>
                <h2 className="text-primary text-2xl font-bold mb-3">CLUTCH REPAIRS</h2>
                <p className="text-foreground leading-relaxed">
                  Some repairs require a bit more work and usually new parts - one of the most common repairs we carry
                  out is clutch repairs. Obviously this is an issue that we encounter in manual transmissions. Some
                  sportier and older cars often still contain a manual transmission, and the combination of age (wear
                  and tear) and stop and go city traffic greatly increases the risk of breakage. We'll assess and if
                  possible fix the damage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded p-6">
            <div className="flex items-start space-x-6">
              <div className="text-primary text-6xl font-bold">05</div>
              <div>
                <h2 className="text-primary text-2xl font-bold mb-3">BRAKE REPAIRS</h2>
                <p className="text-foreground leading-relaxed">
                  Again, one of the more common issues we encounter are worn brakes. It is highly dangerous to drive a
                  car with worn brakes and we recommend to check all that's got to do with coming to a quick stop
                  frequently. Exchanging worn disks and calipers is a fairly straight forward process and should not be
                  put on the long finger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
