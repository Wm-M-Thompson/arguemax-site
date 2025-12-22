import Script from 'next/script';

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Support LikableLogic.org</h1>
      
      {/* Donorbox Script */}
      <Script
        id="donorbox-script"
        src="https://donorbox.org/widget.js"
        strategy="lazyOnload"
      />

      {/* Donorbox Embed iframe - Clean and TypeScript-safe */}
      <iframe
        src="https://donorbox.org/embed/likablelogic"
        title="Donate to LikableLogic"
        name="donorbox"
        allow="payment"
        seamless
        frameBorder="0"
        scrolling="no"
        width="100%"
        className="w-full h-[90vh] min-h-[700px] border-0 rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
}