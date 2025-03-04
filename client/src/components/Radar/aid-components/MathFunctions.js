import { quadrants, rings } from "./PositionConsts"

// custom random number generator, to make random sequence reproducible
// source: https://stackoverflow.com/questions/521295
let seed = 42
  
export const random = () => {
    let x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
}

export const random_between = (min, max) =>  min + random() * (max - min)

export const normal_between = (min, max) => min + (random() + random()) * 0.5 * (max - min)

export const polar = (cartesian) => {
    let x = cartesian.x
    let y = cartesian.y
    return {
        t: Math.atan2(y, x), // Ángulo en radianes
        r: Math.sqrt(x * x + y * y) // Distancia desde el origen
    }
}

export const cartesian = (polar) => {
    return {
      x: polar.r * Math.cos(polar.t),
      y: polar.r * Math.sin(polar.t)
    }
}

export const bounded_interval = (value, min, max) => {
    let low = Math.min(min, max)
    let high = Math.max(min, max)
    return Math.min(Math.max(value, low), high)
}

export const bounded_ring = (polar, r_min, r_max) => {
    return {
        t: polar.t,
        r: bounded_interval(polar.r, r_min, r_max) // Ajusta la distancia radial
    }
}

export const bounded_box = (point, min, max) => {
    return {
      x: bounded_interval(point.x, min.x, max.x),
      y: bounded_interval(point.y, min.y, max.y)
    }
}

export const segment = (quadrant, ring) => {
    let polar_min = {
		t: quadrants[quadrant].radial_min * Math.PI,
      	r: ring === 0 ? 30 : rings[ring - 1].radius
    }
    let polar_max = {
		t: quadrants[quadrant].radial_max * Math.PI,
      	r: rings[ring].radius
    }
    let cartesian_min = {
      	x: 15 * quadrants[quadrant].factor_x,
      	y: 15 * quadrants[quadrant].factor_y
    }
    let cartesian_max = {
      	x: rings[3].radius * quadrants[quadrant].factor_x,
      	y: rings[3].radius * quadrants[quadrant].factor_y
    }
    return {
      	clipx: function (d) {
        	let c = bounded_box(d, cartesian_min, cartesian_max)
        	let p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15)
        	d.x = cartesian(p).x // adjust data too!
        return d.x
      },
		clipy: function (d) {
			let c = bounded_box(d, cartesian_min, cartesian_max)
        	let p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15)
        	d.y = cartesian(p).y // adjust data too!
        return d.y
      },
      	random: function () {
	        return cartesian({
				t: random_between(polar_min.t, polar_max.t),
          		r: normal_between(polar_min.r, polar_max.r)
        	})
      	}
    }
}

export const translate = (x, y) => "translate(" + x + "," + y + ")"

export const viewbox = (quadrant) => {
    if (quadrant < 0 || quadrant >= quadrants.length) {
        throw new Error("Invalid quadrant index")
    }
    return [
        Math.max(0, quadrants[quadrant].factor_x * 400) - 420,
        Math.max(0, quadrants[quadrant].factor_y * 400) - 420,
        440,
        440
    ].join(" ")
}