---
title: string
description: How to use strings in Go and how they compare to JavaScript/TypeScript.
---

Strings in Go are created via double quotes:

```go title="string_example.go"
str := "Hello, world!"
```

A notable difference between strings in Go and strings in JavaScript/TypeScript is that strings in Go are UTF-8 encoded while JavaScript/TypeScript strings are UTF-16 encoded.

## Go strings vs JavaScript strings (UTF-8 vs UTF-16)

While technically JavaScript strings need more memory due to their UTF-16 encoding, the more obvious difference is how iteration works.

In Go, when you get the length of a string using `len`, it returns the number of **bytes** in the string, not necessarily the number of characters. This is because Go uses UTF-8 encoding, which can use 1 to 4 bytes per character.
In JavaScript, the `length` property returns the number of UTF-16 code units in the string, e.g:

```javascript title="string_example.js"
const str = "é";
console.log(str.length); // Output: 1 (UTF-16 code units)
```

Compared to Go:

```go title="string_example.go"
str := "é"
length := len(str)
fmt.Println(length) // Output: 2 (bytes)
```

To represent the character `é` in UTF-8, it takes 2 bytes. So Go when asked about the length will print `2`. But when dealing with strings you most likely don't intend to work with the individual bytes but rather the "characters" in it. As such Go provides a special type called `rune` which represents a single Unicode code point.

So given the above string, if we want to get the number of characters in it we can use the `utf8.RuneCountInString` function:

```go title="string_length.go"
import "unicode/utf8"
// ...
str := "é"
length := utf8.RuneCountInString(str)
fmt.Println(length) // Output: 1 (characters)
```

Now, we will get length 1 as expected.

Likewise if we want to iterate over the individual characters (runes) in a string we can use the `for range` loop:

```go title="string_iterate.go"
import "unicode/utf8"
// ...
str := "Medellín"
for i, r := range str {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
```

This will print:

```
Index: 0, Rune: M
Index: 1, Rune: e
Index: 2, Rune: d
Index: 3, Rune: e
Index: 4, Rune: l
Index: 5, Rune: l
Index: 6, Rune: í
Index: 7, Rune: n
```

We could also iterate over the string using a `for` loop and `len` but as mentioned this would give us the individual bytes:

```go title="string_iterate_bytes.go"
str := "Medellín"
for i := 0; i < len(str); i++ {
    fmt.Printf("Index: %d, Byte: %c\n", i, str[i])
}
```

This will print:

```
Index: 0, Byte: M
Index: 1, Byte: e
Index: 2, Byte: d
Index: 3, Byte: e
Index: 4, Byte: l
Index: 5, Byte: l
Index: 6, Byte: Ã
Index: 7, Byte: ­
Index: 8, Byte: n
```

Note that the `í` character is represented by two bytes in UTF-8, which is why we see `Ã` and `­` in the output.

## String methods

Most string methods in Go are part of the `strings` package and don't sit directly on the string type itself.
Here are some common string methods:

```go title="string_methods.go"
import "strings"
// ...
str := "Hello, world!"
fmt.Println(strings.Contains(str, "world")) // Output: true
fmt.Println(strings.HasPrefix(str, "Hello")) // Output: true
fmt.Println(strings.HasSuffix(str, "!")) // Output: true
fmt.Println(strings.Index(str, "world")) // Output: 7
fmt.Println(strings.ToUpper(str)) // Output: HELLO, WORLD!
fmt.Println(strings.ToLower(str)) // Output: hello, world!
fmt.Println(strings.TrimSpace("   Hello, world!   ")) // Output: Hello, world!
fmt.Println(strings.Split(str, ", ")) // Output: [Hello world!]
```

### String Concatenation

Like in JavaScript/TypeScript you can concatenate strings using the `+` operator:

```go title="string_concat.go"
str1 := "Hello"
str2 := "world"
str3 := str1 + ", " + str2 + "!"
fmt.Println(str3) // Output: Hello, world!
```

### String Interpolation

While Go does have backticks you can't use them for string interpolation, you need to use `fmt.Sprintf`:

```go title="string_interpolation.go"
str := "world"
greeting := fmt.Sprintf("Hello, %s!", str)
fmt.Println(greeting) // Output: Hello, world!
```

### Multiline Strings

You can create multiline strings using backticks (however no string interpolation is possible):

```go title="string_multiline.go"
str := `Hello,
world!`
fmt.Println(str)
```

This will print:

```
Hello,
world!
```
