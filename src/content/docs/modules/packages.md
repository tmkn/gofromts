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
