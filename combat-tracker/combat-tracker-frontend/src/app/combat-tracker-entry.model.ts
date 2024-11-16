export class CombatTrackerEntry {
    constructor(
        public characterName: string,
        public playerName: string,
        public initiative: number,
        public health: number,
        public timestamp: string,
        public id?: number
    ) {}
}
