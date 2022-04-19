I laid out a little of my vision for Tapestry in [my sample v1 Obsidian vault](https://github.com/bscofield/tapestry-v1), but I think (hope) that it's worth diving a bit deeper.

## Origin
Some time ago, I was reading a book about the history of jazz in China, and something about it put me off. On reflection, I realized that my problem was with the organization. Each section took a particular topic (the influence of African-American immigrants, a specific venue's history, etc.) and explored that topic through the whole time period that the book covered -- which meant that I'd finish a part reading about events in the 1950s, say, and start the next one back in the 1910s. I found it impossible to assemble an overall timeline in my head.

Eventually, I realized the analogy that best explained the problem: the narrative threads never came together into a coherent picture.

At the same time, I was working on how to represent complex software systems and experimenting with prioritizing sequences -- what services are involved, and in what sequence, when someone performs a given task? And I was exploring highly-networked knowledge stores like Roam and Obsidian, where the graph view was inspiring if not always useful.

And so I came to the idea of Tapestry. What would a knowledge store that privileged threads look like? What if I could read a history, say, and at any given point -- a person, a date, a place -- see or switch over to the other threads that also touch on that point? With such a tool, I could learn about jazz in China and easily switch between an overall timeline and each of the sidetopics, with (I'd think) much less confusion.

Additionally, some of my favorite reading involves finding the far-flung connections between seemingly unrelated topics, like how [advances in fashion influenced the Apollo program](https://glamourdaze.com/2019/07/playtex-from-bras-to-space-suits-on-apollo-11.html). Could there be tools that made finding those connections a little easier?

## Vision
So, what would a full version of Tapestry look like? 

### Graph view
We'd still have the graph view, but it would be a little different than current implementations which give every note equal weight and make every connection equally distinct.

In Tapestry, we'd have the concept of "current thread." If you're reading about the history of rocketry, quantum physics, or Aussie rules football, all the notes and connections in that thread would be highlighted. 

We'd also have the concept of "current note," the note that you're looking at. Given that threads intersect on notes, we could then also highlight -- though less distinctively -- all the other threads in the graph that intersect on that note.

Beyond those levels, other threads, notes, and connections in the graph should be barely visible.

### Navigation
When you're reading a thread, the entire thread would be visible in a single window in the editor -- you just scroll up and down to go back and forward through the notes. The "current note" is determined by where you are in the stream, and changes automatically as you scroll.

You can easily identify, preview, and jump to threads that intersect on the current note; maybe the adjacent notes on those threads are semi-visible to the side of the current note?

### Editing
Editing always applies to the current note, even when you can see others in the current thread in the window.

You can associate a note with a thread manually (by adding tags, links, or frontmatter) while editing, and you can control the order of notes in the thread -- by default, it's chronological (by the time the note was created), but you can reorder manually or read the order off of metadata in the note.

Creating a new note would default to adding it to the current thread -- its exact position would depend on the ordering mechanism for the thread.

### Possibilities
My thinking on this has evolved over time, and there are some ideas that I'm still playing with.

- It might be useful to be able to add metadata to the relationships between notes in a thread. Maybe that means marking the entire thread as chronological or causal (which designation would then be inherited by all the connections within the thread), for instance, or maybe it's something more granular.
- A given note might be part of many threads -- but when reading a given thread, we might want a more specific representation of the note. To achieve that, we could allow notes to be "enriched" in the context of a thread. Editing a note in the context of a thread might then be primarily editing the enrichment, while leaving the base note unchanged.
