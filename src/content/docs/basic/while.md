---
title: While Loops
description: How to use while loops in Go.
---

:::note
There are no `while` loops in Go!

The canonical way to do `while` loops in Go is to use `for` loops.
:::

```go title="while.go"
x := 0
for x < 10 {
    fmt.Println(x)
    x++
}
```

Consequently there is also no `do while` loop in Go, again you can achieve the same functionality using `for` loops:

```go title="do_while.go"
x := 0
for {
    fmt.Println(x)
    x++
    if x >= 10 {
        break
    }
}
```

## Infinite Loops

You can create an infinite loop in Go using the `for` statement without any condition:

```go title="infinite_loop.go"
for {
    fmt.Println("This will run forever!")
}
```
