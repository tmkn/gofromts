---
title: Variable Declarations
description: How to declare variables in Go.
---

To declare a variable in Go, you use the `var` keyword followed by the variable name and type. The type is optional if you are initializing the variable at the same time.

Unlike in JavaScript, `var` creates a block scoped variable, like `let` would do in JavaScript. There is no way to create a lexically scoped variable in Go.

```go title="variables.go"
var x int = 10 // Declare and initialize an int variable

var y = 20   // Declare and initialize an int variable (inferred)

// Declare a string variable without initialization, will be set to the zero value
var z string
```

## A note on uninitialized variables

:::note
In Go, if you declare a variable without initializing it, it will be set to the **zero value** of its type.
:::

While in JavaScript, uninitialized variables are set to `undefined`, in Go, they are set to the **zero value** of their type.

The **zero value** differs by type:

- `int`: `0`
- `float64`: `0.0`
- `string`: `""` (empty string)
- `bool`: `false`
- `[]T`: `nil` (empty slice)
- `map[K]V`: `nil` (empty map)
- `chan T`: `nil` (empty channel)

## Constants

Constants are declared using the `const` keyword:

```go title="constants.go"
const pi = 3.14 // Declare a constant
```

## Shorthand Declaration

You will often see the following shorthand declaration `:=` in Go:

```go title="shorthand.go"
x := 10 // Declare and initialize an int variable
```

this is equivalent to:

```go title="shorthand.go"
var x int = 10 // Declare and initialize an int variable
```

> Constants cannot be declared using the shorthand declaration.

It's most often used in places with multiple return values:

```go title="shorthand.go"
file, err := os.Open("filename.txt")
if err != nil {
    // handle error
}
// use file
```

Without the shorthand, it would need to look like this:

```go title="shorthand.go"
var file *os.File
var err error
file, err = os.Open("filename.txt")
if err != nil {
    // handle error
}
// use file
```

However you can use the shorthand also with ordinary values:

```go title="multiple.go"
x, y, z := 1, "hello", true
```

## Multiple Declarations

You can declare multiple variables at once using the following syntax:

```go title="multiple.go"
var (
    x int
    y string
    z bool
)
```

This is equivalent to:

```go title="multiple.go"
var x int
var y string
var z bool
```

If they all share the same type, you even shorten it further:

```go title="multiple.go"
var x, y, z int
```

This is equivalent to:

```go title="multiple.go"
var x int
var y int
var z int
```
