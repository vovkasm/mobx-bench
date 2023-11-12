import Benchmark from "benchmark";

import * as benchBaseline from '@mobx-bench/baseline';
import * as benchAutoObservable from '@mobx-bench/make-auto-observable';
import * as benchDecorators from '@mobx-bench/decorators';
import * as benchLegacyDecorators from '@mobx-bench/legacy-decorators';

const suite = new Benchmark.Suite();
suite.add('make-auto-observable', () => {
  benchAutoObservable.benchConstruction(100);
})
.add('baseline', () => {
  benchBaseline.benchConstruction(100);
})
.add('decorators', () => {
  benchDecorators.benchConstruction(100);
})
.add('legacy-decorators', () => {
  benchLegacyDecorators.benchConstruction(100);
})
.on('cycle', function(event: any) {
  console.log(String(event.target));
})
.on('complete', function(this: Benchmark.Suite) {
  console.log('Fastest is ' + this.filter((b: Benchmark) => b.name !== 'baseline').filter('fastest').map('name'));
})
.run({ 'async': true });
