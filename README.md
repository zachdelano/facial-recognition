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