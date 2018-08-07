const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
  // 清空session
  req.session.user = null
  // 给出提示
  req.flash('success', '登出成功')
  // 登出后跳转到主页
  res.redirect('/posts')
})

module.exports = router
