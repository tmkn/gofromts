---
title: Modules
description: What are modules in Go and how to use them.
---

As we highlighted in the beginning, a `module` is a collection of Go packages, that is, when you create a new Go project, you are actually creating a new module. The `module` is what manages the dependencies and versions of the packages that you use in your project. It's defined by a `go.mod` file in the root of your project directory. Think of it as the `package.json` of your Go project.

Like npm provides the `npm init` command to initialize a new project, Go provides the `go mod init <module-name>` command to create a new module. It creates the `go.mod` file and also sets the module name that you want to use for your project.

You'll use that module name to import local packages.

## Creating a Module

To create a new Go project, create a new folder and inside it run:

```bash
go mod init github.com/username/projectname
```

This sets the project name to `github.com/username/projectname`, which is a common convention in Go (The reason for this is that Go packages are often hosted on GitHub, and this format allows for easy identification of the package's source).

However you can provide any name you want, e.g. `myawesomeproject` but it's recommended to use a path that points to the repository where the module will be hosted.

It also sets the required Go version.

## Installing Dependencies

Go makes this super easy.

Just import the package in your code and Go will automatically download the package and add it to your `go.mod` file.

### Installing all dependencies

To install all dependencies for your project, like when you've just cloned a project, you can run:

```bash
go mod tidy
```

This command will download all the dependencies specified in your `go.mod` file.

As the name "tidy" suggests, it will also clean up your `go.mod` file by adding missing dependencies or removing unused ones. You can run this command anytime you want to ensure that your `go.mod` file is up to date.

## Updating Dependencies

To update a dependency, you can use the `go get` command:

```bash
go get github.com/some/package@latest
```

This will update the package to the latest version and update the `go.mod` file accordingly.

or if you want a specific version:

```bash
go get github.com/some/package@v1.2.3
```

## Removing Dependencies

To remove a dependency, you can simply delete the import statement(s) from your code and then run:

```bash
go mod tidy
```

Simple as that.
