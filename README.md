# Benchmark mobx with various use styles

## How to run

```
npm ci
npm run build
npm run bench
```

## Results

On my Macbook Pro M1

## 2024-11-30

| package | version |
| --- | --- |
| node | 22.11.0 |
| bun | 1.1.36 |
| typescript | 5.7.2 |
| mobx | 6.13.5 |

### Node

```
make-auto-observable x 296 ops/sec ±0.37% (91 runs sampled)
baseline x 222,290 ops/sec ±0.14% (98 runs sampled)
decorators x 475 ops/sec ±0.55% (93 runs sampled)
legacy-decorators x 284 ops/sec ±0.46% (92 runs sampled)
Fastest is decorators
```

### Bun

```
make-auto-observable x 450 ops/sec ±0.42% (93 runs sampled)
baseline x 125,778 ops/sec ±0.80% (90 runs sampled)
decorators x 769 ops/sec ±1.32% (86 runs sampled)
legacy-decorators x 432 ops/sec ±0.54% (92 runs sampled)
Fastest is decorators
```

## 2023-11-12

| package | version |
| --- | --- |
| node | 20.9.0 |
| bun | 1.0.11 |
| typescript | 5.2.2 |
| mobx | 6.11.0 |

### Node

```
make-auto-observable x 360 ops/sec ±0.33% (93 runs sampled)
baseline x 102,947 ops/sec ±0.14% (99 runs sampled)
decorators x 597 ops/sec ±0.42% (95 runs sampled)
legacy-decorators x 338 ops/sec ±0.36% (92 runs sampled)
Fastest is decorators
```

### Bun

```
make-auto-observable x 475 ops/sec ±0.58% (90 runs sampled)
baseline x 136,264 ops/sec ±0.68% (94 runs sampled)
decorators x 757 ops/sec ±0.91% (88 runs sampled)
legacy-decorators x 431 ops/sec ±0.60% (92 runs sampled)
Fastest is decorators
```
