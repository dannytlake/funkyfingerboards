export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Get Your Custom Fingerboard
            </h2>
            
            <p className="text-lg mb-6">
              Ready to experience the premium quality of our handcrafted fingerboards? 
              We&apos;re here to help you create the perfect setup for your style.
            </p>

            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Email:</p>
                  <a 
                    href="mailto:alek.funk14@icloud.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    alek.funk14@icloud.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">What to Include in Your Email</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Your preferred deck shape and size</li>
                <li>Custom graphic requests (if any)</li>
                <li>Questions about current stock</li>
                <li>Shipping location</li>
                <li>Any special requirements or customizations</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <p className="text-lg">
                We typically respond to all inquiries within 24-48 hours. Each fingerboard is 
                handcrafted with care, so please allow appropriate time for custom orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
