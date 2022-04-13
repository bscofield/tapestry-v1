return (async () => {
  const currentPage = dv.current().file.name

  // collect all notes that explicitly belong to this thread
  let matches = dv.pages('"notes"').where(page => {
    return page.threads && page.threads.values.includes(currentPage)
  })

  // collect all notes that link to this thread
  const linked = `[[${currentPage}]]`
  matches = matches.concat(dv.pages(linked))

  // collect all notes that are tagged for this thread
  if (input.tagged) {
    const tagged = `#${currentPage}`
    matches = matches.concat(dv.pages(tagged))
  }

  // limit matches to the notes folder (in case we picked them up by link or tag)
  const pages = matches.filter((m, idx, arr) => {
    return m.file.path.match(/notes/) &&
      arr.map(a => a.file.ctime).indexOf(m.file.ctime) === idx
  })

  // sort notes by creation time (descending)
  const sortFn = (a, b) => {
    return -1 * (a.file.ctime.ts - b.file.ctime.ts)
  }

  pages.values.sort(sortFn)

  const timeOptions = {
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit"
  };

  // show each note with its timestamp as a header that links to the source
  for (const page of pages) {
    const createDate = new Date(page.file.ctime)
    const createTime = createDate.toLocaleTimeString("en-US", timeOptions)

    const link = `[[${page.file.path}|${
      createDate.toISOString().split('T')[0] + " " + createTime
    }]]`
    dv.header(4, link)
    dv.paragraph(await dv.io.load(page.file.path))
    dv.span("<hr>")
  }
})();
