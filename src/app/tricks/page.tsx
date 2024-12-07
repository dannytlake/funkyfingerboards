export default function TricksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Tricks & Tutorials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Beginner Tricks</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-medium mb-2">Ollie</h3>
                <p className="text-gray-300">Master the fundamental trick that opens up endless possibilities.</p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-2">Kickflip</h3>
                <p className="text-gray-300">Learn the classic flip trick that every fingerboarder needs to know.</p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-2">Pop Shove-it</h3>
                <p className="text-gray-300">Get your board spinning with this essential rotation trick.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Advanced Moves</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-medium mb-2">Tre Flip</h3>
                <p className="text-gray-300">Combine a 360 pop shove-it with a kickflip for this impressive trick.</p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-2">Impossible</h3>
                <p className="text-gray-300">Master this complex rotation for serious style points.</p>
              </li>
              <li>
                <h3 className="text-xl font-medium mb-2">Fingerflip</h3>
                <p className="text-gray-300">Add some flair with this unique finger-based flip trick.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Practice on a smooth, flat surface for better control</li>
            <li>Keep your fingers relaxed but controlled</li>
            <li>Start slow and build up speed gradually</li>
            <li>Record yourself to analyze and improve your technique</li>
            <li>Join our community sessions for live feedback</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
