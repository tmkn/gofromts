---
title: Switch Statements
description: How to use switch statements in Go.
---

Switch statements in Go are much more powerful than in JavaScript/TypeScript, generally they have the following syntax:

```go title="switch.go"
var x int = 1

switch x {
case 1:
    fmt.Println("x is 1")
case 2:
    fmt.Println("x is 2")
default:
    fmt.Println("x is neither 1 nor 2")
}
```

You can also declare a variable in the `switch` statement using the shorthand `:=` syntax, this variable will be then scoped to the `switch` statement:

```go title="switch_short.go" {1}
switch x := 1; x {
case 1:
    fmt.Println("x is 1")
case 2:
    fmt.Println("x is 2")
default:
    fmt.Println("x is neither 1 nor 2")
}
// x is not accessible here
```

However there is a key difference in behavior:
:::note
Go's switch statements don't fall through!
:::

## No fall-through

The above code is equivalent to the following JavaScript/TypeScript code:

```typescript title="switch.ts"
switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    default:
        console.log("x is neither 1 nor 2");
}
```

To have fall-through behavior in Go, you need to explicitely say so via the `fallthrough` statement:

```go title="switch_fallthrough.go" {4}
switch x {
case 1:
    fmt.Println("x is 1")
    fallthrough
case 2:
    fmt.Println("x is 2")
default:
    fmt.Println("x is neither 1 nor 2")
}
```

If `x` is `1`, it will print:

```terminal
x is 1
x is 2
```

## Case Expressions

While JavaScript/TypeScript is fairly limited, only allowing for equality checks `===`, Go's switch statements can use a variety of expressions:

### Boolean Expressions

```go title="switch_bool.go"
switch {
case x > 0:
    fmt.Println("x is positive")
case x < 0:
    fmt.Println("x is negative")
default:
    fmt.Println("x is zero")
}
```

Note, the absence of a condition after `switch`! This is perfectly valid in Go.

### Function Calls

You can evaluate function calls in switch statements:

```go title="switch_func.go"
func isChild(age int) bool {
    return age >= 0 && age < 13
}

func isTeen(age int) bool {
    return age >= 13 && age < 18
}

func isAdult(age int) bool {
    return age >= 18
}

func main() {
    age := 15

    switch {
    case isChild(age):
        fmt.Println("You are a child")
    case isTeen(age):
        fmt.Println("You are a teenager")
    case isAdult(age):
        fmt.Println("You are an adult")
    default:
        fmt.Println("Invalid age")
    }
}
```

### Type Switches

todo
