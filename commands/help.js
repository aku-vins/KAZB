module.exports.run = async (client, message, args, prefix) => {
message.chnnel.send('ping')
}

module.exports.config = {
  name:"help",
  aliases:"help"
}