import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
            {/* Left side - Icon and text */}
            <div className="flex items-start sm:items-center gap-4 flex-1">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Cookie Policy
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your experience and analyze site
                  usage. By continuing to browse, you agree to our use of
                  cookies.{" "}
                  <a
                    href="/cookies"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 sm:flex-none"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 sm:flex-none"
              >
                Accept All
              </Button>
              <button
                onClick={handleClose}
                className="ml-2 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
