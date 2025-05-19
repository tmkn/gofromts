---
title: Set
description: How to use the Set type in Go and how it compares to JavaScript/TypeScript.
---

:::note
Go does not have a built in `Set` type like JavaScript/TypeScript.
:::

However, you can repurpose the `map` type to create a set-like structure.

```go title="set.go"
// Create a set using a map
set := make(map[string]struct{})

// Add elements to the set
set["apple"] = struct{}{}
set["banana"] = struct{}{}
set["orange"] = struct{}{}

// Check if an element is in the set
if _, exists := set["banana"]; exists {
    fmt.Println("banana is in the set")
}

// Remove an element from the set
delete(set, "banana")

// Check if an element is in the set
if _, exists := set["banana"]; !exists {
    fmt.Println("banana is not in the set anymore")
}
```

The `struct{}{}` is an empty struct type, which takes no memory. This allows you to use the map as a set without storing any values.

While this is not a true set implementation, it works well for most use cases.
