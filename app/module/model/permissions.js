const roles = require('../../config/roles.json')

class Permissions{

    getPermissionsByRoleName(roleName) {
        const role = roles.roles.find((role) => role.name === roleName);
        return role ? role.permissions : [];
    }
}

const permissions = new Permissions();
module.exports = permissions;