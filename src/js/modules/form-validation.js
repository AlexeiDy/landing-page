
export function validationContactForm() {
  $('#contactForm').validate({
    rules: {
      form_name: {
        required: true
      },
      form_email: {
        required: true,
        email: true
      },
      form_message: {
        required: true
      }
    },
    messages: {
      form_name: {
        required: 'поле Name обязательное для заполнения'
      },
      form_email: {
        required: 'поле EMAIL обязательное для заполнения',
        email: 'введите корректный адрес электронной почты'
      },
      form_message: {
        required: 'поле Message обязательное для заполнения'
      }
    },
    focusCleanup: true
  })
}
