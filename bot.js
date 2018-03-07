const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Uzaktan Geldi ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Günün Nasıl ?') {
    msg.reply('İyi Seninki');
  }
});

client.login('Mzk0MjQ4MzY5NjEyMTI4MjY2.DXBY1A.8uVyv1OMX9x0kHtHmvvM_GYO-5Q');

client.on('message', msg => {
  if (msg.content === 'İyi') {
    msg.reply('Paşa sevindi !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kötü') {
    msg.reply('Paşa Üzüldü !');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('Paşa sana selam veriyor !');
  }
});

client.on('message', msg => {
  if (msg.content === 'paşa') {
    msg.reply('Paşa emrinde Dostum !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Seni kim yaptı ?') {
    msg.reply('Nağmıdeğer Zuker !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Eyraxı seviyormusun ?') {
    msg.reply('O benim sahibim ve onu çok severim !');
  }
});

client.on('message', msg => {
  if (msg.content === 'yardım et bana paşa') {
    msg.reply('tabiki , (Günün Nasıl ? | Seni kim yaptı ? | Selam | Kaç Yaşındasın ? | paşa canım sıkıldı | paşa seni seviyorum | paşa | Kardeşin Kim ? | En Sevdiğin Şey ? | En Sevmediğin Şey ? | Eyraxı seviyormusun ? |Poyraz Kimdir ? | Efe Kimdir ? | bir tüyo : eğer yazdığım gibi büyük veya küçük yazmassan komutlar çalışmayacak haberin olsun güzel insan | günün nasıl ? İyi veya Kötü )');
  }
});

client.on('message', msg => {
  if (msg.content === 'paşa canım sıkıldı') {
    msg.reply('eğlenmek istiyorsan Sürmeliyle birlikte dıptıs dıptıs yaparak müzik dinleyebilirsin');
  }
});

client.on('message', msg => {
  if (msg.content === 'paşa seni seviyorum') {
    msg.reply('bende seni seviyorum güzel insan');
  }
});

client.on('message', msg => {
  if (msg.content === 'paşa günaydın') {
    msg.reply('Günaydın "Haaaa Haaaa" !');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kardeşin Kim ?') {
    msg.reply('Sürmeli Ama nefret ederim :rage:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kaç Yaşındasın ?') {
    msg.reply('Daha sekiz aylığım');
  }
});

client.on('message', msg => {
  if (msg.content === 'En Sevdiğin Şey ?') {
    msg.reply('EyRax :heart_eyes:');
  }
});

client.on('message', msg => {
  if (msg.content === 'En Sevmediğin Şey ?') {
    msg.reply('Sürmeli :rage:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Poyraz Kimdir ?') {
    msg.reply('Canberk Poyraz Özsoy Nağmıdeğer Eyrax 2006 yılında dünyaya gelmiş bir ortaokul öğrencisidir kendisi bu sunucuyu kurmuştur ve beni hayata geçiren efenin arkadaşıdır efe hakkında bilgi için Efe Kimdir ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Efe Kimdir ?') {
    msg.reply('30 temmuz 2006 yılında Ankarada dünyaya gelmiş bir ortaokul öğrencisidir kendisi bilgisayarla ilgilenir ve sürmeliyle beni kodlayan insandır poyrazın en yakın arkadaşlarından birisidir poyraz hakkında bilgi için Poyraz Kimdir ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Arda Kimdir ?') {
    msg.reply('Bilmem O sayko kim la amq');
  }
});