import App from './configs/app'

const PORT = 3000
App.listen(PORT, () => {
  console.log(
    '======================== ' +
      `Server running on port ${PORT}` +
      ' ========================'
  )
})
