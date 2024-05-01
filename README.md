<h1 align="center">
  Hexatool's ESLint configuration
</h1>

<p align="center">
  Opinionated ESLint ruleset designed for large teams and projects considering modern JavaScript best practices and
  providing consistency to your code.
</p>

## Installation

```bash
npm install --save-dev eslint @hexatool/eslint-config
```

**Using bun**

```bash
bun add eslint @hexatool/eslint-config --dev
```

> [!IMPORTANT]
> Since v4.0.0, this config is rewritten to the
> new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## What it does

- Respects `.gitignore` by default

## How to use

1. Create `eslint.config.js` in your project root:

    ```js
    // eslint.config.js
    import hexatool from '@hexatool/eslint-config';

    export default hexatool();
    ```

2. Run eslint

    ```shell
     eslint .
    ```

    **Or adding to your package.json**

    ```json
    {
      "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint --fix ."
      }
    }
    ```

## Configuration

- [Core configuration](#core-configuration)
- [Ignoring files](#ignoring-files)

### Core configuration

Core configuration can not be disabled, but you can extend it with your own rules.

```js
// eslint.config.js
import hexatool from '@hexatool/eslint-config';

export default hexatool({
  core: {
    overrides: {
      'no-console': 'off',
    },
  },
});
```

### Ignoring files

By default, the configuration will respect `.gitignore` file and exclude some files and directories from linting 
([See more](./src/config/ignore/ignore.globs.ts)). You can disable this behavior by setting:

```js
// eslint.config.js
import hexatool from '@hexatool/eslint-config';

export default hexatool({
  ignore: false,
});
```

Or pass custom configuration to `eslint-config-flat-gitignore`
([See full configuration](https://github.com/antfu/eslint-config-flat-gitignore/blob/main/src/index.ts#L7)).

```js
// eslint.config.js
import hexatool from '@hexatool/eslint-config';

export default hexatool({
  ignore: {
   files: ['./nested/.gitignore'],
   strict: true,
  },
});
```

## View what rules are enabled

There is a [visual tool](https://github.com/eslint/config-inspector) to help you view what rules are enabled in your 
project and apply them to what files.

Go to your project root that contains `eslint.config.js` and run:

```bash
bunx @eslint/config-inspector
```

## Inspiration and Credits

Here are some inspiration for this package.

-   [@antfu/eslint-config](https://github.com/antfu/eslint-config)
-   [eslint-config-codely](https://github.com/CodelyTV/eslint-config-codely)

## Hexatool Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

-   Respect **Semantic Versioning**: No breaking changes in patch or minor versions
-   No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
-   **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
-   **Tests** as documentation and usage examples
-   **Well documented ReadMe** showing how to install and use
-   **License favoring Open Source** and collaboration
