const mongoose = require('mongoose')

const ResultMaleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gender: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
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
    isCAProstate: {
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
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = ResultMale = mongoose.model('ResultMale', ResultMaleSchema)