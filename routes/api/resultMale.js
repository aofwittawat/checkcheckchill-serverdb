const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

//Models
const User = require("../../models/User");
const ResultMale = require("../../models/ResultMale")


//@route    GET api/resultmale/me
//@desc     Get current resultmale
//@access   Private
router.get("/me", auth, async (req, res) => {
    try {
        const resultMale = await ResultMale.findOne({ user: req.user.id }).populate(
            "user",
            ["firstname", "lastname","tel"]
        );
        if (!resultMale) {
            return res.status(404).json({ msg: "There is no result for this user" });
        }
        res.json(resultMale);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Sever Error");
    }
});

//@route    POST api/resultmale
//@desc     post risk factors to DB
//@access   Private
router.post("/", [auth, [
    check("age", "age is required").not().isEmpty(),
    check("weight", "weight is required").not().isEmpty(),
    check("height", "height is required").not().isEmpty(),
]],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // destructure the request
    const {
        age,
        weight,
        height,
        isSmoking,
        isDrinking,
        isVacineHepB,
        isExposure,
        isRenalFailure,
        isDM,
        isHT,
        isDLP,
        isHepatitis,
        isPancreaitis,
        isColitis,
        isOsteoporosis,
        isAsthma,
        isStone,
        isMI,
        isCAColon,
        isCAProstate,
        isCALiver,
        isCAPancreas,
        isCAOthers,
    } = req.body
    // Build a result object
    const resultFileds = {}
    resultFileds.user = req.user.id
    resultFileds.gender ='male'
    if(age) resultFileds.age = age
    if(weight) resultFileds.weight = weight
    if(height) resultFileds.height = height
    if(isSmoking) resultFileds.isSmoking = isSmoking
    if(isDrinking) resultFileds.isDrinking = isDrinking
    if(isVacineHepB) resultFileds.isVacineHepB = isVacineHepB
    if(isExposure) resultFileds.isExposure = isExposure
    if(isRenalFailure) resultFileds.isRenalFailure = isRenalFailure
    if(isDM) resultFileds.isDM = isDM
    if(isHT) resultFileds.isHT = isHT
    if(isDLP) resultFileds.isDLP = isDLP
    if(isHepatitis) resultFileds.isHepatitis = isHepatitis
    if(isPancreaitis) resultFileds.isPancreaitis = isPancreaitis
    if(isColitis) resultFileds.isColitis = isColitis
    if(isOsteoporosis) resultFileds.isOsteoporosis = isOsteoporosis
    if(isAsthma) resultFileds.isAsthma = isAsthma
    if(isStone) resultFileds.isStone = isStone
    if(isMI) resultFileds.isMI = isMI
    if(isCAColon) resultFileds.isCAColon = isCAColon
    if(isCAProstate) resultFileds.isCAProstate = isCAProstate
    if(isCALiver) resultFileds.isCALiver = isCALiver
    if(isCAPancreas) resultFileds.isCAPancreas = isCAPancreas
    if(isCAOthers) resultFileds.isCAOthers = isCAOthers

    try {
        let resultMale = await ResultMale.findOne({ user: req.user.id });
        if (resultMale) {
          //Update
          resultMale = await ResultMale.findOneAndUpdate(
            { user: req.user.id },
            { $set: resultFileds },
            { new: true },
          );
          return res.json(resultMale);
        }
        //Create
        resultMale = new ResultMale(resultFileds);
        await resultMale.save();
        res.json(resultMale);
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    }
  );

//@route    DELETE api/resultmale
//@desc     delete user and result
//@access   private
router.delete("/", auth, async (req, res) => {
    try {
      // Remove Own Result
      await ResultMale.findOneAndRemove({ user: req.user.id });
      // Remove User
      await User.findOneAndRemove({ _id: req.user.id });
      res.json({ msg: "User deleted" });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  });
  

  module.exports = router;