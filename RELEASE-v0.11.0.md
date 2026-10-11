# CodexKit v0.11.0 — ChatGPT Work exports

> Portable Work plugin packages and skill ZIPs, with routing and packaging checks, built from the existing CodexKit skill library.

## Summary

v0.11.0 makes CodexKit skills easier to use across Codex and ChatGPT Work. It adds an export pipeline for individual skill ZIPs, curated domain plugins, and a local marketplace manifest while preserving the existing Codex source layout.

## Added

- Portable ZIP exports for all 90 skills.
- 14 curated plugin packages and a local marketplace manifest.
- Routing fixtures for each plugin group, including near-miss cases.
- Documentation for Work installation, invocation, activation checks, and update differences.

## Improved

- Exported `SKILL.md` files normalize CodexKit version and category metadata into Agent Skills fields.
- CI validates plugin manifests, metadata, ZIP contents, and routing fixture coverage on Ubuntu and Windows.
- Release starter packs include the Work export, documentation, and tests.

## Validation

The release workflow runs:

```bash
npm run check
```

This validates the source pack, builds and tests the Work exports, lints the documentation app, and builds the production docs site.

## Upgrade notes

No migration is required. Existing Codex users can update as usual. ChatGPT Work users can use the guide at [docs/chatgpt-work.md](./docs/chatgpt-work.md) to upload a skill or configure the local marketplace. Product access and installation options depend on the account, workspace settings, and client surface.

## Release assets

- `codexkit-source-v0.11.0.zip`
- `codexkit-starter-pack-v0.11.0.zip`
