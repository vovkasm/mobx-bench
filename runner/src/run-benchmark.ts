import Benchmark from "benchmark";

import * as benchmarkAutoObservable from '@mobx-bench/make-auto-observable';
import * as benchmarkDecorators from '@mobx-bench/decorators';

const suite = new Benchmark.Suite();
suite.add('make-auto-observable', () => {
  benchmarkAutoObservable.benchConstruction(100);
})
.add('decorators', () => {
  benchmarkDecorators.benchConstruction(100);
})
.on('cycle', function(event: any) {
  console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
