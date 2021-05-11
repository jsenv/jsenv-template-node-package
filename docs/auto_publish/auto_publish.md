# Auto publish on npm

The main GitHub workflow is publishing new version of the package to npm **automatically** under certain circumstances. This behaviour could be translated into the following sentence:

> When `"version"` in `package.json` on the main branch is not published and if tests are passing, then publish this new version.

This is implemented with `needs` + `if` on `release` in [.github/workflows/main.yml](../../.github/workflows/main.yml#L53) and `publish package` in [.github/workflows/main.yml](../../.github/workflows/main.yml#64).

# How to use auto publish

The code responsible to publish the package on npm is [.github/workflows/main/publish-package.js](../../.github/workflows/main/publish-package.js). As explained, if the package registry already got this package version this code will not publish anything.

To enable this feature you need to:

1. Create an access token for npm as documented in [Creating and viewing access tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens)

2. Add the npm token to the GitHub repository secrets as documented in [Creating encrypted secrets for a repository](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository). The secret name must be `NPM_TOKEN` or you need to update `secrets.NPM_TOKEN` in [.github/workflows/main.yml](../../.github/workflows/main.yml#L67)

## Why auto publish ?

In a continuous delivery workflow the code is pushed to production as soon as it reaches the prod branch. As a package author, I was sick of running `npm publish` several times per day.

Putting side by side "I am tired of running this everyday" and continuous delivery I realized that publishing a package to a registry is like pushing code to production. And it could and should be automated.

As a bonus, it makes it possible to publish package on multiple registries at once (npm + github for example). You just have to add the registry url and token in [.github/workflows/main/publish-package.js](../../.github/workflows/main/publish-package.js)

```diff
  "https://registry.npmjs.org": {
    token: process.env.NPM_TOKEN,
  },
+  "https://npm.pkg.github.com": {
+    token: process.env.GITHUB_TOKEN,
+  }
```

# How to remove auto publish

1. Remove `publish package` in [.github/workflows/main.yml](../../.github/workflows/main.yml#64).
2. Delete [.github/workflows/main/publish-package.js](../../.github/workflows/main/publish-package.js)
3. Remove `"@jsenv/package-publish"` from `"devDependencies"` in [package.json](../../package.json#L69)
