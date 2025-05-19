---
title: Why learn Go?
description: Why you should learn Go.
---

In short, it gives you more options in your toolbox.

While JavaScript is very flexible and with Node.js you can use it in many areas, there are areas where Go excels, due to simply being a more modern language.

## A more modern language

When you look at the most popular programming languages, including JavaScript, you will find that many of them were invented in the last century, long before the advent of the modern CPU that we all use today. If you look at the graph below, you will see that the most popular programming languages were invented before CPU's became multi core, that is, having two or more physical processing units.

todo timeline chart languages/multicore

As you can see, multi core architecture appeared around 2005, however, most of the popular programming languages were invented before that. While they all have support for concurrency (executing multiple tasks at the same time), they were not designed with that in mind.

Go, on the other hand was designed with this concurrency and shift in CPU architecture in mind.

## Built for concurrency

It's therefore no surprise that Go is used as the foundation for many infrastructure projects, like Docker, Kubernetes, and Terraform. Where you need to call out to multiple services or wait for multiple tasks to finish. While you _could_ create these services in other languages, Go's concurrency model makes it really easy to reason about the resulting code.

## Fast

Go is a compiled language, which means that it is compiled to machine code before it is run. This makes it much faster than interpreted languages like JavaScript, which are executed by an interpreter at runtime. While those interpreters have become faster over the years, they are still slower than compiled languages. As such there is an ongoing shift in rewriting JavaScript tooling in Go, like [esbuild](https://esbuild.github.io/) and [Vite](https://vitejs.dev/).
Even the TypeScript team announced that they are rewriting the TypeScript compiler in Go, as they've reached the limits of what they can do with JavaScript.

## Transferable skills

If you already have JavaScript/TypeScript experience you'll find it easy to pick up Go. The syntax is similar to C, which is the basis for many languages, including JavaScript. For the parts that are unique to Go, like goroutines (concurrency), you'll find that they are easy to understand and use as well. Compared to other modern languages like Rust, Go is much easier to pick up and use.

## Batteries included

Go is a system programming language, like C and C++. However, unlike C and C++, Go comes with a lot of batteries included. It comes with testing framework, a package manager and even a linter. In addition it has a very powerful standard library. Go makes it very easy to work cross platform, like Node.js, despite being a compiled language. If you've ever tried to setup a C/C++ project, you'll know the pain.

## WebAssembly

Go has first class support for WebAssembly, which means you can run Go code in the browser. Maybe you'll find in your next frontend project that you need to do some heavy lifting that is better done in Go. As said in the beginning it gives you more options in your toolbox.
