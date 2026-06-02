# e_learning project rules

## Scene extraction dispatch (jap0XX / toeicNNN / etc.)

**Before dispatching any scene extraction agent**, run `wc -l source_file/<file>.txt` first, then apply this rule **mechanically**:

| source lines | strategy |
|---|---|
| ≤ 1500 | single agent OK |
| 1501 – 4000 | **2 parallel agents**, split source roughly in half, each writes `_tmp_<file>_A.json` / `_B.json` |
| 4001 – 7000 | **3 parallel agents**, third file `_C.json` |
| > 7000 | **4+ parallel agents** |

**No exceptions.** Past success of a single agent on 6000+ line stories was luck-on-the-boundary (see `feedback_agent_file_mode_for_large` memory). Do not gamble.

### Per-agent per-Write limit
- ~400 scene cards max per agent (Write tool's `content` counts toward 64K output cap)
- Target each split agent at 200–350 cards

### tmp file format
Each split agent writes `{cards: [...]}` (no title), main agent merges them, adds top-level `title`, writes final `data/scenes_<file>.json`, deletes tmps.

### "Stuck at Write" signal — switch immediately
If an agent finishes Reads, says "now I'll write the JSON", then `status` stays `running` with no file on disk for > 5 min: that is **payload-over-cap**, not infra. TaskStop and switch to split. **Do not retry the same prompt.**

## Auto-publish flow (after extraction)
1. Independently parse the JSON (`node -e ...`) — verify count, dups, lead-dash, unbalanced 「」, no title-in-all
2. Dedup by `ja` (keep first)
3. Bump `sw.js` `CACHE` constant + add to `ASSETS` if new file
4. `node scripts/recount_stats.js`
5. `git add app.js sw.js data/<file>.json data/statistics.md`
6. `git commit -m "..."`
7. `git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push`
8. Final report: `| story | title | entries | commit |` table

## Files NOT to commit
- `source_file/*` (gitignored — local index only, includes README.txt)
- `data/_tmp_*.json` (intermediate, delete after merge)
