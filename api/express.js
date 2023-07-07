const pdffiller = require("pdffiller-stream");
const express = require("express");
const cors = require("cors");
const dbClient = require("./dbClient");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

let sourcePDF = "C:/Users/sawye/Coding/FreeBirdProj/fl100_NoRestriction.pdf";

let data = {
  "FL-100[0].Page1[0].PartiesSignedVoluntaryPaternityDec_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].Amended_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].DissolutionOf_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].Marriage_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].DomesticPartnership_cb[0]":
    "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].NullityOf_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].Marriage_cb[1]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].DomesticPartnership_cb[1]":
    "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].LegalSeparationOf_cb[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].Marriage_cb[2]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].FormTitle[0].DomesticPartnership_cb[2]":
    "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyFor_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].Email_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].Fax_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].Phone_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyZip_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyState_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyCity_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyStreet_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyFirm_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].AttyName_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].AttyInfo[0].BarNo_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CourtInfo[0].CrtCounty_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CourtInfo[0].Branch_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CourtInfo[0].CityZip_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CourtInfo[0].Street_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CourtInfo[0].MailingAdd_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].TitlePartyName[0].Party2_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].TitlePartyName[0].Party1_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0].CaseNumber[0].CaseNumber_ft[0]": "",
  "FL-100[0].Page1[0].CaptionP1_sf[0]": "",
  "FL-100[0].Page1[0].WeAreMarried_cb[0]": "",
  "FL-100[0].Page1[0].DPEstablishedInCalifornia[0]": "",
  "FL-100[0].Page1[0].DPNOTEstablishedinCA_cb[0]": "",
  "FL-100[0].Page1[0].RespondentMeetsResidencyReqs_cb[0]": "",
  "FL-100[0].Page1[0].PetitionerMeetsResidencyReqs_cb[0]": "",
  "FL-100[0].Page1[0].DateOfMarriage_dt[0]": "",
  "FL-100[0].Page1[0].DateOfSeparation_dt[0]": "",
  "FL-100[0].Page1[0].MonthsSeparated_tf[0]": "",
  "FL-100[0].Page1[0].CheckBox61[0]": "",
  "FL-100[0].Page1[0].CheckBox61[1]": "",
  "FL-100[0].Page1[0].DatePartnersSeparated_dt[0]": "",
  "FL-100[0].Page1[0].DateTimeField1[0]": "",
  "FL-100[0].Page1[0].ThereAreNoMinorChildren_cb[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].MinorChildrenList_cb[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child1Name_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child4Name_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child3Name_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child2Name_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child1Age_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child4Age_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child3Age_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child2Age_tf[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child1Birthdate_dt[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child4Birthdate_dt[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child3Date_dt[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Child2Birthdate_dt[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].UnbornChild_cb[0]": "",
  "FL-100[0].Page1[0].MinorChildren_sf[0].Attachment4b[0]": "",
  "FL-100[0].Page1[0].DPNOTEstablishedinCA_cb[1]": "",
  "FL-100[0].Page1[0].SameSexMarriedInCA_cb[0]": "",
  "FL-100[0].Page1[0].RespondentsResidence_tf[0]": "",
  "FL-100[0].Page1[0].PetitionersResidence_tf[0]": "",
  "FL-100[0].Page1[0].MonthsSeparated_tf[1]": "",
  "FL-100[0].Page1[0].MonthsSeparated_tf[2]": "",
  "FL-100[0].Page1[0].MonthsSeparated_tf[3]": "",
  "FL-100[0].Page1[0].Button1[0]": "",
  "FL-100[0].Page2[0].Nullity_cb[0]": "",
  "FL-100[0].Page2[0].BasedOnIncest_cb[0]": "",
  "FL-100[0].Page2[0].BasedOnBigamy_cb[0]": "",
  "FL-100[0].Page2[0].NullityofVoidableMarriageOrDP_cb[0]": "",
  "FL-100[0].Page2[0].BasedonAge_cb[0]": "",
  "FL-100[0].Page2[0].PriorExistingMarriageOrDP_cb[0]": "",
  "FL-100[0].Page2[0].BasedOnUnsoundMind_cb[0]": "",
  "FL-100[0].Page2[0].BasedonFraud_cb[0]": "",
  "FL-100[0].Page2[0].BasedOnForce_cb[0]": "",
  "FL-100[0].Page2[0].BasedonPhysicalIncapacity_cb[0]": "",
  "FL-100[0].Page2[0].SepTypeDef_cb[0]": "",
  "FL-100[0].Page2[0].SepTypeDef_cb[1]": "",
  "FL-100[0].Page2[0].SepBasis_cb[0]": "",
  "FL-100[0].Page2[0].SepBasis_cb[1]": "",
  "FL-100[0].Page2[0].ToPetitioner_cb[0]": "",
  "FL-100[0].Page2[0].ToRespondent_cb[0]": "",
  "FL-100[0].Page2[0].ToBothJointly_cb[0]": "",
  "FL-100[0].Page2[0].ToOther_cb[0]": "",
  "FL-100[0].Page2[0].ToPetitioner_cb[1]": "",
  "FL-100[0].Page2[0].ToRespondent_cb[1]": "",
  "FL-100[0].Page2[0].ToBothJointly_cb[1]": "",
  "FL-100[0].Page2[0].ToOther_cb[1]": "",
  "FL-100[0].Page2[0].ForPetitioner_cb[0]": "",
  "FL-100[0].Page2[0].ForOther_cb[0]": "",
  "FL-100[0].Page2[0].ForRespondent_cb[0]": "",
  "FL-100[0].Page2[0].FormFL-311_cb[0]": "",
  "FL-100[0].Page2[0].FormFL-312_cb[0]": "",
  "FL-100[0].Page2[0].FormFL-341C_cb[0]": "",
  "FL-100[0].Page2[0].FormFL-341D_cb[0]": "",
  "FL-100[0].Page2[0].FormFL-341E[0]": "",
  "FL-100[0].Page2[0].Attachment6e1[0]": "",
  "FL-100[0].Page2[0].ChildSupport_ft[0]": "",
  "FL-100[0].Page2[0].OtherChildSupport_cb[0]": "",
  "FL-100[0].Page2[0].EndJurixReRespondent_cb[0]": "",
  "FL-100[0].Page2[0].EndJurixRePetitioner_cb[0]": "",
  "FL-100[0].Page2[0].EndJurixReSupport[0]": "",
  "FL-100[0].Page2[0].PaySupporttoPetitioner_cb[0]": "",
  "FL-100[0].Page2[0].PaySupportoRespondent_cb[0]": "",
  "FL-100[0].Page2[0].PaySupport_cb[0]": "",
  "FL-100[0].Page2[0].PartiesSignedVoluntaryPaternityDec_cb[0]": "",
  "FL-100[0].Page2[0].ReserveJurixSupportResp_cb[0]": "",
  "FL-100[0].Page2[0].ReserveJurixSupportPet_cb[0]": "",
  "FL-100[0].Page2[0].OtherSupport_ft[0]": "",
  "FL-100[0].Page2[0].Other_cb[0]": "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].Button1[0]": "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].WhereSPListed_cb[0]": "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmSeparateProperty_cb[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].WhereSPListed_cb[1]": "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].WhereSPListed_cb[2]": "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].SeparatePropertyList1_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].SeparatePropertyList3_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].SeparatePropertyList2_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmPropertyList1To_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmPropertyList3To_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].SeparatePropertyList4_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmPropertyList4To_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].SeparatePropertyList4_tf[1]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmPropertyList4To_tf[1]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].ConfirmPropertyList2To_tf[0]":
    "",
  "FL-100[0].Page2[0].ConfirmSeparateProperty_sf[0].Button1[1]": "",
  "FL-100[0].Page2[0].NoSeparateProperty_cb[0]": "",
  "FL-100[0].Page2[0].CaseNumber[0].CaseNumber_ft[0]": "",
  "FL-100[0].Page2[0].Parties[0].Party2_ft[0]": "",
  "FL-100[0].Page2[0].Parties[0].Party1_ft[0]": "",
  "FL-100[0].Page3[0].CaseNumber[0].CaseNumber_ft[0]": "",
  "FL-100[0].Page3[0].Parties[0].Party2_ft[0]": "",
  "FL-100[0].Page3[0].Parties[0].Party1_ft[0]": "",
  "FL-100[0].Page3[0].SigDate[0]": "",
  "FL-100[0].Page3[0].PrintPetitionerName_tf[0]": "",
  "FL-100[0].Page3[0].NoCommOrQuasiCommProperty_cb[0]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].WhereCPListed_cb[0]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].WhereCPListed_cb[1]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].PropertyListed_cb[0]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].ListProperty_ft[0]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].WhereCPListed_cb[2]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].Button1[0]": "",
  "FL-100[0].Page3[0].CommQuasiProperty_sf[0].Button1[1]": "",
  "FL-100[0].Page3[0].FeesAndCost_cb[0]": "",
  "FL-100[0].Page3[0].AttyFeePay_cb[0]": "",
  "FL-100[0].Page3[0].AttyFeePay_cb[1]": "",
  "FL-100[0].Page3[0].RestoreFormerName_cb[0]": "",
  "FL-100[0].Page3[0].SpecifyFormerName_tf[0]": "",
  "FL-100[0].Page3[0].SpecifyOtherRequests_tf[0]": "",
  "FL-100[0].Page3[0].ContinuedOnAttachment_cb[0]": "",
  "FL-100[0].Page3[0].OtherRequests_cb[0]": "",
  "FL-100[0].Page3[0].SigDate[1]": "",
  "FL-100[0].Page3[0].PrintPetitionerAttorneyName_tf[0]": "",
  "FL-100[0].Page3[0].#area[0].Print[0]": "",
  "FL-100[0].Page3[0].#area[0].Save[0]": "",
  "FL-100[0].Page3[0].#area[0].Reset[0]": "",
  "FL-100[0].Page3[0].#area[0].Warning[0]": "",
  "FL-100[0].Page3[0].Button1[0]": "",
  "FL-100[0]": "",
  pressButton: "Yes",
  dissdivof: "Off",
  Button5: "Yes",
};

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser("Yosemite"));

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let a = "";

