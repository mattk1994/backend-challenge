const userService = require('app/modules/user')
const notesService = require('app/modules/notes')

/**
 * @method read
 */
exports.read = async (req, res) => {
  const user = await userService.findById(req.params.id)
  res.status(200).send(user)
}

/**
 * @method readnotes
 */
exports.readNotes = async (req, res) => {
  const notes = await notesService.find()
  res.status(200).send(notes)
}

/**
 * @method createnotes
 */
exports.postNotes = async (req, res) => {
  await notesService.create(req.body)
  res.redirect('user/:id/notes')
}

/**
 * @method update
 */
exports.update = async (req, res) => {
  const user = await userService.readAndUpdate(req.params.id, req.body)
  res.status(200).send(user)
}
