const mongoose = require('mongoose')

const ResultFemaleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    risk: [
        {
            age:{
                type: Number,
                required:true
            },
            weight:{
                type: Number,
                required:true
            },
            height:{
                type: Number,
                required:true
            },
            bmi:{
                type: Number,
                required:true
            },
            isSmoking: {
                type: Boolean,
                default: false
            },
            isDrinking: {
                type: Boolean,
                default: false
            },
            isVacineHepB: {
                type: Boolean,
                default: false
            },
            isExposure: {
                type: Boolean,
                default: false
            },
            isRenalFailure: {
                type: Boolean,
                default: false
            },
            isDM: {
                type: Boolean,
                default: false
            },
            isHT: {
                type: Boolean,
                default: false
            },
            isDLP: {
                type: Boolean,
                default: false
            },
            isHepatitis: {
                type: Boolean,
                default: false
            },
            isPancreaitis: {
                type: Boolean,
                default: false
            },
            isColitis: {
                type: Boolean,
                default: false
            },
            isOsteoporosis: {
                type: Boolean,
                default: false
            },
            isAsthma: {
                type: Boolean,
                default: false
            },
            isStone: {
                type: Boolean,
                default: false
            },
            isMI: {
                type: Boolean,
                default: false
            },
            isCAColon: {
                type: Boolean,
                default: false
            },
            isCABreast: {
                type: Boolean,
                default: false
            },
            isCAOvary: {
                type: Boolean,
                default: false
            },
            isCACervix: {
                type: Boolean,
                default: false
            },
            isCALiver: {
                type: Boolean,
                default: false
            },
            isCAPancreas: {
                type: Boolean,
                default: false
            },
            isCAOthers: {
                type: Boolean,
                default: false
            },
            

        }
    ]
})

module.exports = ResultFemale = mongoose.model('resultFemale', ResultFemaleSchema)