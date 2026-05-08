import { useEffect, useState } from "react"

interface LoadingScreenProps {
  show: boolean
}

export default function LoadingScreen({ show }: LoadingScreenProps) {
  const [isSlow, setIsSlow] = useState(false)
  const [shouldRender, setShouldRender] = useState(show)

  // Detect slow network — show extended message
  useEffect(() => {
    if (!show) return
    const slowTimer = setTimeout(() => setIsSlow(true), 1500)
    return () => clearTimeout(slowTimer)
  }, [show])

  // Fade out smoothly before unmounting
  useEffect(() => {
    if (show) {
      setShouldRender(true)
    } else {
      const t = setTimeout(() => setShouldRender(false), 500)
      return () => clearTimeout(t)
    }
  }, [show])

  if (!shouldRender) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Afeez Temitope Bello's portfolio"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-gray-950 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Initials orb */}
        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-float">
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              AB
            </span>
          </div>
          {/* Spinning ring */}
          <div
            className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-blue-400 border-r-purple-400"
            style={{
              animation: "spin 1.0s linear infinite",
            }}
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
          Afeez Temitope Bello
        </h1>

        {/* Tagline */}
        {/* <p className="text-sm sm:text-base text-white/70 mb-6 font-medium">
          Co-Founder, Klassrun Technologies Ltd.
        </p> */}

        {/* Loading bar */}
        <div className="w-48 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
            style={{
              backgroundSize: "200% 100%",
              animation: "loadingBar 1.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Slow network message */}
        <p
          className={`mt-6 text-xs text-white/50 max-w-xs transition-opacity duration-500 ${
            isSlow ? "opacity-100" : "opacity-0"
          }`}
        >
          Connection seems slow — hang tight, the experience is worth the wait.
        </p>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
