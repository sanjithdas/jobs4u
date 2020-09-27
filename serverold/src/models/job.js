module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define("Job",{
    user_id:      {type: DataTypes.INTEGER},
      company_id:   {type: DataTypes.INTEGER},
      title:        {type: DataTypes.STRING},
      slug:         {type: DataTypes.STRING},
      description:  {type: DataTypes.TEXT},
      roles:        {type: DataTypes.STRING},
      position:     {type: DataTypes.STRING},
      address:      {type: DataTypes.STRING},
      type:         {type: DataTypes.STRING},
      status:       {type: DataTypes.INTEGER},
      last_date:    {type: DataTypes.DATE},
      number_of_vacancy: {type: DataTypes.INTEGER},
      experience:   {type: DataTypes.INTEGER},
      salary:       {type: DataTypes.STRING},
  })
  Job.associate = models => {
    Job.belongsTo(models.Category,{
      foreignKey:{
        allowNull: false
      }
    })
  }
  return Job;
}