Meteor.publish('todos', () => {
  return Todos.find();
});

JsonRoutes.add("get", "/todos/:id", function (req, res, next) {
  const id = req.params.id;

  JsonRoutes.sendResult(res, {
    data: Todos.findOne(id)
  });
});