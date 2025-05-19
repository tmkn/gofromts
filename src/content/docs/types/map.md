---
title: Map
description: How maps are represented in Go.
---

Maps in Go can be created via the `make` function or via the `map` syntax.

The following creates a map where the keys are `strings` and the values are `integers`:

```go title="map.go"
var m1 map[string]int = make(map[string]int)
var m2 map[string]int = map[string]int{
    "one": 1,
    "two": 2,
}
```

:::caution
Unlike JavaScript/TypeScript, iteration order of maps is not guaranteed in Go!
:::

## Accessing values

You can access values in maps using array brackets:

```go title="map_access.go"
m := map[string]int{
    "one": 1,
    "two": 2,
}
fmt.Println(m["one"]) // prints 1
fmt.Println(m["two"]) // prints 2
```

If the key does not exist, it will return the zero value of the value type:

```go title="map_access_zero.go"
m := map[string]int{
    "one": 1,
    "two": 2,
}
fmt.Println(m["three"]) // prints 0
```

Luckily the lookup also returns a boolean indicating if the key exists in the map:

```go title="map_access_exists.go" {6}
m := map[string]int{
    "one": 1,
    "two": 2,
}

v, exists := m["three"]
fmt.Println(v) // prints 0
fmt.Println(exists) // prints false
```

## Adding values

You can add values to a map using the same syntax as accessing values:

```go title="map_add.go"
m := make(map[string]int)
m["one"] = 1
m["two"] = 2
fmt.Println(m) // prints map[one:1 two:2]
```

## Deleting values

You can delete values from a map using the `delete` function:

```go title="map_delete.go"
m := map[string]int{
    "one": 1,
    "two": 2,
}
delete(m, "one")
fmt.Println(m) // prints map[two:2]
```

## Iterating over maps

You can use the `range` keyword to iterate over maps.

As said, iteration order is not guaranteed!

```go title="map_iterate.go"
m := map[string]int{
    "one": 1,
    "two": 2,
}
for k, v := range m {
    fmt.Printf("Key: %s, Value: %d\n", k, v)
}
```

This will _likely_ print:

```terminal
Key: one, Value: 1
Key: two, Value: 2
```

The order will vary between different runs of the program.
