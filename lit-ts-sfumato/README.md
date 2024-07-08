# LIT TS Sfumato Example

This is an example of how to use Lit TS Web Components with Sfumato.

## Installation

```bash
yarn
```

## Run the project in development mode

```bash
yarn watch
```

## Build the project
```bash
yarn build
```

## Host the build project for preview
```bash
yarn preview
```

## Notes/Issues
- ~~I do have a `watch` script defined in the package.json for using `concurrently` to run both commands in one terminal. But it is not working as expected. So, I am using two terminals for now.~~ This has been fixed in Sfumato v5.0.74.
- Currently, there is no way to use `@apply` in the Lit Element styles (the same issue occurs when using tailwind with Lit). So you can still use utility classes in the component HTML, but you cannot use them in the styles defined in the component. You will need to define custom utility classes using `@apply` in the scss files global to the components. This is a limitation of the Lit Element library when using the shadow DOM.