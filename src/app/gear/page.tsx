export default function GearPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Gear Guide
        </h1>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold mb-4">Essential Equipment</h2>
          <p className="text-lg mb-6">
            Quality gear makes all the difference in fingerboarding. Here's what you need to get started 
            and progress in your fingerboarding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Decks</h3>
            <ul className="space-y-3">
              <li className="border-b border-white/10 pb-2">
                <span className="font-medium">Wood Decks</span>
                <p className="text-gray-300">Premium maple construction for the best feel and pop</p>
              </li>
              <li className="border-b border-white/10 pb-2">
                <span className="font-medium">Shapes</span>
                <p className="text-gray-300">Various concaves and kicks for different styles</p>
              </li>
              <li>
                <span className="font-medium">Graphics</span>
                <p className="text-gray-300">Express yourself with unique deck designs</p>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Trucks & Wheels</h3>
            <ul className="space-y-3">
              <li className="border-b border-white/10 pb-2">
                <span className="font-medium">Premium Trucks</span>
                <p className="text-gray-300">Precision-crafted for smooth grinding and stability</p>
              </li>
              <li className="border-b border-white/10 pb-2">
                <span className="font-medium">Bearing Wheels</span>
                <p className="text-gray-300">High-quality urethane for perfect roll and grip</p>
              </li>
              <li>
                <span className="font-medium">Hardware</span>
                <p className="text-gray-300">Lock nuts and quality screws for secure assembly</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Accessories & Obstacles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Ramps and rails</li>
              <li>Grip tape</li>
              <li>Carrying cases</li>
              <li>Tool kits</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Obstacle sets</li>
              <li>Replacement parts</li>
              <li>Maintenance supplies</li>
              <li>Storage solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
