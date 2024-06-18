module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // return await 사용 가능 - 디버깅시 콜스택 사라져서 힘듬
    "@typescript-eslint/return-await": "off",
    "no-return-await": "off",
    'class-methods-use-this': 'off',
    // default export 안해도 okay
    'import/prefer-default-export': 'off',
    // if 문 한줄에서도 {} 사용하도록 설정
    curly: ['error', 'all'],
  },
  "overrides": [
    {
      "files": [
        "exceptions.ts",
        "*.dtos.ts",
        "**/exceptions/*.ts"
      ],
      "rules": {
        "max-classes-per-file": "off"
      }
    }
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  }
};