app.post("/pdfGenerator", (req, res) => {
  const nameRegex = null;

  // const FDF_data = pdffiller.generateFDFTemplate(sourcePDF, nameRegex).then((fdfData) => {
  //     console.log(fdfData);
  // }).catch((err) => {
  //     console.log(err);
  // });

  pdffiller
    .fillForm(sourcePDF, data)
    .toFile("outputFile.PDF")
    .then(() => {
      // your file has been written
    })
    .catch((err) => {
      console.log(err);
    });

  // res.status(200).json({
  //     message: a
  // })
});

const authenticationMiddleware = (req, res, next) => {
  if (!req.userID) {
    res.status(401).json({
      error: "not authenticated",
    });
    return;
  }

  dbClient
    .findUserByID(req.userID)
    .then((user) => {
      delete user.password;

      req.user = user;

      next();
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal Server Error",
      });
    });
};

app.get("/account", authenticationMiddleware, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

// LOGIN PAGE
app.post("/login", (req, response) => {
  console.log("login");
  console.dir(req.signedCookies);

  dbClient
    .findUserByEmail(req.body.email)
    .then((user) => {
      if (!user) {
        response.status(400).json({
          error: "user not found",
        });
        return;
      }

      bcrypt.compare(req.body.password, user.password).then((result) => {
        console.log(`${req.body.password} ---- ${user.password}`);
        if (result == true) {
          response.cookie("userID", user.id, {
            maxAge: 9000000,
            signed: true,
            httpOnly: true,
            sameSite: "strict",
          });

          response.status(200).json({
            email: user.email,
            name: user.name,
            id: user.id,
          });
        } else {
          response.status(400).json({
            error: "password incorrect",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json({
        error: "database error",
      });
    });
});

//REGISTER PAGE
app.post("/register", (req, res) => {
  console.log("register");

  console.dir(req.cookies);

  let str = req.body.emailField.trim();

  let includesAtSign = str.includes("@");

  if (includesAtSign == false) {
    res.status(400).json({
      errorInEmail: "You need to include an @ symbol",
    });

    return;
  }

  const saltRounds = 10;

  bcrypt.hash(req.body.passwordField, saltRounds).then((hash) => {
    console.log(`${req.body.passwordField} --- ${hash}`);
    dbClient
      .insertUser(str, hash, req.body.nameField)
      .then((user) => {
        res.status(200).json({
          id: user.id,
          name: user.name,
          email: user.email,
          password: hash,
          errorInEmail: "",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          errorInEmail: "database error",
        });
      });
  });
});

app.post("/passwordReset", (req, res) => {
  console.log("pwReset");

  const { pwResetEmailField } = req.body;

  console.log(pwResetEmailField);

  dbClient
    .findUserByEmail(pwResetEmailField)
    .then((user) => {
      if (!user) {
        throw new Error("User Does not exist");
      }

      const secretString = makeid(20);

      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1);

      return dbClient.insertPasswordResetRequest(
        user.id,
        secretString,
        expiresAt
      );
    })
    .then((dbResponse) => {
      res.status(200).json({
        pwResetEmailField: "Server Response",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

//question1
// app.post("/question1", (req, res) => {
//     console.log("question1");

//     let currentAnswer = req.body.currAnswer;

//     if(currentAnswer.length === 0){
//         return;
//     }

//         console.log(`${currentAnswer} - curr answer ${req.body.userID} - userID`);
//         dbClient.insertQ1aAnswer(req.body.userID, req.body.userName, currentAnswer)
//         .then(userquestion1aAnswer => {
//             console.log(`${userquestion1aAnswer.user_id} -- ${userquestion1aAnswer.user_name} -- ${userquestion1aAnswer.answer_q1a}`)
//             res.status(200).json({
//                 id: userquestion1aAnswer.user_id,
//                 name: userquestion1aAnswer.user_name,
//                 answerSubmitted: userquestion1aAnswer.answer_q1a
//             });
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 errorInEmail: "database error"
//             });
//         })
// });

app.post("/questionAnswer", (req, res) => {
  let currentQuestion = req.body.question;
  let currentAnswer = req.body.currAnswer;
  dbClient
    .insertQuestionAnswer(
      req.body.userID,
      req.body.userName,
      currentQuestion,
      currentAnswer
    )
    .then((userQuestionAnswers) => {
      console.log(
        `${userQuestionAnswers.user_id} -- ${userQuestionAnswers.user_name} -- ${userQuestionAnswers.currentQuestion}`
      );
      res.status(200).json({
        id: userQuestionAnswers.user_id,
        name: userQuestionAnswers.user_name,
        answerSubmitted: userQuestionAnswers.currentQuestion,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorInEmail: "database error",
      });
    });
});

app.post("/insertClientToDB", (req, res) => {
  let clientName = req.body.clientName;
  let clientNum = req.body.clientNum;
  dbClient
    .insertClientInfo(req.body.userID, req.body.userName, clientName)
    .then((user) => {
      console.log(
        `${user.user_id} -- ${user.user_name} -- ${user.client_name}`
      );
      res.status(200).json({
        id: user.user_id,
        name: user.user_name,
        clientName: user.client_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorInEmail: "database error",
      });
    });
});

app.listen(3001);
