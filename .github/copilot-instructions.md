# Copilot instructions

## Project shape

This is a small, standalone browser exercise page. `index.html` presents examples for JavaScript control flow, arrays, DOM access, browser storage, functions, and object construction. It loads `scripts/acoes.js` at the end of the document, so the script can access the page elements after they have been parsed.

The page's buttons use inline handlers named `acao1()` through `acao14()`. Their implementations belong in the global scope of `scripts/acoes.js`; keep handler names aligned with the HTML. The output area is `#saida`, while the named IDs in the page are targets for individual demonstrations. The page and examples use Portuguese labels and identifiers alongside some English text.

## Build, run, and checks

There is no package manifest or configured build, lint, or automated-test runner.

- Run the page locally from the repository root with `python3 -m http.server 8000`, then open `http://localhost:8000`.
- For a focused behavior check, open the page and click the button for the corresponding `acaoN()` handler.
- Check JavaScript syntax with `node --check scripts/acoes.js`. This checks parsing only; it does not run browser APIs or exercise the page.
- There is no automated single-test command because no test suite is configured.

The current `scripts/acoes.js` is incomplete and does not pass the syntax check. Account for that existing state when evaluating syntax-check results.
