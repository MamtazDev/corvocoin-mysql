module.exports = (sequelize, DataTypes) => {
  const InputValue = sequelize.define("inputValue", {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
    },
    choice: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    input: {
      type: DataTypes.STRING,
    },
  });
  return InputValue;
};
