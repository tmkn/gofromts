---
title: Arguments
description: How to use function arguments in Go.
---

Go functions of course can also take arguments:

```go title="arguments.go"
func add(x int, y int) int {
    return x + y
}
```

Similar to variables that share the same type, you can use a shorthand to define function arguments of the same type:

```go title="arguments_short.go"
func add(x, y int) int {
    return x + y
}
```

However, there are quite some differences between Go and JavaScript/TypeScript when it comes to function arguments:

## Variadic Parameters

Go allows you to pass a variable number of arguments to a function using the `...` syntax:

```go title="sum.go"
func sum(numbers ...int) int {
    total := 0
    for _, number := range numbers {
        total += number
    }
    return total
}
```

Usage:

```go title="sum_usage.go"
func main() {
    result := sum(1, 2, 3, 4, 5)
    fmt.Println(result) // Output: 15
}
```

Or if you have a slice of integers, you can "spread" them as well:

```go title="sum_slice.go"
func main() {
    numbers := []int{1, 2, 3, 4, 5}
    result := sum(numbers...)
    fmt.Println(result) // Output: 15
}
```

Note that unlike JavaScript/TypeScript the "spread" `...` is added to the end of the "sliced" var.

## Optional Parameters

:::note
Go does not support optional parameters
:::

## Default Parameters

:::note
Go does not support default parameters
:::

## Overloading

:::note
Go does not support function overloading
:::
