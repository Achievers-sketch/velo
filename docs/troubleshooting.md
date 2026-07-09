# Troubleshooting

## Common Issues

### Node dependencies are missing

Run:

```bash
npm install
```

### The API does not start

Check the local environment variables and confirm that the configured port is available.

### The contract build fails

Ensure the Rust toolchain and wasm target are installed and that the workspace dependencies are available.

### Changes do not appear in the frontend

Restart the Vite development server and confirm that the correct workspace is being served.

## Getting Help

Open a GitHub issue or consult the support documentation if the issue is not covered here.
