# Development
```sh
$ yarn install
$ yarn install-husky
```

# Installation

> ~~yarn add eslint @promenade-ai/eslint-config --dev~~

or

> ~~npm install eslint @promenade-ai/eslint-config --save-dev~~

현재는 npm 에 업로드 되어있지 않기 때문에 npm 설치 방식으로는 사용하지 않음

> yarn add https://github.com/promenade-ai-corp/eslint-config.git --dev


## Recommends

### Frontend
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/react/typescript",
    "@promenade-ai/eslint-config/prettier"
  ]
  ...
```

### Backend
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/typescript",
    "@promenade-ai/eslint-config/prettier"
  ]
  ...
```

## ESLint extends

### JavaScript
```js
  ...
  extends: [
    "@promenade-ai/eslint-config"
  ],
  ...
```

### TypeScript
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/typescript"
  ],
  ...
```

### React
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/react"
  ],
  ...
```

### React with TypeScript
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/react/typescript"
  ],
  ...
```

### Prettier
```js
  ...
  extends: [
    "@promenade-ai/eslint-config",
    "@promenade-ai/eslint-config/prettier"
  ]
  ...
```

## Prettier extends
```js
// .prettierrc
"@promenade-ai/eslint-config/prettier-config"
```

## TSConfig extends
### TypeScript
```js
// tsconfig.json
{
  "extends": "@promenade-ai/eslint-config/tsconfig.json",
  "compilerOptions": {    
    ...
  },
}
```

### React with TypeScript
```js
// tsconfig.json
{
  "extends": "@promenade-ai/eslint-config/react/tsconfig.json",
  "compilerOptions": {    
    ...
  },
}
```
