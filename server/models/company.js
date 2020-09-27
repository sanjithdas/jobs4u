module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company",{
      user_id: DataTypes.INTEGER,
      cname: DataTypes.STRING,
      slug: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone: DataTypes.STRING,
      websites: DataTypes.STRING,
      logo: DataTypes.STRING,
      cover_photo: DataTypes.STRING,
      slogan: DataTypes.STRING,
      description: DataTypes.STRING,
     })
  Company.associate = models =>{
    Company.hasMany(models.Job,{
      onDelete: 'cascade'
    });
    
  }
 return Company;
}