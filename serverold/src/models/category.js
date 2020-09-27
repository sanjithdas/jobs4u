module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category",{
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Category.associate = models =>{
    Category.hasMany(models.Job,{
      onDelete: 'cascade'
    });
    
  }
 return Category;
}