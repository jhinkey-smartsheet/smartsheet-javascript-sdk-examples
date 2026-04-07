/**
 * Calls workspaces.getWorkspace for a workspace ID.
 *
 * Requires SMARTSHEET_API_TOKEN in the environment.
 *
 * Usage:
 *   node examples/get-workspace.js <workspaceId>
 *   npm run example:workspace -- <workspaceId>
 */
import smartsheet from 'smartsheet';

const token = process.env.SMARTSHEET_API_TOKEN;
const workspaceIdRaw = process.argv[2];

if (!token?.trim()) {
  console.error('Set SMARTSHEET_API_TOKEN in your environment.');
  process.exit(1);
}

const workspaceId = Number(workspaceIdRaw);
if (workspaceIdRaw === undefined || workspaceIdRaw === '' || !Number.isFinite(workspaceId)) {
  console.error('Usage: node examples/legacy-get-workspace.js <workspaceId>');
  process.exit(1);
}

const client = smartsheet.createClient({ accessToken: token });

try {
  const workspace = await client.workspaces.getWorkspace({ workspaceId });
  const sheets = workspace.sheets;
  const reports = workspace.reports;
  const sights = workspace.sights;
  const folders = workspace.folders;
  const templates = workspace.templates;

  const data = { workspace, sheets, reports, sights, folders, templates };
  console.log(JSON.stringify(data, null, 2));
} catch (err) {
  console.error(err);
  process.exit(1);
}
