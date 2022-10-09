# Simple React Context 1

This React factors three components: Outer, Middle, and Inner:

```
|-Outer---------------------|
|          `user`,`setUser` |
| |-Middle--------|-------| |
| |               |       | |
| | |-Inner-------|-----| | |
| | |             ↓     | | |
| | |-------------------| | |
| |                       | |
| |-----------------------| |
|                           |
|---------------------------|
```

Right now, `user` and `setUser` are defined in `Outer`, passed into `Middle`, which passes it into `Inner`. Refactor it to use the Context API so that `user` and `setUser` bypass the `Middle` component entirely.

```
|-Outer---------------------|
|         `user`,`setUser`-------
| |-Middle----------------| |   |
| |                       | |   |
| | |-Inner-------------| | |   |
| | |             ←--------------
| | |-------------------| | |
| |                       | |
| |-----------------------| |
|                           |
|---------------------------|
```
