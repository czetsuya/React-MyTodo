export default class EventAction {

    static loadingAction(type = 'GLOBAL') {
        return type + "_REQUEST";
    }

    static successAction(type = 'GLOBAL') {
        return type + "_OK";
    }

    static failAction(type = 'GLOBAL') {
        return type + "_KO";
    }

}