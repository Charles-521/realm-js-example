class Organisation {}
Organisation.schema = {
  name: 'Organisation',
  properties: {
    id: 'string',
    name: 'string',
    email: 'string',
    password: 'string'
  }
};

class User {}
User.schema = {
  name: 'User',
  properties: {
    id: 'string',
    email: 'string',
    password: 'string',
    organisation_id: 'string'
  }
};


class LocalUser {}
LocalUser.schema = {
  name: 'LocalUser',
  properties: {
    id: 'string',
    email: 'string'
  }
};

class Project {}
Project.schema = {
  name: 'Project',
  properties: {
    id: 'string',
    name: 'string',
    createdBy: 'string',
    createdAt: 'date'
  }
};

class Template {}
Template.schema = {
  name: 'Template',
  properties: {
    id: 'string',
    treeData: 'string',
    createdBy: 'string',
    createdAt: 'date'
  }
};

export {
  Organisation,
  User,
  Project,
  Template,
  LocalUser
}
