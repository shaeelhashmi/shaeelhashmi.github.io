
import { useLayoutEffect,useRef } from "react";
import { Vector3 } from "three";
export default function Line(props: any) {
    const ref = useRef<any>(); // Use 'any' type for 'ref' since it can be 'undefined'
    const { start, end,color } = props; // Destructure 'start' and 'end' from 'props'
    useLayoutEffect(() => {
      if (ref.current) { // Check if 'ref.current' is defined before accessing its properties
        ref.current.geometry.setFromPoints([start, end].map(point => new Vector3(...point))); // Use 'Vector3' instead of 'THREE.Vector3'
      }
    }, [start, end]);
  
    return (
      <line ref={ref}>
        <bufferGeometry />
        <lineBasicMaterial color={color} />
        
      </line>
    );
}
