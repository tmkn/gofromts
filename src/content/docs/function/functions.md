---
title: Function Definitions
description: How to declare and use functions in Go.
---

In Go functions are declared using the `func` keyword:

```go title="function.go"
func myFunction() {
    fmt.Println("Hello, World!")
}
```

This is similar to JavaScript/TypeScript, but with a few differences in syntax and usage.

## Anonymous Functions

Like JavaScript/TypeScript, Go also supports anonymous functions.

```go title="anonymous_function.go"
func main() {
    myFunc := func() {
        fmt.Println("Hello from an anonymous function!")
    }
    myFunc()
}
```

## Immediately Invoked Function Expressions (IIFE)

It's possible to define an anomymous function and immediately execute it, similar to IIFE's.

```go title="iife.go"
func main() {
    func() {
        fmt.Println("Hello from an IIFE!")
    }()
}
```

Common when you deal with more advanced Go features like channels.
