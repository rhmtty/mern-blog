const fetch = require('node-fetch')

const handler = async function () {
  // fetch("/.netlify/functions/node-fetch", { headers: { accept: "Accept: application/json" } })
  //   .then((x) => x.json())
  //   .then(({ msg }) => setMsg(msg))

  try {
    const response = await fetch('/.netlify/home/node-fetch', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
