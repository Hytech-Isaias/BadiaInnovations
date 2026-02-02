import { useEffect, useRef, useState } from "react";

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSenseAd = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = {},
  className = "",
}: AdSenseAdProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (
        adRef.current &&
        adRef.current.isConnected &&
        adRef.current.offsetParent !== null
      ) {
        const rect = adRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new ResizeObserver(() => {
      checkVisibility() && observer.disconnect();
    });

    if (adRef.current) observer.observe(adRef.current);

    const interval = setInterval(checkVisibility, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || pushedRef.current) return;

    const timer = setTimeout(() => {
      if (
        adRef.current &&
        adRef.current.isConnected &&
        adRef.current.offsetParent !== null
      ) {
        const rect = adRef.current.getBoundingClientRect();
        if (rect.width > 0) {
          try {
            pushedRef.current = true;
            ((window as any).adsbygoogle =
              (window as any).adsbygoogle || []).push({});
          } catch (e: any) {
            if (e?.message?.includes("No slot size for availableWidth=0")) {
              pushedRef.current = false;
              return;
            }
            console.error("AdSense error:", e);
          }
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const minHeight = adFormat === "horizontal" ? "90px" : "250px";
  const height = adFormat === "rectangle" ? "270px" : "auto";

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{
        display: "block",
        width: "100%",
        minWidth: "250px",
        minHeight,
        height,
        ...style,
      }}
      data-ad-client="ca-pub-4186756122518299"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
};

export default AdSenseAd;
