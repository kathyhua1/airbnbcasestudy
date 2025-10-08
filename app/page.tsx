import FigmaEmbed from './components/FigmaEmbed';

export default function Home() {
  // Airbnb Case Study Figma prototype URL
  const figmaUrl = "https://embed.figma.com/proto/iUYiVWVkwTvxJRqhNnpe60/Airbnb-Case-Study?page-id=81%3A15&node-id=81-315&p=f&viewport=765%2C2839%2C0.07&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=81%3A315&embed-host=share";
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kathy Hua
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Airbnb Case Study
          </p>
        </div>

        {/* Figma Embed */}
        <FigmaEmbed 
          figmaUrl={figmaUrl}
          title="Airbnb Case Study Prototype"
          height="700px"
        />


        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>Built with Next.js and Figma • Airbnb Case Study Presentation</p>
        </footer>
      </div>
    </div>
  );
}
