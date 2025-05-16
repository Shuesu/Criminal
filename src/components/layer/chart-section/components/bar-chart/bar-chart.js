import React, { useRef, useEffect } from 'react';
import styles from './bar-chart.module.css';
import * as d3 from 'd3';

const data = [
   { name: '2015', sales: 13 },
   { name: '2016', sales: 12 },
   { name: '2017', sales: 14 },
   { name: '2018', sales: 15 },
   { name: '2019', sales: 17 },
   { name: '2020', sales: 8 },
   { name: '2021', sales: 11 },
   { name: '2022', sales: 6 },
];


export const BarChart = () => {
   const svgRef = useRef();

   useEffect(() => {
      // Очистка предыдущего графика
      d3.select(svgRef.current).selectAll('*').remove();

      // Размеры и отступы
      const width = 500;
      const height = 300;
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      // Создание SVG
      const svg = d3.select(svgRef.current)
         .attr('width', width)
         .attr('height', height)
         .append('g')
         .attr('transform', `translate(${margin.left},${margin.top})`);

      // Шкалы
      const xScale = d3.scaleBand()
         .domain(data.map(d => d.name))
         .range([0, innerWidth])
         .paddingInner(0.05)
         .paddingOuter(0);

      const yScale = d3.scaleLinear()
         .domain([0, d3.max(data, d => d.sales)])
         .range([innerHeight, 0])
         .nice();

      // Горизонтальная пунктирная сетка
      const maxValue = d3.max(data, d => d.sales);
      const tickStep = Math.ceil(maxValue / 25); // Вычисляем шаг для ~20 линий

      svg.append('g')
         .attr('class', 'grid-horizontal')

         .call(d3.axisLeft(yScale)
            .tickValues(d3.range(0, maxValue + tickStep, tickStep)) // Точные значения
            .tickSize(-innerWidth)
            .tickFormat('')
         )

         .selectAll('line')
         .filter((d, i, nodes) => i === 0) // Удаляем первую (верхнюю) линию
         .remove();


      svg.select('.grid-horizontal')
         .selectAll('line')
         .attr('stroke', 'rgba(241, 172, 67, 0.3)')
         .attr('stroke-width', 1)
         .attr('stroke-dasharray', '3,3');


      svg.select('.grid-horizontal')
         .select('.domain')
         .remove();
      svg.select('.grid-horizontal')
         .append('line')
         .attr('x1', 0)
         .attr('x2', innerWidth)
         .attr('y1', innerHeight)
         .attr('y2', innerHeight)
         .attr('stroke', '#f1ac43')
         .attr('stroke-width', 3);

      // Вертикальная пунктирная сетка
      const gridVertical = svg.append('g')
         .attr('class', 'grid-vertical');

      // Линии по значениям шкалы
      gridVertical.selectAll('line')
         .data(xScale.domain())
         .enter()
         .append('line')
         .attr('x1', d => xScale(d) + xScale.bandwidth() / 2)
         .attr('x2', d => xScale(d) + xScale.bandwidth() / 2)
         .attr('y1', 0)
         .attr('y2', innerHeight)
         .attr('stroke', 'rgba(241, 172, 67, 0.3)')
         .attr('stroke-width', 1)
         .attr('stroke-dasharray', '3,3');

      // ➕ Линия слева (как border-left)
      gridVertical.append('line')
         .attr('x1', 0)
         .attr('x2', 0)
         .attr('y1', 0)
         .attr('y2', innerHeight)
         .attr('stroke', '#f1ac43') // основной цвет
         .attr('stroke-width', 3);


      // Ось X (только нижняя линия)
      const xAxis = svg.append('g')
         .attr('transform', `translate(0,${innerHeight})`)
         .call(d3.axisBottom(xScale));

      // Убираем верхнюю линию оси X
      xAxis.select('.domain').remove();
      xAxis.selectAll('.tick line').remove();

      // Ось Y (без верхней линии)
      const yAxis = svg.append('g')
         .call(d3.axisLeft(yScale)
            .tickFormat(d => `[${d}]`)
         );

      // Стилизация текста оси Y
      yAxis.selectAll('text')
         .style('letter-spacing', '1.5px');

      // Убираем верхнюю линию оси Y
      yAxis.select('.domain').remove();
      yAxis.selectAll('.tick line').remove();


      // Столбцы
      svg.selectAll('.bar')
         .data(data)
         .enter()
         .append('rect')
         .attr('class', 'bar')
         .attr('x', d => xScale(d.name))
         .attr('y', d => yScale(d.sales))
         .attr('width', xScale.bandwidth())
         .attr('height', d => innerHeight - yScale(d.sales))
         .attr('fill', 'rgba(241, 172, 67, 0.5)')

      // Подписи значений
      svg.selectAll('.label')
         .data(data)
         .enter()
         .append('text')
         .attr('class', 'label')
         .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
         .attr('y', d => yScale(d.sales) - 5)
         .attr('text-anchor', 'middle')
         .style('font-size', '12px')
         .style('fill', '#f1ac43')
         .text(d => d.sales);

   }, []);

   return (
      <div className={styles.chart}>
         <svg ref={svgRef}></svg>
      </div>
   );
};