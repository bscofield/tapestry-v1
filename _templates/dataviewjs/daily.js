return (async () => {
  const currentDay = dv.current().file.name
  const allNotes = dv.pages('"notes"')

  // limit to only files created on the day in question
  const matches = allNotes.filter(n => {
    return n.file.ctime.toISODate() === currentDay
  })

  const pages = matches.filter((m, idx, arr) => {
    return arr.map(a => a.file.ctime).indexOf(m.file.ctime) === idx
  })

  // sort notes by creation time (ascending)
  const sortFn = (a, b) => {
    return (a.file.ctime.ts - b.file.ctime.ts)
  }

  pages.values.sort(sortFn)

  const timeOptions = {
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit"
  };

  // show each note with its creation time as a header that links to the source
  for (const page of pages) {
    const link = `[[${page.file.path}|${new Date(page.file.ctime).toLocaleTimeString("en-US", timeOptions)}]]`
    dv.header(5, link)

    const content = await dv.io.load(page.file.path)
    dv.paragraph(content)
  }
})();
