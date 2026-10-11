# CodexKit for ChatGPT Work and Codex

CodexKit keeps its source skills in the repository's existing format. The Work export is generated from those source files so the Codex install flow is not changed. Build it after pulling the latest repository changes:

```bash
npm run work:build
npm run work:test
```

The build creates:

- `dist/work/skill-zips/`: one portable ZIP per skill, with a single top-level skill directory.
- `dist/work/plugin-zips/`: one ZIP per curated domain plugin.
- `dist/work/plugins/`: unpacked plugin packages for local testing.
- `.agents/plugins/marketplace.json`: a local marketplace manifest referencing the generated plugin directories.

## Choose an install route

**For one skill:** use the ChatGPT Skills interface and upload the corresponding ZIP from `dist/work/skill-zips/`. This keeps the installation small and focused. If your account does not show Skills, access may depend on plan, workspace settings, or rollout availability.

**For a domain bundle:** in ChatGPT desktop Work mode or Codex, add the repository as a plugin marketplace using the supported plugin flow, then install only the plugin you need. The generated marketplace references local paths, so it is intended for a checkout on your machine and is not itself a public hosted marketplace. Restart or refresh the client if the newly installed skills do not appear.

**For teams:** commit the selected unpacked plugin package to a repository or publish it through the product's supported marketplace process. Do not distribute `.env` files, tokens, or other credentials with a skills package.

The installation and update behavior differs by route: a copied skill folder is editable and must be refreshed from a newer CodexKit release manually; a marketplace plugin may be managed by the host client. Avoid installing the same skills through multiple routes in the same agent, because duplicate copies make it harder to tell which version was invoked.

## Keep routing predictable

A skill's frontmatter description is its trigger contract. Keep it concise and concrete: state the task it handles and the useful input or desired output. Avoid vague descriptions that overlap with many unrelated skills. The generated ZIP keeps each skill's original instructions and converts CodexKit's `version` and `category` fields into standard `metadata` entries for portable consumers.

CodexKit's source files already mark some skills as explicit-only in `agents/openai.yaml`. Preserve that choice for workflows where accidental invocation would be confusing or risky. For other skills, use descriptions that make the intended request easy to recognize.

Use two invocation patterns deliberately:

- **User-invoked:** the user asks for a named workflow or types the skill name. These skills can coordinate a multi-step flow or gather missing setup choices.
- **Model-invoked:** the assistant can select the skill when a request clearly matches its scope. These skills should be narrow, reusable procedures that work as one part of a larger task.

A user-invoked workflow can call reusable model-invoked procedures; keep the call direction one-way to avoid circular skill chains. Prefer a few focused skills that compose through clear handoffs over one skill that tries to own an entire project lifecycle.

## Evaluate routing and output

`tests/skill-routing-evals.json` is a lightweight, human-reviewed set of examples for each Work plugin group. It includes positive examples and near-miss prompts that should not route to that group. The checker verifies coverage and schema; it does not run an LLM or claim to measure model quality. When changing descriptions or group membership:

1. Update the relevant positive and negative prompts.
2. Run `npm run work:test`.
3. In the target client, manually check whether representative prompts select a useful skill and whether near-misses stay out of scope.
4. Record any observed false activations or missed activations in the PR so future edits can compare against them.

When a workflow has meaningful failure modes, add examples and verification materials to the skill itself. Keep instructions short enough to follow, and use focused reference files for longer domain material.
