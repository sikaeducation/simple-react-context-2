# Simple React Context 1

This React factors three components: Outer, Middle, and Inner:

```
|-Outer---------------------|
|          `user`,`logout`  |
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

Right now, `user` and `logout` are defined in `Outer`, passed into `Middle`, which passes it into `Inner`. Refactor it to use the Context API so that `user` and `logout` bypass the `Middle` component entirely.

```
|-Outer---------------------|
|         `user`,`logout`--------
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
