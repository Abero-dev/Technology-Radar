import d3 from "d3"
import { viewbox, translate } from "./MathFunctions"

const radarConfig = (config) => {
    config.svg_id = config.svg || "radar";
    config.width = config.width || 1450;
    config.height = config.height || 1000;
    config.colors = ("colors" in config) ? config.colors : {
      background: "#2f2c79",
      grid: '#888',
      inactive: "#ddd",
    };
    config.print_layout = ("print_layout" in config) ? config.print_layout : true;
    config.links_in_new_tabs = ("links_in_new_tabs" in config) ? config.links_in_new_tabs : true;
    config.repo_url = config.repo_url || '#';
    config.print_ring_descriptions_table = ("print_ring_descriptions_table" in config) ? config.print_ring_descriptions_table : false;
    config.footer_offset = config.footer_offset || { x: -155, y: 450 };
  
   // define default font-family
   config.font_family = config.font_family || "Arial, Helvetica";
  
    
    // adjust with config.scale.
    config.scale = config.scale || 1;
    var scaled_width = config.width * config.scale;
    var scaled_height = config.height * config.scale;
  
    var svg = d3.select("svg#" + config.svg_id)
    .style("background-color", config.colors.background)
    .attr("width", scaled_width)
    .attr("height", scaled_height);

  var radar = svg.append("g");
  if ("zoomed_quadrant" in config) {
    svg.attr("viewBox", viewbox(config.zoomed_quadrant));
  } else {
    radar.attr("transform", translate(scaled_width / 2, scaled_height / 2).concat(`scale(${config.scale})`));
  }
}