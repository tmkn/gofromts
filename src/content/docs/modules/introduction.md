---
title: Introduction
description: How to use modules in Go.
---

Go of course also allows you to split up your code into multiple files. But before we go into that, let's first understand some terminology:

- **Modules**: In Go a **module** refers to a collection of Go packages that are versioned and distributed together. Think of it as a book.
- **Packages**: A **package** is a way to organize Go code within a directory. Think of it as the chapters to a book.

We'll look at modules and packages in more detail later, for now let's see how you can **export** code.

Unlike JavaScript/TypeScript, Go doesn't use keywords like `export` to manage visibility. Instead, i's based on a naming convention:
If the identifier (variable, function, type, etc.) starts with an uppercase letter, it is exported. If it starts with a lowercase letter, it remains local to the package.

:::note
To "export" something in Go, you need to start the identifier with an uppercase letter.
:::

## Simple Example

Let's look at a simple example:

```go title="calculator/operations.go" "package calculator" "Add" "subtract"
package calculator

func Add(a int, b int) int {
    return a + b
}

func subtract(a int, b int) int {
    return a - b
}
```

### Exporting

First, every Go file must start with a package declaration:

```go
package calculator
```

This tells Go that this file is part of the `calculator` package.

It's a convention in Go to name the package the same as the directory it is in, so this package would be in a directory called `calculator`.

Next is the `Add` function. Notice the uppercase `A`. This tells Go to make the function available outside the `calculator` package.

```go "A"
func Add(a int, b int) int {
    return a + b
}
```

If you don't want to export a certain function you need to **lowercase** the first letter, like with the `subtract` function:

```go "subtract"
func subtract(a int, b int) int {
    return a - b
}
```

This function will not be accessible outside of the `calculator` package.

### Visibility in `structs`

This mechanic extends to `structs` as well.

todo finish

Quite different export mechanic than JavaScript/TypeScript. If you are concious about naming you might need some time to get used to it.

Next, let's look to use this package in another file. Let's imagine the following directory structure:

### Importing

```
project/
├── calculator/
│   └── operations.go
└── main.go
```

You would then be able to use the `calculator` package in your `main.go` file like this:

```go title="/main.go" "calculator"
package main
import (
    "fmt"
    "calculator"
)

func main() {
    result := calculator.Add(5, 3)
    fmt.Println(result) // Output: 8
}
```

As mentioned earlier, the convention in Go is to use the directory name as the package name, in this case `calculator`. In your import statement you then specify the path to the package relative to your module root. In this case its just `calculator`:

```go "calculator"
import (
    "fmt"
    "calculator"
)
```

The package name will then be used as the namespace for the exported symbols. (functions, variables, types, etc.)

```go
result := calculator.Add(5, 3)
```

If there's a name clash between packages, you can use an alias to rename the package in the import statement:

```go
import (
    "fmt"
    calc "calculator"
)
```

Now if you want to call the `Add` function, you need to write `calc` instead of `calculator`:

```go
result := calc.Add(5, 3)
```

As you can see, imports are always namespaced, you can't import individual symbols like in JavaScript/TypeScript.

Let's look at modules and packages in more detail.
