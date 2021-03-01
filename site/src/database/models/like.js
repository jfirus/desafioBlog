module.exports = (sequelize, DataTypes) =>{

    let alias = 'Likes';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        publicationId: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'likes', // El nombre de la tabla hay que ponerlo acá solo si no coincide con el nombre anteriormente usado. En este caso coincide pero lo pongo por buena práctica
        timestamps: false
    };

    
    const Likes = sequelize.define(alias, cols, config);
    
    
    return Likes;

}