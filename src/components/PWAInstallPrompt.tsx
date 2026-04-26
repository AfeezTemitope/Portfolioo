import { useEffect, useState } from "react"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Don't show again if previously dismissed
    if (localStorage.getItem("pwa-install-dismissed") === "true") return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show prompt after 10 seconds on site
      setTimeout(() => setShowPrompt(true), 10_000)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      setShowPrompt(false)
      setDeferredPrompt(null)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem("pwa-install-dismissed", "true")
  }

  if (!showPrompt || !deferredPrompt) return null

  return (
    <div
      role="dialog"
      aria-labelledby="pwa-prompt-title"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 animate-fade-in-up"
    >
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-950/95 border border-blue-500/30 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-blue-500/20 p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Download size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 id="pwa-prompt-title" className="text-sm font-semibold text-white mb-1">
              Install Portfolio
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Add Afeez's portfolio to your home screen for instant access — works offline too.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="text-xs text-white/60 hover:text-white px-3 py-2 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss install prompt"
            className="text-white/40 hover:text-white/80 transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
