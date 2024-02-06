import { validateForms } from '../functions/validate-forms';

const rules2 = [
  {
    ruleSelector: '.email-form__input',
    rules: [
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат'
      },

      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.email-form', rules2, afterForm);
