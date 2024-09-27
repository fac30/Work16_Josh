import { useEffect, useState } from "react";

function MouseTracker() {
    const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);
    useEffect(() => {
		function update(e: MouseEvent) {
			setMousePosition([e.clientX, e.clientY]);
		}
		window.addEventListener("mousemove", update);
		return () => window.removeEventListener("mousemove", update);
	}, []);

	const [x, y] = mousePosition;
	return (
		<output>
			{x},{y}
		</output>
	);

  }

export default MouseTracker;