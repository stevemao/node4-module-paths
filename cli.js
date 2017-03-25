#!/usr/bin/env node
'use strict';
const node4ModulePaths = require('./')

node4ModulePaths()
  .then((paths) => {
    console.log(paths)
  })
  .catch((er) => {
    console.error(er)
  })
