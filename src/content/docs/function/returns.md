---
title: Return Values
description: How to return values from functions in Go.
---

A simple function with a return value in Go looks like this:

```go title="greet.go"
func greet() string {
    return "Hello"
}
```

However, like with function arguments, there are some differences between Go and JavaScript/TypeScript:

## No implicit `undefined` Return Value

In Go, a function that returns nothing, will return nothing. In these situations it will not return `undefined` like in JavaScript/TypeScript.

## Multiple Return Values

Go supports multiple return values, no need to wrap them in an object or array:

```go title="multiple_return.go"
func getCoordinates() (int, int) {
    return 10, 20
}
```

Usage:

```go title="multiple_return_usage.go"
func main() {
    x, y := getCoordinates()
    fmt.Println(x, y) // Output: 10 20
}
```

## Named Return Values

You can also **name** the return values in a function signature:

This has two benefits:

1. You can omit the `return` statement if you want to return the named values.
2. You can use the named values in the function body without declaring them.

```go title="named_return.go"
func getCoordinates() (x int, y int) {
    x = 10
    y = 20
    return // No need to specify x and y here
}
```

With this syntax, Go automatically creates variables `x` and `y` for you to use in the function body.

Then when you just use `return`, it will implicitly return the values of `x` and `y`.

However, you can still write the full `return` statement if you wish:

```go title="named_return_2.go"
func getCoordinates() (x int, y int) {
    x = 10
    y = 20
    return x, y // Though named, still valid
}
```

## Error Handling

Go doesn't have exceptions, it returns errors as values instead. That's where the multiple return values come in handy. A common pattern is to return **a value** and **an error**. You see this a lot in the standard library:

```go title="error_handling.go"
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

Here we return 2 values, the result of the division and an error. If the division is successful, we return `nil` for the error. If we would try to divide by 0, we return a non-nil error.

Usage:

```go title="error_handling_usage.go"
func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```
