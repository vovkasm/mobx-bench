import Benchmark from "benchmark";

import { benchConstruction } from '@mobx-bench/make-auto-observable';

const suite = new Benchmark.Suite();
suite.add('make-auto-observable', () => {
  benchConstruction(100);
})
.on('cycle', function(event: any) {
  console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
