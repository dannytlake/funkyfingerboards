import ImageCarousel from './components/ImageCarousel'

const carouselImages = [
  {
    src: '/images/fingerboards/homepageimage.png',
    alt: 'Funky Fingerboarding Main'
  },
  {
    src: '/images/fingerboards/SCR-20241206-svjk.jpeg',
    alt: 'Fingerboard Scene 1'
  },
  {
    src: '/images/fingerboards/SCR-20241206-svlr.jpeg',
    alt: 'Fingerboard Scene 2'
  },
  {
    src: '/images/fingerboards/SCR-20241206-svog.jpeg',
    alt: 'Fingerboard Scene 3'
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Welcome to Funky Fingerboards
        </h1>

        <div className="mb-8">
          <ImageCarousel images={carouselImages} />
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Handcrafted Precision 
          </h2>
          <p className="text-lg mb-4">
            We craft premium 5-ply fingerboards, handmade with pride in Canada using the finest maple veneer sheets. 
            Each board is a testament to quality craftsmanship, combining traditional woodworking with modern fingerboarding performance.
          </p>
          <p className="text-lg mb-6">
            Our commitment to excellence means every fingerboard is meticulously assembled, shaped, and finished to provide 
            the perfect feel and response that serious fingerboarders demand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>100% Canadian maple veneer</li>
                <li>5-ply construction for optimal strength</li>
                <li>Hand-selected wood grain</li>
                <li>Professional-grade adhesives</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Custom Crafted</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Handmade to order</li>
                <li>Precise shape and concave</li>
                <li>Smooth, consistent kicks</li>
                <li>Custom graphics available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/20 p-8 rounded-lg backdrop-blur-sm text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            🚀 Coming Soon: Online Store
          </h2>
          <p className="text-lg mb-4">
            We&apos;re excited to announce that our ecommerce site is in development! 
            Soon you&apos;ll be able to customize and order your perfect fingerboard directly through our website.
          </p>
          <div className="bg-white/10 p-4 rounded-lg inline-block">
            <p className="text-sm md:text-base">
              Until then, reach out via our <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">contact page</a> to order your custom fingerboard!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
