const {
  Bookmark,
  Song,
  // eslint-disable-next-line no-unused-vars
  User
} = require('../models')

const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const { songId } = req.query
      // console.log(req.query)
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark))
      // console.log(where)
      // console.log(bookmarks)
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    const userId = req.user.id
    const { songId } = req.body
    // console.log(`songId: ` + songId)
    // console.log(`userId: ` + userId)
    try {
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'your already bookmarked this song'
        })
      }
      // console.log(`songId: ` + songId)
      // console.log(`userId: ` + userId)
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId = req.user.id
      const { bookmarkId } = req.params
      // console.log(`thisbookmark: ` + bookmarkId)
      const bookmark = await Bookmark.findOne({
        id: bookmarkId,
        UserId: userId
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}
