---
title: If Statements
description: How to use if statements in Go.
---

In Go, `if` statements are similar to JavaScript/TypeScript, but with a few differences in syntax and usage.
The basic structure of an `if` statement in Go is as follows:

```go title="if.go"
x := 10
if x > 5 {
    fmt.Println("x is greater than 5")
} else if x < 5 {
    fmt.Println("x is less than 5")
} else {
    fmt.Println("x is equal to 5")
}
```

Note that there are no parentheses around the condition in the `if` statement!

:::note
Curly braces `{}` are required in Go, even for single-line statements.
:::

## Variable Declaration in If Statements

Unlike JavaScript, in Go, you can declare a variable in the `if` statement using the shorthand variable declaration syntax `:=`.
This variable will be scoped to the `if` statement and will not be accessible outside of it!

```go title="if_short.go"
x := 10
if y := x * 2; y > 10 {
    fmt.Println("y is greater than 10")
} else {
    fmt.Println("y is less than or equal to 10")
}
```

Given the following TypeScript code:

```typescript title="lookup.ts"
let myMap: Record<string, number> = {
    apple: 1,
    banana: 2
};

let count = myMap["apple"];

if (count != undefined) {
    console.log(`Apple count: ${count}`);
} else {
    console.log("Apple not found");
}
```

This can be elegantly rewritten in Go as:

```go title="lookup.go"
myMap := map[string]int{"apple": 1, "banana": 2}

if count, exist := myMap["apple"]; exist {
    fmt.Printf("Apple count: %d\n", count) // count is 1, exist is true
} else {
    fmt.Println("Apple not found") // count is 0 (zero value for int), exist is false
}
```
