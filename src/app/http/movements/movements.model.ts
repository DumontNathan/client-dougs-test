/*
improvement => create enums for front models, example :

export enum ValidationResponseColIdsEnum {
MESSAGE: "message,
REASONS: "reasons",
}

export interface ValidationResponseModel {
[ValidationResponseColIdsEnum.MESSAGE]: string;
[ValidationResponseColIdsEnum.REASONS]: ReasonModel[];
}

...

then create a mapper to use when retrieving data in the service, example :

mapValidationResponseDtoToModel(validationResponseDto: ValidationResponseDto): ValidationResponseModel {
    return {
      [ValidationResponseColIdsEnum.MESSAGE]: validationResponseDto.message,
      [ValidationResponseColIdsEnum.REASONS]: validationResponseDto.reasons.map((r) =>
        mapReasonsDtoToModel(r)
      ),
    };
  }

...

*/


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
  notInPeriod?: Movement[];
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


