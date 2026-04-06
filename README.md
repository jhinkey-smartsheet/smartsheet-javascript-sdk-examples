# smartsheet-javascript-sdk-examples

Small Node.js examples for the [Smartsheet JavaScript SDK](https://github.com/smartsheet/smartsheet-javascript-sdk).

## Prerequisites

- Node.js 20+
- A Smartsheet API token
- A workspace ID to query

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set your API token in the environment as `SMARTSHEET_API_TOKEN`.

PowerShell:

```powershell
$env:SMARTSHEET_API_TOKEN = "your-smartsheet-token"
```

macOS/Linux (bash/zsh):

```bash
export SMARTSHEET_API_TOKEN="your-smartsheet-token"
```

## Run get-workspace-children

You can run the script directly:

```bash
node examples/get-workspace-children.js <workspaceId>
```

Or with the npm script:

```bash
npm run example:workspace-children -- <workspaceId>
```

Example:

```bash
npm run example:workspace-children -- 1234567890123456
```

## What the script returns

The script calls:

- `workspaces.getWorkspaceMetadata`
- `workspaces.getWorkspaceChildren` (with `lastKey` pagination until no more `lastKey` is returned)

It prints formatted JSON containing:

- `workspace` (workspace metadata)
- `sheet` (array)
- `report` (array)
- `sight` (array)
- `folder` (array)
- `template` (array)
