import { useRef } from "react";
//
import { useFrame } from "@react-three/fiber";

function Box({ speed = 0.01, ...props }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += speed;
    ref.current.rotation.z += speed;
    ref.current.rotation.y += speed;
  });

  return (
    <>
      <mesh {...props} ref={ref}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        {/* <meshStandardMaterial map={texture} /> */}
        <meshStandardMaterial color="#020019" />
      </mesh>
    </>
  );
}

export default Box;

//ホバーしたとき、isPointerOverをtrueにして、その真偽値を別のファイル(App.js)で使いたい
