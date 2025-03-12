const Permissions = require("../module/model/permissions");


const checkPermission = (permission) => {

    return (req, res, next) => {
        const userRole = req.user ? req.user.role : "anonymous";
        const userPermissions = Permissions.getPermissionsByRoleName(
            userRole
        );

        if (userPermissions.includes(permission)) {
            return next();
        } else {
            return res.status(403).json({ error: "Access denied" });
        }
    };
};

module.exports = {
    checkPermission
}