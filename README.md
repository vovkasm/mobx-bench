# Benchmark mobx with various use styles

## How to run

```
npm ci
npm run build
npm run bench
```

## Results

On my Macbook Pro M1

## Node 20.9.0

```
make-auto-observable x 360 ops/sec ±0.33% (93 runs sampled)
baseline x 102,947 ops/sec ±0.14% (99 runs sampled)
decorators x 597 ops/sec ±0.42% (95 runs sampled)
legacy-decorators x 338 ops/sec ±0.36% (92 runs sampled)
Fastest is decorators
```

## Bun 1.0.11

```
make-auto-observable x 475 ops/sec ±0.58% (90 runs sampled)
baseline x 136,264 ops/sec ±0.68% (94 runs sampled)
decorators x 757 ops/sec ±0.91% (88 runs sampled)
legacy-decorators x 431 ops/sec ±0.60% (92 runs sampled)
Fastest is decorators
```
