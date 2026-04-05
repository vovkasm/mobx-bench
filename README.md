# Benchmark mobx with various use styles

## How to run

```
npm ci
npm run build
npm run bench
```

## Results

On my Macbook Pro M1

## 2026-04-05

| package | version |
| --- | --- |
| node | 24.14.1 |
| bun | 1.3.11 |
| typescript | 5.9.3 |
| mobx | 6.15.0 |

### Node

```
make-auto-observable x 302 ops/sec ±1.14% (91 runs sampled)
baseline x 80,762 ops/sec ±0.78% (74 runs sampled)
decorators x 446 ops/sec ±1.10% (78 runs sampled)
legacy-decorators x 294 ops/sec ±0.68% (92 runs sampled)
Fastest is decorators
```

### Bun

```
make-auto-observable x 433 ops/sec ±0.45% (89 runs sampled)
baseline x 117,976 ops/sec ±0.69% (95 runs sampled)
decorators x 800 ops/sec ±1.32% (88 runs sampled)
legacy-decorators x 442 ops/sec ±0.49% (91 runs sampled)
Fastest is decorators
```

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
