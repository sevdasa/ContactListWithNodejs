import { DataTypes, Sequelize } from "sequelize";
export default function (sequelize) {
    return sequelize.define('Contact', {
        firstName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        mobilePhone: {
            type: DataTypes.STRING(10)
        },
        isFavourite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        profilePicture: {
            type: DataTypes.BLOB
        }
    });
}