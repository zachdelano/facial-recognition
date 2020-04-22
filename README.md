## Dependencies

| Dependency | Version |
|:----|----:|
| node | 12.0.0 |
| npm | 6.9.0 |

Run on Ubuntu 19.10.

You might need to set permissions to run this electron app like the following.

```bash
$ sudo chown root node_modules/electron/dist/chrome-sandbox
$ sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
```

## DISCLAIMERS

Transpiling TypeScript with `@types/webgl12` as a requirement for tensorflow
was problematic until the compiler option of `"skipLibCheck": true` was added
to `tsconfig.json`. This is mentioned here in case it causes any problems in
the future.
