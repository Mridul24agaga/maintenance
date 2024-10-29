'use client'

import { Loader2, Server } from "lucide-react"

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-500 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-30">
        <Server className="w-96 h-96 text-white" />
      </div>
      <main className="max-w-2xl mx-auto z-10 bg-black/30 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">We're Upgrading!</h1>
        <div className="space-y-6">
          <Loader2 className="w-16 h-16 animate-spin mx-auto" />
          <p className="text-xl animate-fade-in-up animation-delay-100">
            Our app is currently undergoing maintenance to bring you an even better experience.
          </p>
          <p className="text-lg animate-fade-in-up animation-delay-200">
            We appreciate your patience and will be back online shortly.
          </p>
        </div>
      </main>
      <footer className="mt-8 text-sm text-white/80 animate-fade-in-up animation-delay-300">
        <p>&copy; {new Date().getFullYear()} Memories Lived. All rights reserved.</p>
      </footer>
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  )
}