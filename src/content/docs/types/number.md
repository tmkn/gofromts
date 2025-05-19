---
title: number
description: How Go's number types compare to JavaScript/TypeScript.
---

Go features a much richer set of number types than JavaScript/TypeScript.

They are basically divided into 2 categories:

- **Integers**: int8, int16, int32, int64, uint8, uint16, uint32, uint64
- **Floating point numbers**: float32, float64

So in Go you have to think whether you want to store integers or floating point numbers. They are not interchangeable like in JavaScript/TypeScript. You need to explicitly convert between them.

:::note
Go also has a `complex` type, however since it is not available in JavaScript/TypeScript, we will not cover it here.
:::

## Integers

In Go you can use the following integer types:

- `int8`: 8-bit signed integer
- `int16`: 16-bit signed integer
- `int32`: 32-bit signed integer
- `int64`: 64-bit signed integer
- `uint8`: 8-bit unsigned integer
- `uint16`: 16-bit unsigned integer
- `uint32`: 32-bit unsigned integer
- `uint64`: 64-bit unsigned integer

Additionally you also get the following types, where the actual size depends on the architecture the code is running on (32-bit on 32-bit systems and 64-bit on 64-bit systems):

- `int`: signed integer
- `uint`: unsigned integer

For daily use it's fine to use `int` and `uint` as you'll most likely run your code on 64 bit systems which gives you plenty of space to store numbers.

### signed vs unsigned vs bit size

Since this is not something that you need to deal with in JavaScript/TypeScript, let's quickly explain those characteristics.

`int8`. This means its an **8 bit signed integer**.
Since it is signed it will need 1 bit to store the sign (positive or negative), the remaining 7 bits will be used to store the number.

This means that you can store values ranging from `-128` to `127`.

Compare this to `uint8`, which is an **8 bit unsigned integer**. It will take up the same space in memory as `int8` but it will use all 8 bits to store the number. All stored numbers are positive, so the range is `0` to `255`.

Effectively this means that with the same bit depth you can store larger numbers in the unsigned version, however they can't be negative.

Let's look at `int32` and `uint32`, same deal, 32 bits to store the number, but 1 bit is used to store the sign in the signed version:

- `int32`: `-2,147,483,648` to `2,147,483,647`
- `uint32`: `0` to `4,294,967,295`

## Floating point numbers

In Go you can use the following floating point types:

- `float32`: 32-bit floating point number
- `float64`: 64-bit floating point number

## Converting between types

You can convert between types using the following syntax:

```go title="convert.go"
var a int = 10
var b float64 = float64(a) // Convert int to float64
var c int = int(b) // Convert float64 back to int
```

:::caution
Be mindful of precision losses when converting between types.
:::

### Precision loss

When converting from `int32` to `int8`, you will lose precision if the number is larger than `127` or smaller than `-128` as that is all that `int8` can store.

```go title="convert_precision_loss.go"
var a int32 = 200
var b int8 = int8(a) // Precision loss
fmt.Println(b) // Output: -56
```

This is because `int8` can only store numbers from `-128` to `127`, so the number `200` is out of range. When you convert it, it will wrap around and give you `-56`!

Go does not guard against this, its up to you to check if this conversion is safe, like:

```go title="convert_precision_loss_check.go"
var a int32 = 200
if a > math.MaxInt8 || a < math.MinInt8 {
    panic("Conversion would result in precision loss")
} else {
    var b int8 = int8(a) // Safe conversion
    fmt.Println(b) // Output: 200
}
```

In this case it will always panic (panic is a built in function that exits the program) as `a` is hardcoded to `200`, but you get the idea.
