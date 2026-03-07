import React from "react"
import Plyr from "plyr-react"
import type { APITypes } from "plyr-react"
import VideoSkeleton from "./VideoSkeleton"

export default React.memo(function PlyrComponent(props: { image: string }) {
  const [isVideoLoading, setIsVideoLoading] = React.useState(true)
  const plyrRef = React.useRef<APITypes>(null)

  // Callback ref — fires when the DOM node is actually assigned
  const setRef = React.useCallback((node: APITypes | null) => {
    if (!node) return
    (plyrRef as any).current = node

    // Poll until plyr instance is ready
    const interval = setInterval(() => {
      const plyrInstance = node.plyr as any
      if (plyrInstance && typeof plyrInstance.on === "function") {
        clearInterval(interval)

        plyrInstance.on("ready", () => setIsVideoLoading(false))
        plyrInstance.on("statechange", (event: any) => {
          if (event.detail.code === 1) setIsVideoLoading(false)
        })
      }
    }, 100)
  }, [])

  return (
    <>
      <div style={{ display: isVideoLoading ? "none" : "block", width: "100%", height: "100%" }}>
        <Plyr
          ref={setRef as any}
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
          source={{
            type: "video",
            sources: [{ src: props.image, provider: "youtube" }],
          }}
          options={{
            autoplay: false,
            controls: ["play", "progress", "mute", "volume", "fullscreen"],
          }}
        />
      </div>
      <VideoSkeleton />
    </>
  )
})