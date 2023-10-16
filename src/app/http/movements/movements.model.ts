export interface ValidationResponseDTO {
  message: string;
  reasons?: Reason[];
}

export interface MovementsAndBalancesDTO {
  movements: Movement[];
  balances: Balance[];
}

export interface Reason {
  reason: string;
  duplicates?: Movement[];
  missingMovements?: MissingMovement[];
}

export interface MissingMovement {
  startDate: Date;
  endDate: Date;
  actualTotalMovement: number;
  observedTotalMovement: number;
}

export interface Movement {
  id: number;
  date: Date;
  label: string;
  amount: number;
}

export interface Balance {
  date: Date;
  balance: number;
}


