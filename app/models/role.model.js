module.exports = (sequelize,Sequelize) =>{
    const Role = sequelize("roles",{
        id:{
            type: Sequelize.INTEGER
        },
        name:{
            type: Sequelize.STRING
        }
    });
    return Role;
};