# Benchmark mobx with various use styles

## How to run

```
npm ci
npm run build
npm run bench
```

## Results

On my Macbook Pro M1, with node 20.9.0

```
make-auto-observable x 360 ops/sec ±0.33% (93 runs sampled)
baseline x 102,947 ops/sec ±0.14% (99 runs sampled)
decorators x 597 ops/sec ±0.42% (95 runs sampled)
legacy-decorators x 338 ops/sec ±0.36% (92 runs sampled)
Fastest is decorators
```
