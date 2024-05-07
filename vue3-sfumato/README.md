# Vue 3 + Vite + Sfumato

This template should help get you started developing with Vue 3 in Vite using [Sfumato](https://github.com/argentini/Argentini.Sfumato).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Run the sfumato watcher for Development
```sh
yarn sfumato
```


### Type-Check, Compile Sfumato, Compile Vue and Minify for Production
```sh
yarn build
```
