export default function FAQPage() {
  return (
    <main className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>

      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="font-semibold">How do I connect my wallet?</h2>
          <p>Use in game commands to withdraw to your wallet. For help, join our Discord.</p>
        </section>

        <section>
          <h2 className="font-semibold">Is this real-money gambling?</h2>
          <p>FiveBet uses crypto for play. Please play responsibly and ensure you meet local legal requirements.</p>
        </section>

        <section>
          <h2 className="font-semibold">Where can I get support?</h2>
          <p>Join our Discord for support: <a href="https://discord.gg/fivebet" target="_blank" rel="noopener noreferrer" className="text-amber-400">Discord</a>.</p>
        </section>
      </div>
    </main>
  );
}
