import candela from 'candela';
import 'candela-vega';

import { iris } from '../datasets';
import showComponent from '../util/showComponent';

window.onload = () => {
  showComponent(candela.components.BoxPlot, {
    data: iris,
    fields: [
      'sepalLength',
      'sepalWidth'
    ],
    group: 'species',
    boxSize: 0.5,
    capSize: 0.25,
    width: 750,
    height: 450,
    padding: {
      left: 30,
      right: 20,
      top: 20,
      bottom: 130
    },
    renderer: 'svg'
  });
};