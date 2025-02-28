import { segment } from "./MathFunctions"

const PositioningFunction = ({config}) => {
    // position each entry randomly in its segment
    config.entries.map((entry) => {
		entry.segment = segment(entry.quadrant, entry.ring)
		let point = entry.segment.random()
		entry.x = point.x
		entry.y = point.y
		entry.color = entry.active || config.print_layout ?
		config.rings[entry.ring].color : config.colors.inactive
	})

	// partition entries according to segments
	let segmented = Array.from({ length: 4 }, () => 
						Array.from({ length: 4 }, () => 
							[]))

	config.entries.map((entry) => {
		segmented[entry.quadrant][entry.ring].push(entry)
	})

	let id = 1;
	
	[2, 3, 1, 0].forEach((quadrant) => {
		segmented[quadrant].forEach((entries) => {
			entries.sort((a, b) => a.label.localeCompare(b.label)) // Ordena las entradas alfabéticamente por su label
			entries.forEach((entry) => entry.id = "" + id++) // Asigna un ID único a cada entrada
		})
	})
}

export default PositioningFunction



