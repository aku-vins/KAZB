module.exports.run = async (client, message, args, prefix) => {
message.chnnel.send('pong')
}

module.exports.config = {
  name:"ping",
  aliases:"ping"
}