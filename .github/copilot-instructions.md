# Copilot instructions

## Architecture

This repository is a standalone browser exercise, not an application with a build pipeline. `index.html` provides the page and the targets for demonstrations of control flow, arrays, DOM access, browser storage, functions, and object construction. It loads `scripts/acoes.js` at the end of the body, so the classic script can access the parsed page directly.

The HTML buttons call `acao1()` through `acao14()` with inline event handlers. Those functions therefore need to remain globally accessible and their names must match the HTML. The handlers write to the shared `#saida` section and may update other elements by their IDs, such as `#session`, `#nome`, and `#modelo`. Keep changes coordinated between the markup and script.

## Conventions

- Preserve the existing plain HTML and classic JavaScript structure; there is no framework, module setup, or package manifest.
- Keep the numbered button-to-handler mapping in `index.html` and `scripts/acoes.js` aligned.
- Use the existing DOM IDs as the contract between the page and its demonstrations; `#saida` is the shared action log.
- Follow the page's Portuguese labels and identifiers where extending the corresponding examples. Existing content also includes English text.

## Build, run, and checks

There is no configured build, lint, or automated-test runner.

- Serve the repository root with `python3 -m http.server 8000` and open `http://localhost:8000`.
- For a focused behavior check, click the relevant button (`acaoN`) in the browser and verify the corresponding output or DOM target.
- Run `node --check scripts/acoes.js` to check JavaScript parsing. This does not exercise browser APIs or page behavior.
- There is no automated single-test command; use the relevant button as the manual per-example check.

The current `scripts/acoes.js` is incomplete and ends in a partial function declaration, so the syntax check currently fails on the existing file. Account for this baseline when evaluating syntax-check results; do not infer missing handlers' behavior from their button labels.
