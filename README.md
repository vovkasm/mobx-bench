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
make-auto-observable x 322 ops/sec ±0.28% (92 runs sampled)
baseline x 2,592 ops/sec ±0.06% (101 runs sampled)
decorators x 469 ops/sec ±0.28% (94 runs sampled)
legacy-decorators x 302 ops/sec ±0.20% (92 runs sampled)
Fastest is decorators
```
