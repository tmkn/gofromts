---
title: Overview
description: Types in Go and how they compare to JavaScript/TypeScript.
---

Go being a system programming language, features a much richer set of types than JavaScript/TypeScript. This is pretty noticeable when you look at the `number` types. While in TypeScript there is only one type to represent numbers, `number`, in Go you'll find a whole family of them. Each with specific characteristics that make them suitable for different use cases.

There is also 1 specific difference between Go and JavaScript/TypeScript when it comes to variables that is worth mentioning: **zero values**.

## The Zero value

In Go, all types have a **zero value**.

It is used to give a variable an initial value when you don't explicitly assign one. The **zero value** differs from type to type.

E.g. the following TypeScript code would result in `NaN` (if you ignore the compile errors and run it):

```javascript
let a: number;
let b = a + 1;
console.log(b); // NaN
```

However, equivalent Go code would result in `1`:

```go
var a int
b := a + 1
fmt.Println(b) // 1
```

This is because uninitialized variables in Go are implicitly initialized with their **zero value**. In this case the **zero value** of `int` is `0`, so `a` contains the value `0`, even though we didn't specify it explicitly.

When we initialize the `b` variable, `a` is `0` (instead of `undefined` like in JavaScript) so the assignment to `b` reads `0 + 1`.

### Zero value overview

Here's a short overview of the **zero values** for the most common types in Go:

| Type      | Zero Value |
| --------- | ---------- |
| `int`     | `0`        |
| `float32` | `0.0`      |
| `bool`    | `false`    |
| `string`  | `""`       |
| `array`   | `[]`       |
| `struct`  | `{}`       |
| `map`     | `nil`      |
| `slice`   | `nil`      |
