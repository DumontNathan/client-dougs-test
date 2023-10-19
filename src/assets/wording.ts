export const WORDING: any = {
  placeHolder: 'Insérez les données à valider au format suivant : \n' +
    '{\n' +
    '  "movements": [\n' +
    '    {\n' +
    '      "id": number,\n' +
    '      "date": Date,\n' +
    '      "label": string,\n' +
    '      "amount": number\n' +
    '    },\n' +
    '    ...\n' +
    '  ],\n' +
    '  "balances": [\n' +
    '    { "date": Date, "balance": number },\n' +
    '    ...\n' +
    '  ]\n' +
    '}',
  buttonLabel : "Envoyer",
  missingOperationExplaination: 'Les opérations bancaires en dehors des périodes définies dans les relevés de compte doivent être retirées pour poursuivre la validation.',
  warningTitle: 'Opérations bancaires non synchronisées',
  successTitle: 'Les opérations bancaires sont bien synchronisées !',
  errorTitle: 'Veuillez verifier le bon format de données',
  id: 'ID',
  date: 'Date',
  montant: 'Montant',
  libelle: 'Libellé',
  periode: 'Période',
  actualTotalMovement : 'Total opérations réelles',
  observedTotalMovement: 'Total opérations observées',
  totalMissingMovement: 'Total opérations manquantes'
}
