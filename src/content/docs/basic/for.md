---
title: For Loops
description: How to use for loops in Go.
---

In Go, `for` loops are the only loop construct available. There are no `while` or `do while` loops in Go, the canonical way to do these sort of loops is via `for` loops.

The basic structure of a `for` loop in Go is as follows:

```go title="for.go"
for i := 1; i <= 5; i++ {
    fmt.Println("Count:", i)
}
```

This will print:

```terminal
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

Similar to JavaScript/TypeScript, there are three parts to the `for` loop:

1. **Initialization**: `i := 1` - This initializes the loop variable `i` to `1`.
2. **Condition**: `i <= 5` - This is the condition that is checked before each iteration of the loop. If it evaluates to `true`, the loop body will execute.
3. **Post Statement**: `i++` - This is executed after each iteration of the loop body. In this case, it increments `i` by `1`.
   The loop will continue until the condition evaluates to `false`.

However unlike JavaScript/TypeScript, parts of the `for` loop can be omitted.

## Different ways to use `for` loops

The possibility to omit parts of the `for` loop allows you to create all sorts of loops like `while` loops and inifinite loops.

This flexibility is one of the reasons why `for` loops are the **only** loop construct in Go.

### While Loops

```go title="for_while.go"
x := 0
for x < 5 {
    fmt.Println("Count:", x)
    x++
}
```

Note that the initialization and post statement parts are omitted.

### Infinite Loops

```go title="for_infinite.go"
for {
    fmt.Println("This will run forever!")
}
```

Note the absence of any condition in the `for` statement. You can use `break` to exit the loop if needed.

### Do While Loops

```go title="for_do_while.go"
x := 0
for {
    fmt.Println("Count:", x)
    x++
    if x >= 5 {
        break
    }
}
```

## `range` keyword

You can use the `range` keyword to iterate over arrays, slices, maps, and channels in Go.

This is similar to the `for...of` loop in JavaScript/TypeScript.

### Iterating over Strings

```go title="for_range_string.go"
str := "Hello"
for i, v := range str {
    fmt.Printf("Index: %d, Value: %c\n", i, v)
}
```

This will print:

```terminal
Index: 0, Value: H
Index: 1, Value: e
Index: 2, Value: l
Index: 3, Value: l
Index: 4, Value: o
```

Note that the value `v` is of type `rune`, which is an alias for `int32`. This is because Go uses UTF-8 encoding for strings, and `rune` can represent any Unicode character.

### Iterating over Arrays and Slices

```go title="for_range_array.go"
arr := [5]int{1, 2, 3, 4, 5}
for i, v := range arr {
    fmt.Printf("Index: %d, Value: %d\n", i, v)
}
```

This will print:

```terminal
Index: 0, Value: 1
Index: 1, Value: 2
Index: 2, Value: 3
Index: 3, Value: 4
Index: 4, Value: 5
```

### Iterating over Maps

```go title="for_range_map.go"
myMap := map[string]int{"apple": 1, "banana": 2}
for k, v := range myMap {
    fmt.Printf("Key: %s, Value: %d\n", k, v)
}
```

This will _likely_ print:

```terminal
Key: apple, Value: 1
Key: banana, Value: 2
```

:::danger
Unlike JavaScript/TypeScript, the order of iteration over maps is not guaranteed in Go. The order may vary between different runs of the program.
:::

If you need to iterate over a map in a specific order, you can use a slice to store the keys, sort them and then iterate over the sorted keys and use them to access the map.

## `break` and `continue`

Like JavaScript/TypeScript, you can use `break` and `continue` statements in Go to control the flow of loops.

```go title="for_break_continue.go"
for i := 1; i <= 5; i++ {
    if i == 3 {
        continue // Skip the rest of the loop when i is 3
    }
    if i == 5 {
        break // Exit the loop when i is 5
    }
    fmt.Println("Count:", i)
}
```

This will print:

```terminal
Count: 1
Count: 2
Count: 4
```

## Labels

Like JavaScript/TypeScript, you can use labels to break out of nested loops.
