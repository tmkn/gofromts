---
title: object
description: How Go's object types compare to JavaScript/TypeScript objects.
---

For `object` like types, Go has the `struct` type:

```go title="object.go"
type Person struct {
    Name string
    Age  int
}
func main() {
    p := Person{Name: "John", Age: 30}
    fmt.Println(p.Name) // John
    fmt.Println(p.Age)  // 30
}
```

Like with normal variables, each field in a struct is initialized to its zero value if not explicitly set:

```go title="object.go"
type Person struct {
    Name string
    Age  int
}
func main() {
    p := Person{} // No fields set
    fmt.Println(p.Name) // "" - zero value of string
    fmt.Println(p.Age)  // 0 - zero value of int
}
```

## Methods

Structs can have methods associated with them, similar to classes in JavaScript/TypeScript:

```go title="object.go"
type Person struct {
    Name string
    Age  int
}
func (p Person) Greet() string {
    return "Hello, " + p.Name
}
func main() {
    p := Person{Name: "John", Age: 30}
    fmt.Println(p.Greet()) // Hello, John
}
```

:::caution
If you want to modify the struct, you need to use a pointer receiver!
:::

```go title="object.go" {5}
type Person struct {
    Name string
    Age  int
}
func (p *Person) Birthday() {
    p.Age++
}

func main() {
    p := Person{Name: "John", Age: 30}
    p.Birthday()
    fmt.Println(p.Age) // 31
}
```

Note the `*` before `Person` in the method signature. This indicates that `p` is a pointer to a `Person` struct. This allows you to modify the original struct when calling the method.

Without it, Go would create a **copy** of the struct and any modifications would not affect the original struct.

:::caution
The following code will compile and run just fine but won't modify the original struct:

```go title="object.go" {5}
type Person struct {
    Name string
    Age  int
}
func (p Person) Birthday() {
    p.Age++
}
func main() {
    p := Person{Name: "John", Age: 30}
    p.Birthday()
    fmt.Println(p.Age) // 30
}
```

:::

In this case, the `Birthday` method receives a **copy** of `p`, increments the age of the **copy**, and then discards it. The original `p` remains unchanged.
