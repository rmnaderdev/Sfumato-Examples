# LIT TS Sfumato Example

This is an example of how to use the LIT TS with Sfumato.

## Installation

```bash
yarn
```

## Run the project in development mode

Terminal 1:
```bash
yarn dev
```

Terminal 2:
```bash
yarn dev:sfumato
```

## Notes/Issues
- I do have a `watch` script defined in the package.json for using `concurrently` to run both commands in one terminal. But it is not working as expected. So, I am using two terminals for now.
- Currently, there is no way to use `@apply` in the Lit Element styles. So you can still use utility classes in the component HTML, but you cannot use them in the styles defined in the component. You will need to define custom utility classes using `@apply` in the scss files global to the components. This is a limitation of the Lit Element library.