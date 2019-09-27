const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4, DECIMAL } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_db');

const School = conn.define('school', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  imageURL: {
    type: STRING,
    allowNull: false
  }
})

const Student = conn.define('student', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  GPA: {
    type: DECIMAL,
    allowNull: false
  }
})

Student.belongsTo(School);
School.hasMany(Student);

const schools = [{
  name: 'Brown University',
  imageURL: 'https://www.h-net.org/jobs/logo_view.php?id=57089'
}, {
  name: 'Fullstack Academy',
  imageURL: 'https://www.fullstackacademy.com/images/fa-logo@2x.png',
}]

const BillGates = {
  firstName: 'Bill',
  lastName: 'Gates',
  email: 'bill@gates.com',
  GPA: 4.1
}

const syncAndSeed = async () => {
  await conn.sync({force: true});
  const [Brown, Fullstack] = await Promise.all(schools.map(school => School.create(school)));
  await Student.create({...BillGates, schoolId: Fullstack.id});
}

module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
}