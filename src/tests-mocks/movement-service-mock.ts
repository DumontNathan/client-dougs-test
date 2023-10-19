import {MovementsAndBalancesDTO, ValidationResponseDTO} from "../app/http/movements/movements.model";

export const validMovementsAndBalancesMock: MovementsAndBalancesDTO = {
  movements: [
    {
      id: 1,
      date: new Date('2023-10-01'),
      label: 'Transaction A',
      amount: 100,
    },
    {
      id: 2,
      date: new Date('2023-10-02'),
      label: 'Transaction B',
      amount: 200,
    },
    {
      id: 3,
      date: new Date('2023-10-04'),
      label: 'Transaction D',
      amount: 50,
    },
  ],
  balances: [
    { date: new Date('2023-10-01'), balance: 1000 },
    { date: new Date('2023-10-15'), balance: 1350 },
  ],
};

export const validMovementsResponseMock: ValidationResponseDTO = {
  message: 'Accepted',
};

export const duplicatesMovementsResponseMock: ValidationResponseDTO = {
  message: "I'm a teapot",
  reasons: [
    {
      reason: 'Doublons',
      duplicates: [
        {
          id: 3,
          date: new Date('2023-10-04'),
          label: 'Transaction D',
          amount: 50,
        },
      ],
    },
  ],
};
