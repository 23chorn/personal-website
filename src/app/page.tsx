import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg w-full text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">Hi, I'm Chris</h1>
        <p className="mb-6 text-lg text-gray-700">
          A Product Manager exploring{' '}
          <span className="font-semibold text-blue-600">React</span>,{' '}
          <span className="font-semibold text-green-600">Electron</span>,{' '}
          <span className="font-semibold text-yellow-600">Node.js</span>, and{' '}
          <span className="font-semibold text-purple-600">Blockchain</span> projects.
        </p>
        <Link
          href="/files/Christopher Horn Resume - Product.pdf"
          target="_blank"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-200"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}