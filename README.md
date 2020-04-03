## Dependencies

You might need the following things set:

* [`LD_LIBRARY_PATH`](https://unix.stackexchange.com/questions/168340/where-is-ld-library-path-how-do-i-set-the-ld-library-path-env-variable)

You might need root permissions to run this electron app.

```bash
$ sudo chown root node_modules/electron/dist/chrome-sandbox 
$ sudo chmod 4755 node_modules/electron/dist/chrome-sandbox 
```