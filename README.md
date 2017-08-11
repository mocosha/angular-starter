<p align="center">
    <img style="border-radius: 10px; border: 1px solid black"
    src="https://avatars2.githubusercontent.com/u/18236411" width=72 height=72>
  <h2 align="center">Angular4 Mocosha Template</h2>
</p>

## Template

> Built upon [Angular4 Webpack Starter kit](README-WEBPACK.md)

## Installing

To install this template for starting new project, go to root of your project repository and add this:

```bash
git remote add angular-template https://github.com/mocosha/angular-starter.git
```

If a project repository contains multiple projects, and you want to create new project that is based on this template, go to root of all projects (where .git is initialized) and add:

```bash
git subtree add --prefix=path/to/your/new/project --squash angular-template mocosha-template

git pull angular-template mocosha-template
```

Or if a project is in new repository just run:

```bash
git pull --sqash angular-template mocosha-template
```