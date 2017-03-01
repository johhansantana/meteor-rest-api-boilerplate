Meteor.methods({
  'todos.insert'({newText}) {
    new SimpleSchema({
      newText: {type: String}
    }).validate({newText});

    Todos.insert({
      newText
    }, (err, res) => {
      if (err) throw err;
      console.log('success: ', res);
    });
  }
});