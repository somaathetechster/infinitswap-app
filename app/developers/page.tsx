
export default function Developers() {
  return (
    <div className="px-8 py-36 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Developer Platform</h1>
      <p className="text-white/70 mb-8">
        Infinitswap exposes infrastructure-grade APIs for payments, automation and
        financial workflows.
      </p>
      <pre className="bg-white/5 p-6 rounded-xl text-sm">
POST /api/v1/payments
Authorization: Bearer YOUR_API_KEY
      </pre>
    </div>
  );
}
