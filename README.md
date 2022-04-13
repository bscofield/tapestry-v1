This repository is a minimal reproduction of my Tapestry v1 setup, built from existing core and community plugins in [Obsidian](https://obsidian.md/).

## What is Tapestry?
...

## Plugins used
- Daily notes
- Zettelkasten prefixer
- Dataview
- Templater

## Settings
- Hotkeys
	- Unset the hotkey for "Create new note"
	- Set "Zettelkasten prefixer: Create new note" to cmd-n
- Daily notes
	- Set "New file location" to "daily"
- Dataview
	- Turn on "Enable JavaScript queries"
- Templater
	- Set "Template folder location" to "_templates"
	- Turn on "Trigger Templater on new file creation"
	- Turn on "Enable Folder Templates"
	- Add Folder Template entries "daily", "people", and "topics," each to the appropriate file in "_templates"
- Zettelkasten Prefixer
	- Set "Zettel ID Format" to "YYYYMMDDHHmmss"

## Workflow
- Whenever adding a new note or thought, use `cmd-n` to create a new Zettel. Leave it with the default name (the Zettel ID format means that you can create a new note every second and avoid naming collisions), and then write your thought. To add it to a thread, you've got three choices:
	- Links -- any link in the note can be treated as the name of a thread
	- Tags -- any tag in the note can be treated as the name of a thread
	- Frontmatter -- you can explicitly associate the note with threads by adding a `threads` array in the frontmatter (see [[20220412214502]])
- Create new thread notes as needed -- daily notes each day, people and topic notes when you want to view them as threads.

### Example
...

## Jankiness
Sometimes, Dataview queries don't update when you change to a new file of the same type (so from one person note to another). I generally just ctrl-a to select everything, then click out to deselect to get the query to refresh.

