# Benchmark mobx with various use styles

## How to run

```
npm ci
npm run build
npm run bench
```

## Results

On my Macbook Pro M1, with node 18.17.1

```
make-auto-observable x 360 ops/sec ±0.21% (92 runs sampled)
decorators x 483 ops/sec ±0.26% (96 runs sampled)
legacy-decorators x 340 ops/sec ±0.19% (92 runs sampled)
Fastest is decorators
```
