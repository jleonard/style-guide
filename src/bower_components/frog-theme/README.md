#frog theme

[Check the documentation here](http://example.net/)

## Contribution guidelines

#### Updating the 'gh-pages'

The repo has a 'gh-pages' branch that serves as the source for the documentation page.

When you're finished making updates to the master branch...

```
git checkout gh-pages && git merge master
```

The documentation .less file is located in the ``docs`` folder.

The ``build`` directory will compile the ``dist`` and ``downloads`` folders with the compiled source and .zip files.