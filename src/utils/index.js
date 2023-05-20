module.exports = {
  getEntry(dir, list = []) {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    files.forEach((item) => {
      const pathName = path.join(dir, item.name)
      if (item.isDirectory()) {
        getEntry(pathName, list)
      } else {
        list.push(pathName)
      }
    })
    return list
  }
}