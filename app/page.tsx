// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Story Studio
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create amazing digital stories with our intuitive platform. 
          Get started today and bring your ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/dashboard" 
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out"
          >
            Dashboard
          </Link>
          <Link 
            href="/sandbox" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out"
          >
            Try Sandbox
          </Link>
          <Link 
            href="/login" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}