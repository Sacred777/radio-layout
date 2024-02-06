import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: '.order__input_name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },

  {
    ruleSelector: '.order__input_email',
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

  {
    ruleSelector: '.order__textarea',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },

      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.order__form', rules1, afterForm);
