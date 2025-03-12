const roles = require('../../config/roles.json')

class Role {

  getRoleByName(name) {
    return roles.roles.find((role) => role.name === name);
  }

  getRoles() {
    return roles.roles;
  }

}


const role = new Role();
module.exports = role;