import smartsheet from 'smartsheet';

const token = process.env.SMARTSHEET_API_TOKEN;

if (!token?.trim()) {
  console.error('Set SMARTSHEET_API_TOKEN in your environment.');
  process.exit(1);
}

const client = smartsheet.createClient({ accessToken: token });

try {
  let lastKey = '';
  do {
    const page = await client.workspaces.listWorkspaces({
      queryParameters: { 
        paginationType: "token",
        maxItems: 100,
        lastKey },
    });

    console.log(page); // Do what you want with the page items

    lastKey = page?.lastKey;
  } while (lastKey);
} catch (err) {
  console.error(err);
  process.exit(1);
}
