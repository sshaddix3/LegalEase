const { Client } = require("pg");
const format = require("pg-format");

const dbClient = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "login-page-database-test",
  password: "******",
  port: 5432,
});

dbClient.connect();

function findUserByID(id) {
  return dbClient
    .query(`SELECT email, password, name, id FROM users WHERE id = ($1)`, [id])
    .then((res) => {
      const user = res.rows[0];
      return user;
    });
}

function findUserByEmail(email) {
  // return new Promise((resolve, reject) => {
  //     dbClient.query(`SELECT email, password, name, id FROM users WHERE email = '${email}'`, (err, res) => {
  //         if(err){
  //             reject(err);
  //             return;
  //         }

  //         if(res.rows.length == 0){
  //             resolve(null);
  //             return;
  //         }
  //         const user = res.rows[0];
  //         console.log(user.name);
  //         resolve(user);
  //     });
  // });

  return dbClient
    .query(`SELECT email, password, name, id FROM users WHERE email = ($1)`, [
      email,
    ])
    .then((res) => {
      const user = res.rows[0];
      return user;
    });
}

function insertUser(email, password, name) {
  return dbClient
    .query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [
      name,
      email,
      password,
    ])
    .then((res) => {
      return findUserByEmail(email);
    });

  // return new Promise((resolve, reject) => {

  //     function onInsertUserResponse(err, res){
  //         if(err){
  //             reject(err);
  //             return;
  //         }

  //         findUserByEmail(email)
  //             .then(user => resolve(user))
  //             .catch(err => reject(err));
  //     }

  // })
}

function insertPasswordResetRequest(
  userID,
  pwResetRngString,
  pwResetExpirationDate
) {
  return dbClient
    .query(
      `INSERT INTO password_reset_requests (user_id, generated_string, expires_at) VALUES ($1, $2, $3) RETURNING id, generated_string`,
      [userID, pwResetRngString, pwResetExpirationDate]
    )
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
}

function insertQuestionAnswer(userID, userName, question, questionAnswer) {
  return findQuestionAnswer(userID, question).then((res) => {
    if (res) {
      const query = format(
        `UPDATE question_answers SET %I = ($2) WHERE user_id = ($1)`,
        question
      );
      return dbClient.query(query, [userID, questionAnswer]).then((res) => {
        return findQuestionAnswer(userID, question);
      });
    } else {
      const query = format(
        `INSERT INTO question_answers (user_id, user_name, %I) VALUES ($1, $2, $3)`,
        question
      );
      return dbClient
        .query(query, [userID, userName, questionAnswer])
        .then((res) => {
          return findQuestionAnswer(userID, question);
        });
    }
  });
}

function findQuestionAnswer(userID, question) {
  const query = format(
    `SELECT id, user_id, user_name, %I FROM question_answers WHERE user_id = ($1)`,
    question
  );
  return dbClient.query(query, [userID]).then((res) => {
    const userQuestionAnswer = res.rows[0];
    return userQuestionAnswer;
  });
}

function insertClientInfo(userID, userName, clientName) {
  return dbClient
    .query(
      `INSERT INTO clients (user_id, user_name, client_name) VALUES ($1, $2, $3)`,
      [userID, userName, clientName]
    )
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    });
}

module.exports = {
  findUserByEmail,
  insertUser,
  insertPasswordResetRequest,
  findUserByID,
  findQuestionAnswer,
  insertQuestionAnswer,
  insertClientInfo,
};
