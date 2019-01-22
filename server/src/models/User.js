const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
// const CryptoJS = require('crypto-js')

function hashPassword (user, options) {
  const SALT_FACTOR = 8
  console.log('hashPassword')
  if (!user.changed('password')) {
    return
  }
  const val = bcrypt.genSaltSync(SALT_FACTOR)
  const hash = bcrypt.hashSync(user.password, val)
  // console.log(user.password)
  return user.setDataValue('password', hash)
  // console.log(val)
  // console.log(hash)
  // return bcrypt
  //   .genSaltSync(SALT_FACTOR)
  //   .then(function (salt) {
  //     return bcrypt.hashSync(user.password, salt, null)
  //   })
  //   .then(function (hash) {
  //     return user.setDataValue('password', hash)
  //   })
}

// This function also works. just use it if needed for SHA256
// function hPassword (user, options) {
//   var password = user.password
//   const hash = CryptoJS.SHA256(password)
//   // console.log(hash, String(hash))
//   return user.setDataValue('password', String(hash))
// }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }
  ,
  {
    hooks: {
      // beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  }
  )

  User.prototype.comparePassword = function (password) {
    // eslint-disable-next-line handle-callback-err
    return bcrypt.compareSync(password, this.password)
    // var upassword = password
    // const hash = CryptoJS.SHA256(upassword)
    // // console.log(hash, String(hash))
    // return this.password === String(hash)
  }

  return User
}
