---
title: array
description: How arrays are represented in Go.
---

Arrays in Go are **fixed size**. If you want similar functionality to JavaScript/TypeScript arrays, you want to use slices.

## Arrays

As said they are fixed size. This means that you cannot change the size of an array after it is created. You can only change the values inside the array.

```go title="array.go"
var a [5]int // array of 5 integers
var b [5]int = [5]int{1, 2, 3, 4, 5} // array of 5 integers with values
var c = [5]int{1, 2, 3, 4, 5} // array of 5 integers with values
var d = [...]int{1, 2, 3, 4, 5} // array of 5 integers with values and size inferred
```

As always if the type can be inferred from the right side, you can omit it on the left side.

All of them declare a fixed array of 5 integers.

## Slices

This is the type that you want to use if you want dynamic arrays.

```go title="slice.go"
var a []int // slice of integers
var b []int = []int{1, 2, 3, 4, 5} // slice of integers with values
var c = []int{1, 2, 3, 4, 5} // slice of integers with values
```

Slices have 2 important properties:

- **Length**: The number of current elements in the slice.
- **Capacity**: The maximum number of elements that can be stored in the slice before it needs to be resized.

To get the length and capacity of a slice you can use the built in `len` and `cap` functions:

```go title="slice_len_cap.go"
var a = make([]int, 5, 10) // slice of 5 integers with capacity of 10
fmt.Println(len(a)) // Output: 5
fmt.Println(cap(a)) // Output: 10
```

While Go automatically resizes slices when needed, this can sometimes be inefficient as it needs to allocate new memory, copy it etc.

For use cases where performance is critical and you want more control on when slices are resized, you can preallocate a slice with a specific length and capacity via the `make` function:

```go title="slice_make.go"
var a = make([]int, 5) // slice of 5 integers
var b = make([]int, 5, 10) // slice of 5 integers with capacity of 10
```

The individual elements of the slice will be initialized to the zero value of the type. In this case, `0` for integers.

### `:` operator

You can use the `:` operator to quickly create a slice from an array or another slice:

```go title="slice_operator.go" {2}
var a = [5]int{1, 2, 3, 4, 5} // array of 5 integers
var b = a[1:3] // slice of array a from index 1 to 3 (exclusive)
fmt.Println(b) // Output: [2 3]
```

The first number is the starting index (inclusive) and the second number is the ending index (exclusive).

However you can also omit the first or second number to indicate the start or end of the slice.

Here's how to get the first 3 elements of an array:

```go title="slice_operator_1.go" {2}
var a = [5]int{1, 2, 3, 4, 5} // array of 5 integers
var b = a[:3] // slice of array a from index 0 to 3 (exclusive)
fmt.Println(b) // Output: [1 2 3]
```

And here's how to omit the first 3 elements of an array:

```go title="slice_operator_2.go" {2}
var a = [5]int{1, 2, 3, 4, 5} // array of 5 integers
var b = a[3:] // slice of array a from index 3 to end
fmt.Println(b) // Output: [4 5]
```

You can also use the `:` operator to create a slice from another slice.

### Appending elements

The `append` function is used to add elements to a slice:

```go title="slice_append.go"
var a = []int{1, 2, 3} // slice of integers
a = append(a, 4) // append 4 to slice a
fmt.Println(a) // Output: [1 2 3 4]
```

You can also append multiple elements at once:

```go title="slice_append_multiple.go"
var a = []int{1, 2, 3} // slice of integers
a = append(a, 4, 5, 6) // append 4, 5, 6
fmt.Println(a) // Output: [1 2 3 4 5 6]
```

### Modifying elements

:::danger
While you can use array indices to access elements, you can only access elements that are within the length of the slice. If you try to access an element outside of the length of the slice, even if its within the capacity, it will panic!
:::

This will work fine:

```go title="slice_modify.go"
var a = []int{1, 2, 3} // slice of integers
a[0] = 10 // modify first element
fmt.Println(a) // Output: [10 2 3]
```

This will panic, even though capacity is 5 and we try to modify the 4th element:

:::danger

```go title="slice_modify_panic.go"
var a = make([]int, 3, 5) // slice of integers
a[3] = 10 // modify fourth element
// This will panic: index out of range [3] with length 3
```

:::

It's good practice to always check the length of the slice before modifying it, like:

```go title="slice_modify_check.go"
var a = []int{1, 2, 3} // slice of integers
if len(a) > 3 {
    a[3] = 10 // modify fourth element
} else {
    fmt.Println("Slice is too short")
}
```

This will print `Slice is too short` and not panic.

### Removing elements

Removing elements is done by using the `append` function and slicing via `:`. Here's how to remove the third element from a slice:

```go title="slice_remove.go" {2}
var a = []int{1, 2, 3, 4, 5} // slice of integers
a = append(a[:2], a[3:]...) // remove third element
fmt.Println(a) // Output: [1 2 4 5]
```

`a[:2]` creates a new slice with the first two elements and `a[3:]` creates a new slice with all elements after the third element. The `...` operator is used to "spread" the elements of the slice into the `append` function.

### Clearing a slice

To clear a slice, you can simply set its length to 0:

```go title="slice_clear.go"
var a = []int{1, 2, 3, 4, 5} // slice of integers
a = a[:0] // clear slice
fmt.Println(a) // Output: []
```

This will retain the underlying array (capacity) but set the length to 0. Useful if you want to reuse the slice without allocating new memory.

To completely clear the slice and free the memory, you can set it to `nil`:

```go title="slice_clear_nil.go"
var a = []int{1, 2, 3, 4, 5} // slice of integers
a = nil // clear slice
fmt.Println(a) // Output: []
```

This will set the slice to `nil` and free the memory used by the underlying array.

### Copying a slice

To copy a slice, you can use the built-in `copy` function:

```go title="slice_copy.go"
var a = []int{1, 2, 3, 4, 5} // slice of integers
var b = make([]int, len(a)) // create a new slice with the same length
copy(b, a) // copy slice a to slice b
fmt.Println(b) // Output: [1 2 3 4 5]
```
