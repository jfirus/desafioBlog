module.exports = (sequelize, DataTypes) =>{

    let alias = 'Comments';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment: {
            type: DataTypes.STRING
         },
        publicationId: {
            type: DataTypes.INTEGER
        },
        userEmail: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: 'comments', // El nombre de la tabla hay que ponerlo acá solo si no coincide con el nombre anteriormente usado. En este caso coincide pero lo pongo por buena práctica
        timestamps: false
    };

    const Comment = sequelize.define(alias, cols, config);
    
       //Hago la asociación con la tabla asociada. En la foreignKey va el nombre de la columna de la clave de la tabla asociada
       Comment.associate = function(models) {
            Comment.belongsTo(models.Publications, {
                foreignKey: 'publicationId',
                as: 'CommentsPublication'
            });
    };


    return Comment;

}