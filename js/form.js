class FormInput {
  constructor(form, notForm) {
    this.form = form;
    this.notForm = notForm;
    this._focus();
    this._exit();
  }

  _focus() {
    const { form, notForm } = this;
    $(document).keydown((e) => {
      if (!e.ctrlKey && !e.altKey && !e.metaKey && $(form).length) {
        $(form).css('display', 'flex');
        $(notForm).hide();
        $(`${form} input`).focus();
      }
    });
  }

  _exit() {
    const { form, notForm } = this;
    $(document).keyup((e) => {
      if (e.keyCode === 27) {
        $(`${form} input`).val('');
        $(form).hide();
        $(notForm).show();
      }
      if (e.keyCode === 8 || e.keyCode === 46) {
        const val = $.trim($(`${form} input`).val());
        if (val === '') {
          $(form).hide();
          $(notForm).show();
        }
      }
    });
  }
}

window.FormInput = FormInput;
