---
title: boolean
description: How booleans are represented in Go.
---

Booleans work the same way in Go as they do in JavaScript and TypeScript. They can be either `true` or `false`.

```go
var a bool = true
var b bool = false
var c bool // set to false due to zero value
```

## `true` and `false` as types

:::caution
Unlike in TypeScript you cannot use `true` and `false` as types in Go. You can only use them as values. The resulting type will always be `bool`.
:::
