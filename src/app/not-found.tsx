import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-black text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
