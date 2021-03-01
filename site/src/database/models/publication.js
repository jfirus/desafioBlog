module.exports = (sequelize, DataTypes) =>{

    let alias = 'Publications';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
         },
         body: {
            type: DataTypes.STRING
         },
        image: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
        },
        likes: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'publications', // El nombre de la tabla hay que ponerlo acá solo si no coincide con el nombre anteriormente usado. En este caso coincide pero lo pongo por buena práctica
        timestamps: false
    };

    
    const Publication = sequelize.define(alias, cols, config);
    

    
    //Hago la asociación con la tabla asociada. En la foreignKey va el nombre de la columna de la clave de la tabla asociada
    Publication.associate = function(models) {
        Publication.hasMany(models.Comments, {
            foreignKey: 'publicationId',
            as: 'CommentsPublication'
        });
    };

    return Publication;

}