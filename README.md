#babel-preset-mahalo
This module contains a preset for the Babel transpiler. It is used to transform
your written code into something that the Mahalo framework can work with.

## Installation
You should install this package as a development dependency along with some core
babel modules like so:

```sh
npm install --save-dev babel-core babel-loader babel-runtime babel-preset-mahalo
```

##Usage
Configure webpack to use the preset for the desired files. Typically you will
use the .ts extension for your files. This will give you the best IDE support.
But everything else works fine as well.

In your webpack config object you should have something similar to this:

```javascript
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'babel',
                query: {
                    presets: ['mahalo']
                }
            }
        ]
    }
```