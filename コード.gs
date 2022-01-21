function myFunction() {

  const labelObject = GmailApp.getUserLabelByName('ノンプロ研');

  const threads = labelObject.getThreads(0, 10);
  console.log(threads.length); //3

  const messages = threads.map(thread => thread.getMessages()).flat();
  console.log(messages.length); //6

  for (const message of messages) {
    console.log(message.getPlainBody());
  }

}
