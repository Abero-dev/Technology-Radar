// The MIT License (MIT)

// Copyright (c) 2017-2024 Zalando SE

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


function radar_visualization(config) {



  var grid = radar.append("g");
  // draw grid lines
  grid.append("line")
    .attr("x1", 0).attr("y1", -400)
    .attr("x2", 0).attr("y2", 400)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 1);
  grid.append("line")
    .attr("x1", -400).attr("y1", 0)
    .attr("x2", 400).attr("y2", 0)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 4);

  // background color. Usage `.attr("filter", "url(#solid)")`
  // SOURCE: https://stackoverflow.com/a/31013492/2609980
  var defs = grid.append("defs");
  var filter = defs.append("filter")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 1)
    .attr("height", 1)
    .attr("id", "solid");
  filter.append("feFlood")
    .attr("flood-color", "rgb(0, 0, 0, 0.8)");
  filter.append("feComposite")
    .attr("in", "SourceGraphic");

  // draw rings
  for (var i = 0; i < rings.length; i++) {
    grid.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", rings[i].radius)
      .attr("position", "absolute")
      .attr("z-index", 10)
      .style("fill", 'none')
      .style("stroke", config.rings[i].color)
      .style("stroke-width", 4);
    if (config.print_layout) {
      grid.append("text")
        .text(config.rings[i].name)
        .attr("y", -rings[i].radius + 75)
        .attr("text-anchor", "middle")
        .style("fill", config.rings[i].color)
        .style("opacity", 0.40)
        .style("font-family", config.font_family)
        .style("font-size", "36px")
        .style("font-weight", "bold")
        .style("pointer-events", "none")
        .style("user-select", "none");
    }
  }

  function legend_transform(quadrant, ring, index = null) {
    var dx = ring < 2 ? -50 : 160;
    var dy = (index == null ? -16 : index * 12);
    if (ring % 2 === 1) {
      dy = dy + 36 + segmented[quadrant][ring - 1].length * 16;
    }
    return translate(
      legend_offset[quadrant].x + dx,
      legend_offset[quadrant].y + dy
    );
  }

  // draw title and legend (only in print layout)
  if (config.print_layout) {

    // title
    radar.append("a")
      .attr("href", config.repo_url)
      .attr("transform", translate(title_offset.x, title_offset.y))
      .append("text")
      .attr("class", "hover-underline")  // add class for hover effect
      .text(config.title)
      .style("font-family", config.font_family)
      .style("font-size", "30")
      .style("font-weight", "bold")
      .style("fill", "#ff0")

    // date
    radar
      .append("text")
      .attr("transform", translate(title_offset.x, title_offset.y + 20))
      .text(config.date || "")
      .style("font-family", config.font_family)
      .style("font-size", "14")
      .style("fill", "#bb0")

    // footer
    radar.append("text")
      .attr("transform", translate(config.footer_offset.x - 150, config.footer_offset.y))
      .text("▲ movido hacia arriba     ▼ movido hacia abajo     ★ nuevo     ⬤ sin cambios")
      .attr("xml:space", "preserve")
      .style("font-family", config.font_family)
      .style("font-size", "16px")
      .style("fill", "#333");

    // legend
    var legend = radar.append("g");
    for (var quadrant = 0; quadrant < 4; quadrant++) {
      legend.append("text")
        .attr("transform", translate(
          legend_offset[quadrant].x,
          legend_offset[quadrant].y - 45
        ))
        .text(config.quadrants[quadrant].name)
        .style("font-family", config.font_family)
        .style("font-size", "24px")
        .style("font-weight", "600")
        .style("fill", "#333")
      for (var ring = 0; ring < 4; ring++) {
        legend.append("text")
          .attr("transform", legend_transform(quadrant, ring))
          .text(config.rings[ring].name)
          .style("font-family", config.font_family)
          .style("font-size", "16px")
          .style("font-weight", "bold")
          .style("font-style", "italic")
          .style("fill", config.rings[ring].color);
        legend.selectAll(".legend" + quadrant + ring)
          .data(segmented[quadrant][ring])
          .enter()
          .append("a")
          .attr("href", function (d, i) {
            return d.link ? d.link : "#"; // stay on same page if no link was provided
          })
          // Add a target if (and only if) there is a link and we want new tabs
          .attr("target", function (d, i) {
            return (d.link && config.links_in_new_tabs) ? "_blank" : null;
          })
          .append("text")
          .attr("transform", function (d, i) { return legend_transform(quadrant, ring, i); })
          .attr("class", "legend" + quadrant + ring)
          .attr("id", function (d, i) { return "legendItem" + d.id; })
          .text(function (d, i) { return d.id + ". " + d.label; })
          .style("font-family", config.font_family)
          .style("font-size", "12px")
          .style("font-weight", "bolder")
          .style("fill", "#333")
          .on("mouseover", function (d) { showBubble(d); highlightLegendItem(d); })
          .on("mouseout", function (d) { hideBubble(d); unhighlightLegendItem(d); });
      }
    }
  }

  // layer for entries
  var rink = radar.append("g")
    .attr("id", "rink");

  // rollover bubble (on top of everything else)
  var bubble = radar.append("g")
    .attr("id", "bubble")
    .attr("x", 0)
    .attr("y", 0)
    .attr("position", "absolute")
    .attr("z-index", 20)
    .style("opacity", 0)
    .style("pointer-events", "none")
    .style("user-select", "none");
  bubble.append("rect")
    .attr("rx", 4)
    .attr("ry", 4)
    .style("fill", "#333");
  bubble.append("text")
    .style("font-family", config.font_family)
    .style("font-size", "10px")
    .style("fill", "#fff");
  bubble.append("path")
    .attr("d", "M 0,0 10,0 5,8 z")
    .style("fill", "#333");

  function showBubble(d) {
    if (d.active || config.print_layout) {
      var tooltip = d3.select("#bubble text")
        .text(d.label);
      var bbox = tooltip.node().getBBox();
      d3.select("#bubble")
        .attr("transform", translate(d.x - bbox.width / 2, d.y - 16))
        .style("opacity", 0.8);
      d3.select("#bubble rect")
        .attr("x", -5)
        .attr("y", -bbox.height)
        .attr("width", bbox.width + 10)
        .attr("height", bbox.height + 4);
      d3.select("#bubble path")
        .attr("transform", translate(bbox.width / 2 - 5, 3));
    }
  }

  function hideBubble(d) {
    var bubble = d3.select("#bubble")
      .attr("transform", translate(0, 0))
      .style("opacity", 0);
  }
  function highlightLegendItem(d) {
    var legendItem = document.getElementById("legendItem" + d.id);
    legendItem.setAttribute("filter", `drop-shadow(5px 1px 2 ${d.color})`);
    legendItem.setAttribute("fill", "white");
  }

  function unhighlightLegendItem(d) {
    var legendItem = document.getElementById("legendItem" + d.id);
    legendItem.removeAttribute("filter");
    legendItem.removeAttribute("fill");
  }

  // draw blips on radar
  var blips = rink.selectAll(".blip")
    .data(config.entries)
    .enter()
    .append("g")
    .attr("class", "blip")
    .attr("transform", function (d, i) { return legend_transform(d.quadrant, d.ring, i); })
    .on("mouseover", function (d) { showBubble(d); highlightLegendItem(d); })
    .on("mouseout", function (d) { hideBubble(d); unhighlightLegendItem(d); });

  // configure each blip
  blips.each(function (d) {
    var blip = d3.select(this);

    // blip link
    if (d.active && Object.prototype.hasOwnProperty.call(d, "link") && d.link) {
      blip = blip.append("a")
        .attr("xlink:href", d.link);

      if (config.links_in_new_tabs) {
        blip.attr("target", "_blank");
      }
    }

    // blip shape
    if (d.moved == 1) {
      blip.append("path")
        .attr("d", "M -16,10 16,10 0,-16 z") // triangle pointing up
        .style("fill", d.color);
    } else if (d.moved == -1) {
      blip.append("path")
        .attr("d", "M -16,-10 16,-10 0,16 z") // triangle pointing down
        .style("fill", d.color);
    } else if (d.moved == 2) {
      blip.append("path")
        .attr("d", d3.symbol().type(d3.symbolStar).size(400))
        .style("fill", d.color);
    } else {
      blip.append("circle")
        .attr("r", 13)
        .attr("fill", d.color);
    }

    // blip text
    if (d.active || config.print_layout) {
      var blip_text = config.print_layout ? d.id : d.label.match(/[a-z]/i);
      blip.append("text")
        .text(blip_text)
        .attr("y", 3)
        .attr("text-anchor", "middle")
        .style("fill", "#eee")
        .style("font-family", config.font_family)
        .style("font-size", function (d) { return blip_text.length > 2 ? "8px" : "12px"; })
        .style("font-weight", "bolder")
        .style("pointer-events", "none")
        .style("user-select", "none");
    }
  });

  // make sure that blips stay inside their segment
  function ticked() {
    blips.attr("transform", function (d) {
      return translate(d.segment.clipx(d), d.segment.clipy(d));
    })
  }

  // distribute blips, while avoiding collisions
  d3.forceSimulation()
    .nodes(config.entries)
    .velocityDecay(0.19) // magic number (found by experimentation)
    .force("collision", d3.forceCollide().radius(12).strength(0.85))
    .on("tick", ticked);

  function ringDescriptionsTable() {
    var table = d3.select("body").append("table")
      .attr("class", "radar-table")
      .style("border-collapse", "collapse")
      .style("position", "relative")
      .style("top", "-70px")  // Adjust this value to move the table closer vertically
      .style("margin-left", "50px")
      .style("margin-right", "50px")
      .style("font-family", config.font_family)
      .style("font-size", "13px")
      .style("text-align", "left");

    var thead = table.append("thead");
    var tbody = table.append("tbody");

    // define fixed width for each column
    var columnWidth = `${100 / config.rings.length}%`;

    // create table header row with ring names
    var headerRow = thead.append("tr")
      .style("border", "1px solid #ddd");

    headerRow.selectAll("th")
      .data(config.rings)
      .enter()
      .append("th")
      .style("padding", "8px")
      .style("border", "1px solid #ddd")
      .style("background-color", d => d.color)
      .style("color", "#fff")
      .style("width", columnWidth)
      .text(d => d.name);

    // create table body row with descriptions
    var descriptionRow = tbody.append("tr")
      .style("border", "1px solid #ddd");

    descriptionRow.selectAll("td")
      .data(config.rings)
      .enter()
      .append("td")
      .style("padding", "8px")
      .style("border", "1px solid #ddd")
      .style("width", columnWidth)
      .text(d => d.description);
  }

  if (config.print_ring_descriptions_table) {
    ringDescriptionsTable();
  }
}

export default radar_visualization;