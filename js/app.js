$(function() {
    'use strict';

    $('#vis').click(function() {
        var data = $('#killCount').val().split(", ");
        $('.chart').show();
        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 420]);

        d3.select(".chart")
            .selectAll("div")
              .data(data)
            .enter().append("div")
              .style("width", function(d) { return x(d) + "px"; })
              .text(function(d) { return d; });
    });
});
   