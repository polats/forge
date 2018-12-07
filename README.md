@polats/forge
=============

Command-line Crypto

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@polats/forge.svg)](https://npmjs.org/package/@polats/forge)
[![CircleCI](https://circleci.com/gh/polats/forge/tree/master.svg?style=shield)](https://circleci.com/gh/polats/forge/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/polats/forge?branch=master&svg=true)](https://ci.appveyor.com/project/polats/forge/branch/master)
[![Codecov](https://codecov.io/gh/polats/forge/branch/master/graph/badge.svg)](https://codecov.io/gh/polats/forge)
[![Downloads/week](https://img.shields.io/npm/dw/@polats/forge.svg)](https://npmjs.org/package/@polats/forge)
[![License](https://img.shields.io/npm/l/@polats/forge.svg)](https://github.com/polats/forge/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @polats/forge
$ forge COMMAND
running command...
$ forge (-v|--version|version)
@polats/forge/0.3.1 win32-x64 node-v8.12.0
$ forge --help [COMMAND]
USAGE
  $ forge COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`forge hello [FILE]`](#forge-hello-file)
* [`forge help [COMMAND]`](#forge-help-command)

## `forge hello [FILE]`

describe the command here

```
USAGE
  $ forge hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ forge hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/polats/forge/blob/v0.3.1/src\commands\hello.ts)_

## `forge help [COMMAND]`

display help for forge

```
USAGE
  $ forge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_
<!-- commandsstop -->
