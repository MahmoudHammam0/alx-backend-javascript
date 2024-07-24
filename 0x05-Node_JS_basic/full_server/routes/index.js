const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = router;
