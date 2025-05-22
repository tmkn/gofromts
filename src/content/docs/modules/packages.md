---
title: Packages
description: What are packages in Go and how to use them.
---

Now that we know what a module is, let's look at how we can manage our source code in Go.

This is done via packages.

First things first:

:::danger
Unlike Node.js Go does **not support** cyclic imports
:::

In Go there is much more emphasis on the folder structure of your project, while in Node.js you are free to do what you want, in Go you have to follow some conventions!

## The `main`package

While in Node.js you you don't need to make any special preparations to run code, in Go, you need to define a `main` package which acts as the entry point of your application:

```go title="main.go"
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

To run this code, you can use the `go run` command:

```bash
go run main.go
```

## Custom packages

Every source code file in Go must belong to a package, even the "entry" point of your application, which is denoted by the `main` package.
