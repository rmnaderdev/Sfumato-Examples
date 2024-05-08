# Sfumato-Examples

Node examples for using the [Sfumato utility-based CSS framework](https://github.com/argentini/Argentini.Sfumato) generation tool.

All examples require the Sfumato utility-based CSS framework to be installed. To install Sfumato, run the following command:

```bash
# You will need to have .NET 8.0 runtime installed
dotnet tool install --global argentini.sfumato
```

For any of these projects, you need to run the following command to generate the CSS files during development:

```bash
yarn sf:watch
```

To generate the CSS files for production, run the following command:

```bash
yarn sf:build
```

The examples in this repo already run the `sf:build` command when you execute the `yarn build` command for building the project.

### Examples in this repository:

- [NextJs Example](./nextjs-sfumato)
- [React Example](./react-sfumato)
- [Vue Example](./vue-sfumato)
- LitElement Example (TODO)
- Angular Example (TODO)
- Svelte Example (TODO)
- Blazor Example (TODO)