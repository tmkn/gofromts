---
title: null & undefined
description: How null and undefined are represented in Go.
---

Go doesn't have `null` or `undefined` like JavaScript. To support use cases where you need to represent the absence of a value, Go uses `nil`.

As we've just learned, uninitialized variables in Go are set to their **zero value**, so only specific types can be `nil`. Basic types like `int`, `float`, and `string` cannot be `nil`. However, pointers, slices, maps, channels, interfaces, and function types can be `nil`.

## Signaling optionality

As mentioned in the function arguments section, Go doesn't support optional arguments. A common pattern to signal optionality is to use a pointer type. This way you can pass `nil` to indicate that the argument is not provided.

```go title="optional.go"
package main
import "fmt"

func greet(name *string) {
    if name == nil {
        fmt.Println("Hello Unknown User!")
    } else {
        fmt.Printf("Hello, %s!\n", *name)
    }
}

func main() {
    var name *string // Set to nil due to zero value
    greet(name) // Output: Hello Unknown User!

    nameValue := "John"
    name = &nameValue
    greet(name) // Output: Hello, John!
}
```

Note the `*` before `string` in the `greet` function signature. This indicates that `name` is a **pointer** to a string.

We'll discuss pointer in more detail later as they are a new and very important concept in Go. For the meantime just know that with pointers you can indicate that a variable is optional. In the example above we could also pass `nil` directly:

```go title="optional.go"
func main() {
    greet(nil) // Output: Hello Unknown User!
}
```

However it's not possible to omit the argument completely. You still need to pass `nil` explicitly!

:::danger
The following code will not compile:

```go title="optional.go"
func main() {
    greet() // Error: not enough arguments in call to greet
}
```

:::
