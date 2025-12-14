import React from "react"
import Plyr from "plyr-react"

export default React.memo(function PlyrComponent(props:{image:string}) {
    return (

     <Plyr
                     style={{ width: "100%", height: "100%", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }} 
                        source={{
                            type: "video",
                            sources: [
                                {
                                    src: props.image,
                                    provider: "youtube",
                                },
                            ],
                        }}
                        options={{
                            autoplay: false,
                            controls: ["play", "progress", "mute", "volume", "fullscreen"],
                        }}
                    />

                
    )
})
