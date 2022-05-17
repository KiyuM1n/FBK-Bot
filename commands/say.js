exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send({content:"說點什麼啊!"})
  message.channel.send({content:toSay})
}
  
module.exports.name = "say"