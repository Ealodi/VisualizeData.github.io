<template>
    <div>
      <svg ref="wordcloud"></svg>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'WordCloud',
    props: {
      words: {
        type: Array,
        required: true,
      },
      width: {
        type: Number,
        default: 800,
      },
      height: {
        type: Number,
        default: 400,
      },
    },
    mounted() {
      this.createWordCloud();
    },
    methods: {
      createWordCloud() {
        const svg = d3.select(this.$refs.wordcloud);
        svg.attr('width', this.width).attr('height', this.height);
  
        const wordCloud = d3.layout.cloud()
          .size([this.width, this.height])
          .words(this.words)
          .padding(5)
          .rotate(() => (Math.random() > 0.5 ? 90 : 0)) // Rotate some words
          .fontSize(d => d.size)
          .on('end', this.draw);
  
        wordCloud.start();
      },
      draw(words) {
        const svg = d3.select(this.$refs.wordcloud);
  
        svg.selectAll('text')
          .data(words)
          .enter().append('text')
          .style('font-size', d => `${d.size}px`)
          .style('fill', 'steelblue')
          .attr('text-anchor', 'middle')
          .attr('transform', d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
          .text(d => d.text);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  