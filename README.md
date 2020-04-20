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

## DISCLAIMER

In order for this branch to work, ensure that `@types/webgl12` never exists in
`package-lock.json`. Otherwise, the following error will occur.

The following error occurs:

```txt
> facial-recognition@1.0.0 build /home/zach/work/go/src/github.com/zachdelano/facial-recognition
> tsc

node_modules/@types/webgl2/index.d.ts:582:13 - error TS2403: Subsequent variable declarations must have the same type.  Variable 'WebGL2RenderingContext' must be of type '{ new (): WebGL2RenderingContext; prototype: WebGL2RenderingContext; readonly ACTIVE_ATTRIBUTES: number; readonly ACTIVE_TEXTURE: number; ... 556 more ...; readonly WAIT_FAILED: number; }', but here has type '{ new (): WebGL2RenderingContext; prototype: WebGL2RenderingContext; readonly ACTIVE_ATTRIBUTES: number; readonly ACTIVE_TEXTURE: number; ... 557 more ...; readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number; }'.

582 declare var WebGL2RenderingContext: {
                ~~~~~~~~~~~~~~~~~~~~~~

  node_modules/typescript/lib/lib.dom.d.ts:16535:13
    16535 declare var WebGL2RenderingContext: {
                      ~~~~~~~~~~~~~~~~~~~~~~
    'WebGL2RenderingContext' was also declared here.


Found 1 error.

npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! facial-recognition@1.0.0 build: `tsc`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the facial-recognition@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/zach/.npm/_logs/2020-04-07T02_31_08_323Z-debug.log
```