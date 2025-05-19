---
title: any
description: How the `any` type is represented in Go.
---

Go has a special type called `any` that you can use to assign any value to it. This is similar to the `any` type in TypeScript.

```go
var x any
x = 42
x = "hello"
x = []string{"a", "b"}
```

The `any` type is an alias for `interface{}`, which is an empty interface that can hold any value.

To use the value stored in an `any` variable, you need to use type assertions or type switches to convert it back to its original type.

```go title="any.go"
var x any = 42
if v, ok := x.(int); ok {
    fmt.Println("x is an int:", v)
} else {
    fmt.Println("x is not an int")
}
```

This is also the greatest difference between `any` in Go and `any` in TypeScript.

In TypeScript it means "trust me, I know what I'm doing" and you can use it without any further checks.

In Go it only means "I'll let you store anything, but you must prove what it is before you can use it".
