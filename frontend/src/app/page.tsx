import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
  };
  return (
    <div className="relative min-h-screen">
     {/* Background Image*/}
    <Image 
      src="/luma.jpg" 
      alt="Lumora Background" 
      fill 
      className="object-cover z-0 brightness-[0.7]" 
      priority
      />
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
    </div>
    
    {/* Header */}
    <header className="absolute top-0 left-0 w-full p-6 z-20">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <Image 
                  src="/lumora-logo.svg"
                  alt="Lumora Logo"
                  width={150}
                  height={40}
                  className="text-white"/>
            </div>
        </div>
    </header>

    {/* Hero */}
    <main className="text-center max-w-3xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to Lumora
      </h1>
      <p className="text-xl md:text-2xl mb-8">
      &ldquo;A Journey to Inner Growth and Purpose&rdquo;<br />      \
      Join our waiting list to be among the first to experience it.
      </p>

      {/* Waiting list form */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Join the Waiting List</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-900 font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
              >
                Join Now
              </button>
            </>
          ) : (
            <p className="text-green-300 py-3">Thank you! We&apos;ll notify you when we launch.</p>
          )}
        </form>
            </div>
          </main>

          {/* Footer */}
     <footer className="absolute bottom-0 w-full p-6 text-center text-white/80 text-sm">
   <p>© {new Date().getFullYear()} Lumora. All rights reserved.</p>
    </footer>
   </div>
  );
}
