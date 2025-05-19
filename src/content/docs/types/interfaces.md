---
title: Interfaces
description: How to use interfaces in Go and how they compare to JavaScript/TypeScript.
---

In Go an interface is a named collection of method signatures:

```go title="interface.go"
type Animal interface {
    Speak() string
}
```

To implement this interface in Go, you need to define a struct and implement the methods as defined in the interface:

```go title="interface.go"
type Animal interface {
    Speak() string
}

type Dog struct{}
func (d Dog) Speak() string {
    return "Woof!"
}

type Cat struct{}
func (c Cat) Speak() string {
    return "Meow!"
}
```

You can then use the interface as a type:

```go title="interface.go"
func MakeItSpeak(a Animal) {
    fmt.Println(a.Speak())
}

func main() {
    dog := Dog{}
    cat := Cat{}

    MakeItSpeak(dog) // Woof!
    MakeItSpeak(cat) // Meow!
}
```

As you can see there is no "implements" keyword or similar in Go.

:::note
If a type has the methods defined in an interface, it implements that interface!
:::

This means that if we define a new type `Human` that also implements the Speak method aka complies to the `Animal` interface, we can use it as an Animal:

```go title="interface.go" {9-12}
type Animal interface {
    Speak() string
}

func MakeItSpeak(a Animal) {
    fmt.Println(a.Speak())
}

type Human struct{}
func (h Human) Speak() string {
    return "Hello!"
}

func main() {
    dog := Dog{}
    cat := Cat{}
    human := Human{}

    MakeItSpeak(dog)   // Woof!
    MakeItSpeak(cat)   // Meow!

    // This will also work!
    MakeItSpeak(human) // Hello!
}
```

Just something to keep in mind when you are working with interfaces in Go.

## Interface Composition

Go allows you to compose interfaces by embedding interfaces into another:

```go title="interface.go"
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type ReadWriter interface {
    Reader
    Writer
}
```

Now `ReadWriter` is a new interface that requires both `Read` and `Write` methods to be implemented.

This is a powerful feature of Go that allows you to create more complex interfaces by combining simpler ones.
