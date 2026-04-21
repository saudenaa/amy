import { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

/*
  To use your intro video:
  Option A — YouTube: set VIDEO_URL to your YouTube embed URL
             e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  Option B — Local file: put your video in /public/ and set VIDEO_URL to "/your-video.mp4"
  Option C — Leave VIDEO_URL as null to hide this section until you have a video ready
*/
const VIDEO_URL = null; // ← paste your video URL here when ready

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  if (!VIDEO_URL) return null; // hide section until a video URL is set

  const isYouTube = VIDEO_URL.includes("youtube") || VIDEO_URL.includes("youtu.be");

  return (
    <section id="video" style={{ padding: "clamp(60px,8vw,100px) 0", background: "var(--bg-2)" }}>
      <div className="container">

        <div className="reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="eyebrow">Introduction</span>
          <h2 className="section-heading" style={{ maxWidth: "none" }}>
            Meet Amy in 90 seconds.
          </h2>
        </div>

        {/* Video thumbnail / play button */}
        <div
          className="reveal video-thumb"
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        >
          <div className="video-play-btn" aria-label="Play intro video">
            <FiPlay size={28} />
          </div>
          <p className="video-thumb-label">Click to play</p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <FiX size={20} />
            </button>

            {isYouTube ? (
              <iframe
                src={`${VIDEO_URL}?autoplay=1`}
                title="Amy Sauden Introduction"
                allow="autoplay; fullscreen"
                frameBorder="0"
                style={{ width: "100%", height: "100%", borderRadius: 12 }}
              />
            ) : (
              <video
                src={VIDEO_URL}
                controls
                autoPlay
                style={{ width: "100%", height: "100%", borderRadius: 12, objectFit: "contain" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
