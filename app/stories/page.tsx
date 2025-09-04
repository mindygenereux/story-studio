"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function Stories() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error getting user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="text-center py-12">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Required</h1>
            <p className="text-lg text-gray-600 mb-6">
              Please log in to view your stories.
            </p>
            <Link 
              href="/login" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out inline-block"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Stories</h1>
          <p className="text-gray-600 mb-8">
            Manage and view all your created stories.
          </p>

          <div className="space-y-4">
            {/* Placeholder story items */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">My First Story</h3>
              <p className="text-gray-600 mb-4">
                This is a placeholder story. In a real application, this would be loaded from your database.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Created 2 days ago</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adventure Tale</h3>
              <p className="text-gray-600 mb-4">
                Another placeholder story to demonstrate the layout and styling.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Created 1 week ago</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fantasy Quest</h3>
              <p className="text-gray-600 mb-4">
                A third placeholder story showing the consistent card layout.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Created 2 weeks ago</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Create new story button */}
          <div className="mt-8 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out">
              Create New Story
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
