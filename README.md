# Tapestry
The idea behind Tapestry is that threads (sequences) of notes and their intersections are important and useful. This is closely related to to recent move towards highly-interlinked notes, but it's a little different -- if you look at the graph visualization of an Obsidian vault, it's often impossible to trace a distinct *path* through all the noise.

What I'm trying to build towards is a system in which notes are part of distinct, identifiable threads, and it's clear when a given note serves as the point at which multiple threads intersect. Imagine you're reading about the history of a country, and you run across a name that sounds interesting. Tapestry should make it easy to shift over and follow that person's journey before or after they appeared in the country's timeline. Or instead of a person, maybe it's a scientific discovery, and you want to change over and follow its development over time, or dig into the fundamentals that make it work, etc.

## Is this repository Tapestry?
Not exactly. This repository is sort of a proof of concept; it's a minimal reproduction of something I'm trying in my primary [Obsidian](https://obsidian.md/) vaults. I've jerry-rigged a prototype of my long-term vision by assembling existing core and community plugins.

## Plugins used
- Daily notes (core)
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) (community)
- [Templater](https://github.com/SilentVoid13/Templater) (community)
- Zettelkasten prefixer (core)

## Custom settings
- Hotkeys
	- Unset the hotkey for "Create new note"
	- Set "Zettelkasten prefixer: Create new note" to cmd-n (replacing the default for "Create new note")
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
	- Frontmatter -- you can explicitly associate the note with threads by adding a `threads` array in the frontmatter (see [[notes/20220412214502]])
- Create new thread notes as needed -- daily notes for each day, people and topic notes when you want to view them as threads.

## Jankiness
Sometimes, Dataview queries don't update when you change to a new file of the same type (so from one person note to another). I generally just ctrl-a to select everything, then click out to deselect to get the query to refresh.

Also: I don't love that the frontmatter (with `threads`, etc.) shows up in edit mode even on the thread pages.

## What is Tapestry v2?
I spent a bit of time writing a custom plugin for Obsidian to get closer to what I want Tapestry to be, but there are a few significant hurdles. I might take another shot at that soon, but it's more likely that I'll end up building something custom to explore those parts of the idea.
